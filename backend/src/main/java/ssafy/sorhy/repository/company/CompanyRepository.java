package ssafy.sorhy.repository.company;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ssafy.sorhy.dto.ranking.CompanyRankDto;
import ssafy.sorhy.entity.company.Company;

import java.util.List;

public interface CompanyRepository extends JpaRepository<Company, Long> {

    @Query(nativeQuery = true,
            value = "select c.company_name as companyName, u.nickname as companyFirstRankUser, c.company_score as companyScore " +
                    "from sorhy.company c " +
                    "left join sorhy.user u " +
                    "on (u.total_score, c.company_id) in (select max(u2.total_score), c2.company_id from sorhy.user u2 join sorhy.company c2 on u2.company_id = c2.company_id where u2.total_score != 0 group by c2.company_id) " +
                    "order by c.company_score desc")
    List<CompanyRankDto> findCompanyTopRankUser();
}
