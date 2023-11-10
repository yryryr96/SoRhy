package ssafy.sorhy.repository.gameresult;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ssafy.sorhy.dto.gameresult.OtherUserDto;
import ssafy.sorhy.entity.game.GameTitle;
import ssafy.sorhy.entity.gameresult.GameResult;

import java.util.List;

public interface GameResultRepository extends JpaRepository<GameResult, Long> {

    @Query("select g from GameResult g join fetch g.user u where u.id = :userId order by g.id desc")
    List<GameResult> findByUserIdOrderByDesc(Long userId, Pageable pageable);

    @Query(value = "select gr from GameResult gr " +
            "join gr.game g " +
            "where g.gameTitle = :gameTitle and (gr.user, gr.score) in " +
            "(select gr2.user, max(gr2.score) from GameResult gr2 group by gr2.user) " +
            "order by gr.score desc",
            countQuery = "select count(gr) from GameResult gr where gr.game.gameTitle = :gameTitle"
    )
    Page<GameResult> findRankByGameTitle(GameTitle gameTitle, Pageable pageable);

    @Query("select new ssafy.sorhy.dto.gameresult.OtherUserDto(u.nickname, gr.characterId, gr.score, c.companyName, gr.team) " +
            "from GameResult gr join gr.user u join gr.game g join u.company c where g.id = :gameId")
    List<OtherUserDto> findOtherUserDtoByGameId(Long gameId);
}
