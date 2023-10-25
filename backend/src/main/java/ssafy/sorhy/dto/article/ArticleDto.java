package ssafy.sorhy.dto.article;

import lombok.Builder;
import lombok.Data;
import ssafy.sorhy.dto.comment.CommentDto;
import ssafy.sorhy.entity.article.Article;
import ssafy.sorhy.entity.user.User;

import java.util.List;

@Data
public class ArticleDto {

    @Data
    @Builder
    public static class basicRes {

        private Long articleId;
        private String nickname;
        private String title;
        private String createdAt;
    }

    @Data
    public static class saveReq {

        private String title;
        private String content;

        public Article toEntity(User user) {

            return Article.builder()
                    .user(user)
                    .title(this.title)
                    .content(this.content)
                    .build();
        }
    }

    @Data
    @Builder
    public static class detailRes {

        private Long articleId;
        private String nickname;
        private String title;
        private String content;
        private String createdAt;
        private List<CommentDto.basicRes> comments;
    }
}
