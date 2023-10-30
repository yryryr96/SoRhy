package ssafy.sorhy.service.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.dto.user.UserDto;
import ssafy.sorhy.entity.company.Company;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.exception.AlreadyExistException;
import ssafy.sorhy.jwt.JwtTokenUtil;
import ssafy.sorhy.repository.article.ArticleRepository;
import ssafy.sorhy.repository.comment.CommentRepository;
import ssafy.sorhy.repository.company.CompanyRepository;
import ssafy.sorhy.repository.gameresult.GameResultRepository;
import ssafy.sorhy.repository.user.UserRepository;

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
    private final GameResultRepository gameResultRepository;

    private final BCryptPasswordEncoder encoder;

    // 계정 저장
    public UserDto.joinRes save(UserDto.joinReq request) throws AlreadyExistException {

        if (userRepository.existsByNickname(request.getNickname())) {
            throw new AlreadyExistException();
        }

        Company company = companyRepository.findById(request.getCompanyId()).get();

        User user = request.toEntity(company);
        User saveUser = userRepository.save(user.hashPassword(encoder));

        return saveUser.toJoinDto();
    }

    // 로그인
    public String login(UserDto.loginReq request) {

        User user = userRepository.findByNickname(request.getNickname());
        if (encoder.matches(request.getPassword(), user.getPassword())) {
            String token = JwtTokenUtil.createToken(user.getNickname(), secretKey, 60 * 1000 * 60 * 24); // 만료시간 60분
            return token;
        } else {
            throw new RuntimeException("계정 정보가 일치하지 않습니다.");
        }
    }

    public UserDto.profileRes findProfileByNickname(String nickname) {

        User user = userRepository.findByNickname(nickname);
        Long articleCount = articleRepository.countArticleByNickname(nickname);
        Long commentCount = commentRepository.countCommentByNickname(nickname);
        List<GameResultDto.top3Character> top3CharacterList = getTop3CharacterList(nickname);

        return user.toProfileDto(articleCount, commentCount, top3CharacterList);
    }

    // 전체 유저 조회
    public List<User> findAll() {

        return userRepository.findAll();
    }
    
    // 유저 닉네임으로 유저 정보 조회
    public UserDto.findRes findByNickname(String nickname) {

        List<GameResultDto.top3Character> resultList = getTop3CharacterList(nickname);

        User findUser = userRepository.findByNickname(nickname);
        return findUser.toFindDto(resultList);
    }

    private List<GameResultDto.top3Character> getTop3CharacterList(String nickname) {
        List<GameResultDto.top3Character> resultList = em.createQuery("select new ssafy.sorhy.dto.gameresult.GameResultDto$top3Character(gr.characterId, count(gr.characterId)) " +
                        "from GameResult gr " +
                        "join gr.user u " +
                        "where u.nickname = :nickname " +
                        "group by gr.characterId " +
                        "order by count(gr.characterId) desc", GameResultDto.top3Character.class)
                .setParameter("nickname", nickname)
                .setMaxResults(3)
                .getResultList();
        return resultList;
    }
}
