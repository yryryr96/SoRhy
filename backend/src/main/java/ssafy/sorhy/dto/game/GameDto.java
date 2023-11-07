package ssafy.sorhy.dto.game;

import lombok.Builder;
import lombok.Data;
import ssafy.sorhy.entity.game.Game;
import ssafy.sorhy.entity.game.GameTitle;
import ssafy.sorhy.entity.game.GameType;

import javax.validation.constraints.NotBlank;

@Data
public class GameDto {

    @Data
    public static class Request {

        @NotBlank
        private String gameType;
        @NotBlank
        private String gameTitle;

        public Game toEntity() {
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
