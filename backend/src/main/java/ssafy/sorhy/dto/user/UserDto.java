package ssafy.sorhy.dto.user;

import lombok.Builder;
import lombok.Data;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.entity.company.Company;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.entity.gameresult.GameResult;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
public class UserDto {

    @Data
    public static class joinReq {

        @NotBlank(message = "닉네임을 입력해주세요.")
        private String nickname;

        @NotBlank(message = "비밀번호를 입력해주세요.")
        private String password;

        @NotBlank(message = "회사를 선택해주세요.")
        private Long companyId;

        public User toEntity(Company company) {

            return User.builder()
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
        private String companyName;
        private int win;
        private int lose;
        private float winPercentage;
        private List<GameResultDto.top3Character> top3CharacterList;
        private List<GameResultDto.basicRes> gameResults;
    }

    @Data
    public static class loginReq {

        @NotBlank
        private String nickname;
        @NotBlank
        private String password;
    }

    @Data
    @Builder
    public static class profileRes {

        private String nickname;
        private int totalScore;
        private Long articleCount;
        private Long commentCount;
        private String companyName;
        private int win;
        private int lose;
        private float winPercentage;
        private List<GameResultDto.top3Character> top3CharacterList;
    }
}
