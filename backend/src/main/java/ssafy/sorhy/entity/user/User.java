package ssafy.sorhy.entity.user;

import lombok.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.dto.user.UserDto;
import ssafy.sorhy.entity.comment.Comment;
import ssafy.sorhy.entity.company.Company;
import ssafy.sorhy.entity.article.Article;
import ssafy.sorhy.entity.gameresult.GameResult;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Table(name="Users")
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(unique = true)
    private String nickname;
    private String password;

    @Builder.Default
    private int win = 0;

    @Builder.Default
    private int lose = 0;

    @Builder.Default
    private float winPercentage = 0;

    @Builder.Default
    private int totalScore = 0;

    @OneToMany(mappedBy = "user")
    private List<Article> articles;

    @Builder.Default
    @OneToMany(mappedBy = "user")
    private List<Comment> comments = new ArrayList<>();

    @Builder.Default
    @OneToMany(mappedBy = "user")
    private List<GameResult> gameResults = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

    public void updateScoreAndWinOrLose(int score, boolean winner) {
        this.totalScore += score;
        this.company.updateCompanyScore(score);

        if (winner) {
            this.win += 1;
        } else {
            this.lose += 1;
        }

        if (this.win != 0 || this.lose != 0) {
            this.winPercentage = ((float) this.win / (this.win + this.lose)) * 100;
        }
    }

    public User hashPassword(BCryptPasswordEncoder encoder) {
        this.password = encoder.encode(this.password);
        return this;
    }

    public UserDto.joinRes toJoinDto() {

        return UserDto.joinRes.builder()
                .nickname(this.nickname)
                .build();
    }

    public UserDto.findRes toFindDto(List<GameResultDto.top3Character> top3CharacterList,
                                     List<GameResultDto.otherUserDto> gameResults) {

        return UserDto.findRes.builder()
                .nickname(this.nickname)
                .totalScore(this.totalScore)
                .companyName(this.company.getCompanyName())
                .win(this.win)
                .lose(this.lose)
                .winPercentage(this.winPercentage)
                .top3CharacterList(top3CharacterList)
                .gameResults(gameResults)
                .build();
    }

    public UserDto.profileRes toProfileDto(Long articleCount,
                                           Long commentCount,
                                           List<GameResultDto.top3Character> top3CharacterList) {

        return UserDto.profileRes.builder()
                .nickname(this.nickname)
                .articleCount(articleCount)
                .commentCount(commentCount)
                .companyName(this.company.getCompanyName())
                .totalScore(this.totalScore)
                .win(this.win)
                .lose(this.lose)
                .winPercentage(this.winPercentage)
                .top3CharacterList(top3CharacterList)
                .build();
    }
}
