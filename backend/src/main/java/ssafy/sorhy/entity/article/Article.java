package ssafy.sorhy.entity.article;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
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

    @Builder.Default
    private String createdAt = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "article")
    private List<Comment> comments = new ArrayList<>();

    public ArticleDto.basicRes toBasicRes() {

        return ArticleDto.basicRes.builder()
                .articleId(this.id)
                .nickname(this.user.getNickname())
                .title(this.title)
                .createdAt(this.createdAt)
                .build();
    }

    public ArticleDto.detailRes toDetailRes() {

        return ArticleDto.detailRes.builder()
                .articleId(this.id)
                .nickname(this.user.getNickname())
                .title(this.title)
                .content(this.content)
                .createdAt(this.createdAt)
                .comments(getCommentBasicResList())
                .build();
    }

    private List<CommentDto.basicRes> getCommentBasicResList() {
        return this.comments.stream()
                .map(comment -> comment.toBasicRes())
                .collect(Collectors.toList());
    }
}