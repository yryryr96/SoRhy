package ssafy.sorhy.dto.ranking;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ssafy.sorhy.dto.user.UserDto;
import ssafy.sorhy.entity.ranking.Ranking;

import java.util.List;

public class RankingDto {

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class personalRankRes {

        private String nickname;
        private int score;
        private String createdAt;
        private String company;
        private List<UserDto.top3Character> top3Characters;

        public personalRankRes(Ranking ranking, List<UserDto.top3Character> top3Characters) {

            this.nickname = ranking.getUser().getNickname();
            this.company = ranking.getUser().getCompany().getCompanyName();
            this.score = ranking.getScore();
            this.createdAt = ranking.getCreatedAt();
            this.top3Characters = top3Characters;
        }
    }
}
