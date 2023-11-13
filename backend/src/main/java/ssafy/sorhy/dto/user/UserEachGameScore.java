package ssafy.sorhy.dto.user;

import lombok.Getter;
import ssafy.sorhy.entity.game.GameTitle;

@Getter
public class UserEachGameScore {

    private String gameTitle;
    private int score;

    public UserEachGameScore(GameTitle gameTitle, int score) {
        this.gameTitle = gameTitle.toString();
        this.score = score;
    }
}
