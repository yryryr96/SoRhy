package ssafy.sorhy.service.history;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssafy.sorhy.entity.log.LoginHistory;
import ssafy.sorhy.repository.history.HistoryRepository;

@Transactional
@Service
@RequiredArgsConstructor
public class HistoryService {

    private final HistoryRepository historyRepository;

    public void save(LoginHistory loginHistory) {

        historyRepository.save(loginHistory);
    }
}
