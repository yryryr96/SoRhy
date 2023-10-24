package ssafy.sorhy.repository.gameresult;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ssafy.sorhy.entity.game.GameTitle;
import ssafy.sorhy.entity.gameresult.GameResult;

import java.util.List;

public interface GameResultRepository extends JpaRepository<GameResult, Long> {

    @Query("select g from GameResult g join fetch g.user u where u.id = :userId")
    List<GameResult> findByUserId(@Param("userId") Long userId);

    @Query("select gr from GameResult gr join fetch gr.game g where g.gameTitle = :gameTitle order by gr.score desc")
    List<GameResult> findRankByGameTitle(@Param("gameTitle") GameTitle gameTitle);
}
