package ssafy.sorhy.service.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.dto.user.UserDto;
import ssafy.sorhy.entity.company.Company;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.exception.CustomException;
import ssafy.sorhy.exception.ErrorCode;
import ssafy.sorhy.jwt.JwtTokenUtil;
import ssafy.sorhy.repository.article.ArticleRepository;
import ssafy.sorhy.repository.comment.CommentRepository;
import ssafy.sorhy.repository.company.CompanyRepository;
import ssafy.sorhy.repository.user.UserRepository;
import ssafy.sorhy.service.gameresult.GameResultService;

import javax.persistence.EntityManager;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserService {

    @Value("${jwt.secret}")
    private String secretKey;

    private final EntityManager em;
    private final UserRepository userRepository;
    private final ArticleRepository articleRepository;
    private final CommentRepository commentRepository;
    private final CompanyRepository companyRepository;
    private final GameResultService gameResultService;

    private final BCryptPasswordEncoder encoder;

    // 계정 저장
    public UserDto.joinRes save(UserDto.joinReq request) {

        if (userRepository.existsByNickname(request.getNickname())) {
            throw new CustomException(ErrorCode.DUPLICATED_NICKNAME);
        }

        if (!request.getPassword().equals(request.getConfirmPassword())) {
            throw new CustomException(ErrorCode.INVALID_PASSWORD);
        }

        Company company = companyRepository.findById(request.getCompanyId())
                .orElseThrow(()-> new CustomException(ErrorCode.DATA_NOT_FOUND));

        User user = request.toEntity(company);
        User saveUser = userRepository.save(user.hashPassword(encoder));

        return saveUser.toJoinDto();
    }

    // 로그인
    public UserDto.loginRes login(UserDto.loginReq request) {

        String nickname = request.getNickname();

        if (!userRepository.existsByNickname(nickname)) {

            throw new CustomException(ErrorCode.DATA_NOT_FOUND);
        }

        User user = findUser(nickname);
        if (encoder.matches(request.getPassword(), user.getPassword())) {
            String token = JwtTokenUtil.createToken(user.getNickname(), secretKey, 60 * 1000 * 60 * 24);// 만료시간 하루

            return UserDto.loginRes.builder()
                    .token(token)
                    .companyId(user.getCompany().getId())
                    .nickname(nickname)
                    .build();
        } else {
            throw new CustomException(ErrorCode.INVALID_PASSWORD);
        }
    }

    private User findUser(String nickname) {
        return userRepository.findByNickname(nickname).orElseThrow(() -> new CustomException(ErrorCode.NICKNAME_NOT_FOUND));
    }

    public UserDto.profileRes findProfileByNickname(String nickname) {

        User user = findUser(nickname);
        Long articleCount = articleRepository.countArticleByNickname(nickname);
        Long commentCount = commentRepository.countCommentByNickname(nickname);
        List<GameResultDto.top3Character> top3CharacterList = findTop3Characters(nickname);

        return user.toProfileDto(articleCount, commentCount, top3CharacterList);
    }

    // 전체 유저 조회
    public List<User> findAll() {

        return userRepository.findAll();
    }
    
    // 유저 닉네임으로 유저 정보 조회
    public UserDto.findRes findByNickname(String nickname, Pageable pageable) {

        List<GameResultDto.top3Character> resultList = findTop3Characters(nickname);
        User user = findUser(nickname);
        List<GameResultDto.otherUserDto> gameResults = gameResultService.getOtherUserRecord(nickname, pageable);

        return user.toFindDto(resultList, gameResults);
    }

    public List<GameResultDto.top3Character> findTop3Characters(String nickname) {

        return em.createQuery("select new ssafy.sorhy.dto.gameresult.GameResultDto$top3Character(gr.characterId, count(gr.characterId)) " +
                        "from GameResult gr " +
                        "join gr.user u " +
                        "where u.nickname = :nickname " +
                        "group by gr.characterId " +
                        "order by count(gr.characterId) desc", GameResultDto.top3Character.class)
                .setParameter("nickname", nickname)
                .setMaxResults(3)
                .getResultList();
    }
}
