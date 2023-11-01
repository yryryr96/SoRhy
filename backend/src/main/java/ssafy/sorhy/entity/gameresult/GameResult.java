package ssafy.sorhy.entity.gameresult;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.entity.game.Game;
import ssafy.sorhy.repository.gameresult.GameResultRepository;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class GameResult {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gameResult_id")
    private Long id;

    private int score;
    private Long characterId;
    private boolean winner;

    @Enumerated(EnumType.STRING)
    private Team team;

    @Builder.Default
    private String createdAt = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "game_id", nullable = false)
    private Game game;

    public GameResultDto.saveRes toSaveResDto(GameResult gameResult) {

        return GameResultDto.saveRes.builder()
                .gameId(this.getGame().getId())
                .score(this.score)
                .characterId(this.characterId)
                .winner(this.winner)
                .team(this.team)
                .build();
    }

    public static List<GameResultDto.basicRes> getGameResultBasicDtoList(List<GameResult> gameResults) {

        return gameResults.stream()
                .map(gameResult -> GameResultDto.basicRes.builder()
                        .gameId(gameResult.getId())
                        .winner(gameResult.isWinner())
                        .gameTitle(gameResult.getGame().getGameTitle())
                        .createdAt(gameResult.getCreatedAt())
                        .build())
                .collect(Collectors.toList());
    }
}
