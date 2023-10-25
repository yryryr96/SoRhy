package ssafy.sorhy.repository.company;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ssafy.sorhy.entity.company.Company;

import java.util.List;

public interface CompanyRepository extends JpaRepository<Company, Long> {

    @Query("select c from Company c order by c.companyScore desc")
    List<Company> findCompanyRank();
}
