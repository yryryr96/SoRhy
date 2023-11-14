package ssafy.sorhy.dto.ranking;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public interface CompanyRankDto {

    String getCompanyName();
    String getCompanyFirstRankUser();
    Integer getCompanyScore();
}
