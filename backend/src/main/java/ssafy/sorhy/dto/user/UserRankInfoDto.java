package ssafy.sorhy.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class UserRankInfoDto {

        private Long totalUsersCount;
        private Long personalRank;
        private double rankPercent;

        public UserRankInfoDto(Long totalUsersCount, Long personalRank) {
                this.totalUsersCount = totalUsersCount;
                this.personalRank = personalRank;
                this.rankPercent = calculateRankPercent(totalUsersCount, personalRank);
        }

        private double calculateRankPercent(Long totalUsersCount, Long personalRank) {
                if (totalUsersCount == 0) {
                        return 0.0;
                }
                return Math.round((personalRank.doubleValue() / totalUsersCount) * 100.0 * 100.0) / 100.0;
        }
}
