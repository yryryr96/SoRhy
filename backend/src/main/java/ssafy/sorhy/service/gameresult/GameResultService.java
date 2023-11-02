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
import ssafy.sorhy.entity.gameresult.Team;
import ssafy.sorhy.exception.CustomException;
import ssafy.sorhy.exception.ErrorCode;
import ssafy.sorhy.repository.company.CompanyRepository;
import ssafy.sorhy.repository.game.GameRepository;
import ssafy.sorhy.repository.gameresult.GameResultRepository;
import ssafy.sorhy.repository.user.UserRepository;
import ssafy.sorhy.service.user.UserService;

import javax.transaction.Transactional;
import javax.validation.Valid;
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

    public GameResultDto.saveRes save(@RequestBody @Valid GameResultDto.saveReq request, String nickname) {

        User findUser = userRepository.findByNickname(nickname);
        Game findGame = gameRepository.findById(request.getGameId())
                .orElseThrow(()-> new CustomException(ErrorCode.DATA_NOT_FOUND));

        GameResult gameResult = request.toEntity(findUser, findGame);

        int score = gameResult.getScore();
        findUser.updateScoreAndWinOrLose(score, gameResult.isWinner());
        gameResultRepository.save(gameResult);
        return gameResult.toSaveResDto(gameResult);
    }

    public List<GameResultDto.personalRankRes> eachGameRank(String gameTitle, Pageable pageable) {

        return gameResultRepository.findRankByGameTitle(GameTitle.valueOf(gameTitle), pageable)
                .stream()
                .map(gameResult -> GameResultDto.personalRankRes.builder()
                        .nickname(gameResult.getUser().getNickname())
                        .score(gameResult.getScore())
                        .createdAt(gameResult.getCreatedAt())
                        .build())
                .collect(Collectors.toList());
    }

    public List<GameResultDto.companyRankRes> companyRank() {

        List<Company> companyRankList = companyRepository.findCompanyRank();
        return companyRankList.stream()
                .map(Company::toCompanyRankDto)
                .collect(Collectors.toList());
    }

    public List<UserDto.userRankOfCompanyRes> companyUserRank(Pageable pageable, Long companyId) {

        Page<User> userInCompany = userRepository.findUserRankInCompany(companyId, pageable);
        return userInCompany.stream()
                .map(User::toUserRankOfCompanyRes)
                .collect(Collectors.toList());
    }

    public List<GameResultDto.otherUserDto> getOtherUserRecord(String nickname, Pageable pageable) {

        List<GameResultDto.otherUserDto> result = new ArrayList<>();
        User user = userRepository.findByNickname(nickname);

        List<GameResult> gameResults = gameResultRepository.findByUserIdOrderByDesc(user.getId(), pageable);
        for (GameResult gameResult : gameResults) {

            Game game = gameResult.getGame();
            List<OtherUserDto> enteredUsers = gameResultRepository.findOtherUserDtoByGameId(game.getId());
            result.add(GameResultDto.otherUserDto.builder()
                    .gameId(game.getId())
                    .gameTitle(game.getGameTitle())
                    .gameType(game.getGameType())
                    .characterId(gameResult.getCharacterId())
                    .winner(gameResult.isWinner())
                    .createdAt(gameResult.getCreatedAt())
                    .enteredUsers(enteredUsers)
                    .build());
        }
        return result;
    }
}
