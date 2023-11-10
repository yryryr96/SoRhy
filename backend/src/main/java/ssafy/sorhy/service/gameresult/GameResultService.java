package ssafy.sorhy.service.gameresult;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.dto.gameresult.OtherUserDto;
import ssafy.sorhy.dto.user.UserDto;
import ssafy.sorhy.entity.company.Company;
import ssafy.sorhy.entity.game.Game;
import ssafy.sorhy.entity.game.GameTitle;
import ssafy.sorhy.entity.gameresult.GameResult;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.exception.CustomException;
import ssafy.sorhy.exception.ErrorCode;
import ssafy.sorhy.repository.company.CompanyRepository;
import ssafy.sorhy.repository.game.GameRepository;
import ssafy.sorhy.repository.gameresult.GameResultRepository;
import ssafy.sorhy.repository.user.UserRepository;
import ssafy.sorhy.service.usercharacter.UserCharacterService;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class GameResultService {

    private final GameResultRepository gameResultRepository;
    private final CompanyRepository companyRepository;
    private final GameRepository gameRepository;
    private final UserRepository userRepository;
    private final UserCharacterService userCharacterService;

    public GameResultDto.saveRes save(@RequestBody GameResultDto.saveReq request, String nickname) {

        User user = findUser(nickname);
        Long characterId = request.getCharacterId();
        Game findGame = gameRepository.findById(request.getGameId())
                .orElseThrow(()-> new CustomException(ErrorCode.DATA_NOT_FOUND));
        GameResult gameResult = request.toEntity(user, findGame);
        userCharacterService.findByUserIdAndCharacterId(user, characterId);
        user.updateScoreAndWinOrLose(gameResult.getScore(), gameResult.isWinner());
        gameResultRepository.save(gameResult);
        return gameResult.toSaveResDto(gameResult);
    }

    public List<GameResultDto.personalRankRes> eachGameRank(String gameTitle, Pageable pageable) {

        GameTitle title = GameTitle.valueOf(gameTitle);
        return gameResultRepository.findRankByGameTitle(title, pageable)
                .stream()
                .map(gameResult -> GameResultDto.personalRankRes.builder()
                        .nickname(gameResult.getUser().getNickname())
                        .company(gameResult.getUser().getCompany().getCompanyName())
                        .score(gameResult.getScore())
                        .createdAt(gameResult.getCreatedAt())
                        .top3Characters(userCharacterService.findTop3Character(gameResult.getUser().getId()))
                        .build())
                .collect(Collectors.toList());
    }

    public List<GameResultDto.companyRankRes> companyRank() {

        List<Company> companyRankList = companyRepository.findAllByOrderByCompanyScoreDesc();
        return companyRankList.stream()
                .map(company -> company.toCompanyRankDto(userRepository.findCompanyFirstRankUser(company.getId())))
                .collect(Collectors.toList());
    }

    public List<UserDto.userRankOfCompanyRes> companyUserRank(Pageable pageable, Long companyId) {

        Page<User> userInCompany = userRepository.findUserRankInCompany(companyId, pageable);
        return userInCompany.stream()
                .map(User::toUserRankOfCompanyRes)
                .collect(Collectors.toList());
    }

    public List<GameResultDto.gameRecordInfo> getGameRecordInfo(String nickname, Pageable pageable) {

        List<GameResultDto.gameRecordInfo> result = new ArrayList<>();
        User user = findUser(nickname);

        List<GameResult> gameResults = gameResultRepository.findByUserIdOrderByDesc(user.getId(), pageable);
        for (GameResult gameResult : gameResults) {

            Game game = gameResult.getGame();
            List<OtherUserDto> enteredUsers = gameResultRepository.findOtherUserDtoByGameId(game.getId());
            result.add(new GameResultDto.gameRecordInfo(game, gameResult, enteredUsers));
        }
        return result;
    }

    private User findUser(String nickname) {
        return userRepository.findByNickname(nickname).orElseThrow(() -> new CustomException(ErrorCode.NICKNAME_NOT_FOUND));
    }
}
