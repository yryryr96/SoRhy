package ssafy.sorhy.repository.ranking;

import org.springframework.data.jpa.repository.JpaRepository;
import ssafy.sorhy.entity.game.GameTitle;
import ssafy.sorhy.entity.ranking.Ranking;
import ssafy.sorhy.entity.user.User;

import java.util.Optional;

public interface RankingRepository extends JpaRepository<Ranking, Long> {

    Optional<Ranking> findByUserAndGameTitle(User user, GameTitle gameTitle);
}
