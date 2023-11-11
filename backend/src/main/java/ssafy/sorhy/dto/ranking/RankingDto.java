package ssafy.sorhy.dto.ranking;

import lombok.Builder;
import lombok.Data;
import ssafy.sorhy.dto.user.UserDto;

import java.util.List;

public class RankingDto {

    @Data
    @Builder
    public static class personalRankRes {

        private String nickname;
        private int score;
        private String createdAt;
        private String company;
        private List<UserDto.top3Character> top3Characters;
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
    public static class userRankOfCompanyRes {

        private String nickname;
        private int totalScore;
        private int win;
        private int lose;
        private float winPercentage;
    }
}
