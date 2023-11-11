package ssafy.sorhy.entity.ranking;

import lombok.Getter;
import lombok.NoArgsConstructor;
import ssafy.sorhy.entity.game.GameTitle;
import ssafy.sorhy.entity.user.User;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Ranking {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private GameTitle gameTitle;
    private int score = 0;

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
    }
}
