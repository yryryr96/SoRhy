package ssafy.sorhy.dto.user;

import lombok.Builder;
import lombok.Data;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.entity.company.Company;
import ssafy.sorhy.entity.user.User;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.List;

@Data
public class UserDto {

    @Data
    public static class joinReq {

        @NotBlank
        @Pattern(regexp = "^[a-z0-9]{5,20}$", message = "아이디는 영어 소문자와 숫자만 사용하여 5~20자리여야 합니다.")
        private String nickname;

        @NotBlank
        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\\d~!@#$%^&*()+|=]{8,16}$", message = "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
        private String password;

        @NotBlank
        private String confirmPassword;

        @NotNull
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
        private List<GameResultDto.otherUserDto> gameResults;
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
    public static class loginRes {

        @NotBlank
        private String token;
        @NotBlank
        private Long companyId;
        @NotBlank
        private String nickname;

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

    @Data
    @Builder
    public static class userRankOfCompanyRes {

        private String nickname;
        private int totalScore;
        private int win;
        private int lose;
        private float winPercentage;
    }
}
