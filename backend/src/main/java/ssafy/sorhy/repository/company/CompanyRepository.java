package ssafy.sorhy.repository.company;

import org.springframework.data.jpa.repository.JpaRepository;
import ssafy.sorhy.entity.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}