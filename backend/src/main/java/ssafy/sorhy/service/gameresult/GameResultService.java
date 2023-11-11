package ssafy.sorhy.service.gameresult;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.dto.gameresult.OtherUserDto;
import ssafy.sorhy.dto.ranking.RankingDto;
import ssafy.sorhy.dto.user.UserDto;
import ssafy.sorhy.entity.company.Company;
import ssafy.sorhy.entity.game.Game;
import ssafy.sorhy.entity.game.GameTitle;
import ssafy.sorhy.entity.game.GameType;
import ssafy.sorhy.entity.gameresult.GameResult;
import ssafy.sorhy.entity.gameresult.Team;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.exception.CustomException;
import ssafy.sorhy.exception.ErrorCode;
import ssafy.sorhy.repository.company.CompanyRepository;
import ssafy.sorhy.repository.game.GameRepository;
import ssafy.sorhy.repository.gameresult.GameResultRepository;
import ssafy.sorhy.repository.ranking.RankingRepository;
import ssafy.sorhy.repository.user.UserRepository;
import ssafy.sorhy.service.ranking.RankingService;
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
    private final GameRepository gameRepository;
    private final UserRepository userRepository;
    private final UserCharacterService userCharacterService;
    private final RankingService rankingService;

    public GameResultDto.saveRes save(@RequestBody GameResultDto.saveReq request, String nickname) {

        User user = findUser(nickname);
        Long characterId = request.getCharacterId();
        Game game = gameRepository.findById(request.getGameId())
                .orElseThrow(()-> new CustomException(ErrorCode.DATA_NOT_FOUND));

        GameResult gameResult = request.toEntity(user, game);
        GameTitle gameTitle = game.getGameTitle();
        int score = gameResult.getScore();

        userCharacterService.findByUserIdAndCharacterId(user, characterId);
        rankingService.updateRanking(user, gameTitle, score);
        gameResultRepository.save(gameResult);

        user.updateScoreAndWinOrLose(gameResult.getScore(), gameResult.isWinner());
        return gameResult.toSaveResDto(gameResult);
    }

    public List<GameResultDto.gameRecordInfo> getGameRecordInfo(String nickname, Pageable pageable) {

        List<GameResultDto.gameRecordInfo> result = new ArrayList<>();
        User user = findUser(nickname);

        List<GameResult> gameResults = gameResultRepository.findByUserIdOrderByDesc(user.getId(), pageable);
        for (GameResult gameResult : gameResults) {

            Game game = gameResult.getGame();
            Team team = gameResult.getTeam();
            List<OtherUserDto> teamMember = gameResultRepository.findTeamOtherUserDtoByGameId(game.getId(), team);
            List<OtherUserDto> enemy = gameResultRepository.findEnemyOtherUserDtoByGameId(game.getId(), team);

            result.add(new GameResultDto.gameRecordInfo(game, gameResult, teamMember, enemy));
        }
        return result;
    }

    private User findUser(String nickname) {
        return userRepository.findByNickname(nickname).orElseThrow(() -> new CustomException(ErrorCode.NICKNAME_NOT_FOUND));
    }
}
