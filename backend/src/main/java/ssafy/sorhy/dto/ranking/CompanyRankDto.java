package ssafy.sorhy.dto.ranking;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Getter
@Builder
public class CompanyRankDto {

    private String companyName;
    private String companyFirstRankUser;
    private int companyScore;
}
