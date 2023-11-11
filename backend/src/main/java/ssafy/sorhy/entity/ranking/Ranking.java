package ssafy.sorhy.entity.ranking;

import lombok.Getter;
import lombok.NoArgsConstructor;
import ssafy.sorhy.entity.game.GameTitle;
import ssafy.sorhy.entity.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Getter
@NoArgsConstructor
public class Ranking {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private GameTitle gameTitle;
    private int score = 0;
    private String createdAt = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public Ranking(User user, GameTitle gameTitle, int score) {
        this.gameTitle = gameTitle;
        this.user = user;
        this.score = score;
    }

    public void updateRankingScore(int score) {

        this.score = score;
        this.createdAt = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }
}
