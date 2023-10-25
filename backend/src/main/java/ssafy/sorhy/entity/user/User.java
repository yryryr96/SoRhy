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
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    private String email;
    private String password;
    private String nickname;

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

    public void updateTotalScore(int score) {
        this.totalScore += score;
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

    public UserDto.findRes toFindDto() {

        return UserDto.findRes.builder()
                .nickname(this.nickname)
                .totalScore(this.totalScore)
                .gameResults(getGameResultBasicDtoList())
                .build();
    }

    private List<GameResultDto.basicRes> getGameResultBasicDtoList() {

        return this.gameResults.stream()
                .map(gameResult -> GameResultDto.basicRes.builder()
                        .characterId(gameResult.getCharacterId())
                        .score(gameResult.getScore())
                        .team(gameResult.getUserTeam())
                        .winner(gameResult.isWinner())
                        .gameTitle(gameResult.getGame().getGameTitle())
                        .createdAt(gameResult.getCreatedAt())
                        .build())
                .collect(Collectors.toList());
    }

    public UserDto.profileRes toProfileDto(Long articleCount, Long commentCount) {

        return UserDto.profileRes.builder()
                .nickname(this.nickname)
                .articleCount(articleCount)
                .commentCount(commentCount)
                .totalScore(this.totalScore)
                .build();
    }
}
