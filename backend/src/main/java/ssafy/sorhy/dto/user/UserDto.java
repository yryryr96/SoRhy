package ssafy.sorhy.dto.user;

import lombok.Builder;
import lombok.Data;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.entity.company.Company;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.entity.gameresult.GameResult;

import java.util.List;

@Data
public class UserDto {

    @Data
    public static class joinReq {

        private String email;
        private String password;
        private String nickname;
        private Long companyId;

        public User toEntity(Company company) {

            return User.builder()
                    .email(this.email)
                    .password(this.password)
                    .nickname(this.nickname)
                    .company(company)
                    .build();
        }
    }

    @Builder
    @Data
    public static class joinRes {

        private String nickname;
    }

    @Data
    @Builder
    public static class findRes {

        private String nickname;
        private int totalScore;
        private List<GameResultDto.basicRes> gameResults;
    }

    @Data
    public static class loginReq {

        private String nickname;
        private String password;
    }

    @Data
    @Builder
    public static class profileRes {

        private String nickname;
        private int totalScore;
        private Long articleCount;
        private Long commentCount;
//        private String companyName;
        // private int win;
        // private int lose;
        // private int winPercentage;
    }
}
