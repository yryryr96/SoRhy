package ssafy.sorhy.dto.article;

import lombok.Builder;
import lombok.Data;
import ssafy.sorhy.entity.article.Article;
import ssafy.sorhy.entity.user.User;

@Data
public class ArticleDto {

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
    public static class basicRes {

        private Long articleId;
        private String nickname;
        private String title;
    }

    @Data
    @Builder
    public static class detailRes {

        private Long articleId;
        private String nickname;
        private String title;
        private String content;
        private String createdAt;
    }
}
