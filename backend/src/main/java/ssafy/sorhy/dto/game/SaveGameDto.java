package ssafy.sorhy.dto.game;

import lombok.Builder;
import lombok.Data;
import ssafy.sorhy.entity.game.Game;
import ssafy.sorhy.entity.game.GameTitle;
import ssafy.sorhy.entity.game.GameType;

@Data
public class SaveGameDto {

    @Data
    public static class Request {
        private String gameType;
        private String gameTitle;

        public Game toGameEntity() {
            GameType gameType = GameType.valueOf(this.gameType);
            GameTitle gameTitle = GameTitle.valueOf(this.gameTitle);
            return Game.builder()
                    .gameType(gameType)
                    .gameTitle(gameTitle)
                    .build();
        }
    }

    @Builder
    @Data
    public static class Response {
        private Long id;
        private GameType gameType;
        private GameTitle gameTitle;
    }
}
