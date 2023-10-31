package ssafy.sorhy.service.gameresult;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.entity.company.Company;
import ssafy.sorhy.entity.game.Game;
import ssafy.sorhy.entity.game.GameTitle;
import ssafy.sorhy.entity.gameresult.GameResult;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.entity.gameresult.Team;
import ssafy.sorhy.repository.company.CompanyRepository;
import ssafy.sorhy.repository.game.GameRepository;
import ssafy.sorhy.repository.gameresult.GameResultRepository;
import ssafy.sorhy.repository.user.UserRepository;

import javax.transaction.Transactional;
import javax.validation.Valid;
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
        Game findGame = gameRepository.findById(request.getGameId()).get();

        GameResult gameResult = GameResult.builder()
                .game(findGame)
                .user(findUser)
                .score(request.getScore())
                .characterId(request.getCharacterId())
                .winner(request.isWinner())
                .team(Team.valueOf(request.getTeam()))
                .build();

        int score = gameResult.getScore();
        findUser.updateScoreAndWinOrLose(score, gameResult.isWinner());
        gameResultRepository.save(gameResult);
        return gameResult.toSaveResDto(gameResult);
    }

    public List<GameResultDto.personalRankRes> eachGameRank(String gameTitle) {

        return gameResultRepository.findRankByGameTitle(GameTitle.valueOf(gameTitle))
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
                .map(company -> company.toCompanyRankDto())
                .collect(Collectors.toList());
    }
}
