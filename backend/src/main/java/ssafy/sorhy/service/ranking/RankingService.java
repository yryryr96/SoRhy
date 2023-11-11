package ssafy.sorhy.service.ranking;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssafy.sorhy.entity.game.GameTitle;
import ssafy.sorhy.entity.ranking.Ranking;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.repository.ranking.RankingRepository;
import ssafy.sorhy.service.user.UserService;

import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
public class RankingService {

    private final RankingRepository rankingRepository;

    public void save(User user, GameTitle gameTitle, int score) {

        Ranking ranking = new Ranking(user, gameTitle, score);
        rankingRepository.save(ranking);
    }

    public void updateRanking(User user, GameTitle gameTitle, int score) {

        Optional<Ranking> findRanking = rankingRepository.findByUserAndGameTitle(user, gameTitle);

        if(findRanking.isEmpty()) {
            save(user, gameTitle, score);
            return;
        }

        Ranking ranking = findRanking.get();
        if(ranking.getScore() < score) {

            ranking.updateRankingScore(score);
            return;
        }
    }
}
