package ssafy.sorhy.dto.gameresult;

import lombok.*;
import ssafy.sorhy.entity.gameresult.Team;
import ssafy.sorhy.entity.game.GameTitle;

import javax.validation.constraints.NotBlank;

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

        @NotBlank
        private Long gameId;
        @NotBlank
        private int score;
        @NotBlank
        private String team;
        @NotBlank(message = "캐릭터 아이디를 입력해주세요.")
        private Long characterId;
        @NotBlank(message = "승패를 입력해주세요.")
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

    @Data
    @NoArgsConstructor
    public static class top3Character {

        private Long characterId;
        private Long cnt;

        public top3Character(Long characterId, Long cnt) {
            this.characterId = characterId;
            this.cnt = cnt;
        }
    }
}
