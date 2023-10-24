package ssafy.sorhy.repository.game;

import org.springframework.data.jpa.repository.JpaRepository;
import ssafy.sorhy.entity.game.Game;

public interface GameRepository extends JpaRepository<Game, Long> {
}
