package ssafy.sorhy.repository.company;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ssafy.sorhy.dto.ranking.CompanyRankDto;
import ssafy.sorhy.dto.ranking.RankingDto;
import ssafy.sorhy.entity.company.Company;

import java.util.List;

public interface CompanyRepository extends JpaRepository<Company, Long> {

    List<Company> findAllByOrderByCompanyScoreDesc();
}
