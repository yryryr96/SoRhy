package ssafy.sorhy.dto.gameresult;

import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import ssafy.sorhy.entity.UserTeam;
import ssafy.sorhy.entity.game.GameTitle;

@Data
@RequiredArgsConstructor
public class GameResultDto {

    @Data
    @Builder
    public static class Basic {

        private GameTitle gameTitle;
        private int score;
        private Long characterId;
        private UserTeam team;
        private String createdAt;
    }

    @Data
    public static class saveReq {

        private Long gameId;
        private String nickname;
        private int score;
        private String team;
        private Long characterId;
    }

    @Data
    @Builder
    public static class saveRes {

        private Long gameId;
        private String nickname;
        private int score;
    }

    @Data
    @Builder
    public static class RankRes {

        private String nickname;
        private int score;
        private String createdAt;
//        private String company; // 회사
    }
}
