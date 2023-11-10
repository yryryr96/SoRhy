package ssafy.sorhy.dto.gameresult;

import lombok.*;
import ssafy.sorhy.entity.game.Game;
import ssafy.sorhy.entity.game.GameType;
import ssafy.sorhy.entity.gameresult.GameResult;
import ssafy.sorhy.entity.gameresult.Team;
import ssafy.sorhy.entity.game.GameTitle;
import ssafy.sorhy.entity.user.User;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@RequiredArgsConstructor
public class GameResultDto {

    @Data
    @Builder
    public static class basicRes {

        private Long gameId;
        private GameTitle gameTitle;
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

        public GameResult toEntity(User user, Game game) {

            return GameResult.builder()
                    .game(game)
                    .user(user)
                    .score(this.score)
                    .characterId(this.characterId)
                    .winner(this.winner)
                    .team(Team.valueOf(this.team))
                    .build();
        }
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
        private String company;
        private List<GameResultDto.top3Character> top3Characters;
    }

    @Data
    @Builder
    public static class companyRankRes {

        private String companyName;
        private int companyScore;
        private String companyFirstRankUser;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class top3Character {

        private Long characterId;
        private String characterName;
        private Long cnt;
    }

    @Data
    @Builder
    public static class companyFirstRankUserRes {

        private String nickname;
    }

    @Data
    public static class gameRecordInfo {

        private Long gameId;
        private GameTitle gameTitle;
        private GameType gameType;
        private Long characterId;
        private boolean winner;
        private String createdAt;
        private List<OtherUserDto> enteredUsers;

        public gameRecordInfo(Game game, GameResult gameResult, List<OtherUserDto> enteredUsers) {
            this.gameId = game.getId();
            this.gameTitle = game.getGameTitle();
            this.gameType = game.getGameType();
            this.characterId = gameResult.getCharacterId();
            this.winner = gameResult.isWinner();
            this.createdAt = gameResult.getCreatedAt();
            this.enteredUsers = enteredUsers;
        }
    }
}
