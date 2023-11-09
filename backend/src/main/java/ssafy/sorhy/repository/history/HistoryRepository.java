package ssafy.sorhy.repository.history;

import org.springframework.data.jpa.repository.JpaRepository;
import ssafy.sorhy.entity.log.LoginHistory;

public interface HistoryRepository extends JpaRepository<LoginHistory, Long> {
}
