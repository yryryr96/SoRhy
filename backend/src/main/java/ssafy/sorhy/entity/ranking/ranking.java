package ssafy.sorhy.entity.ranking;

import ssafy.sorhy.entity.game.GameTitle;
import ssafy.sorhy.entity.user.User;

import javax.persistence.*;
import java.util.List;

@Entity
public class ranking {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private GameTitle gameTitle;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
