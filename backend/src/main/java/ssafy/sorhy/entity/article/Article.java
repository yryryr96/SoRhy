package ssafy.sorhy.entity.article;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;
import ssafy.sorhy.dto.article.ArticleDto;
import ssafy.sorhy.dto.comment.CommentDto;
import ssafy.sorhy.entity.comment.Comment;
import ssafy.sorhy.entity.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class Article {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_id")
    private Long id;

    private String title;
    private String content;
    private int viewCount;

    @Enumerated(EnumType.STRING)
    private Category category;

    @Nullable
    private String imgUrl;

    @Builder.Default
    private String createdAt = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "article", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    public void update(ArticleDto.saveReq dto) {
        this.title = dto.getTitle();
        this.content = dto.getContent();
    }

    public void addViewCount() {

        this.viewCount += 1;
    }

    public ArticleDto.basicRes toBasicRes() {

        return ArticleDto.basicRes.builder()
                .articleId(this.id)
                .nickname(this.user.getNickname())
                .title(this.title)
                .viewCount(this.viewCount)
                .createdAt(this.createdAt)
                .build();
    }

    public ArticleDto.detailRes toDetailRes(CommentDto.pagingRes comments) {

        return ArticleDto.detailRes.builder()
                .articleId(this.id)
                .nickname(this.user.getNickname())
                .title(this.title)
                .content(this.content)
                .category(this.category)
                .viewCount(this.viewCount)
                .createdAt(this.createdAt)
                .imgUrl(this.imgUrl)
                .comments(comments)
                .build();
    }
}