package ssafy.sorhy.dto.gameresult;

import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import ssafy.sorhy.entity.gameresult.Team;
import ssafy.sorhy.entity.game.GameTitle;

@Data
@RequiredArgsConstructor
public class GameResultDto {

    @Data
    @Builder
    public static class basicRes {

        private GameTitle gameTitle;
        private int score;
        private Long characterId;
        private Team team;
        private boolean winner;
        private String createdAt;
    }

    @Data
    public static class saveReq {

        private Long gameId;
        private int score;
        private String team;
        private Long characterId;
        private boolean winner;
    }

    @Data
    @Builder
    public static class saveRes {

        private Long gameId;
        private int score;
        private Team team;
        private Long characterId;
        private boolean winner;
    }

    @Data
    @Builder
    public static class personalRankRes {

        private String nickname;
        private int score;
        private String createdAt;
//        private String company; // 회사
    }

    @Data
    @Builder
    public static class companyRankRes {

        private String companyName;
        private int companyScore;
    }
}
