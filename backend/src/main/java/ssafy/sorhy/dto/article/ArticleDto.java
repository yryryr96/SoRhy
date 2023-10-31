package ssafy.sorhy.dto.article;

import lombok.Builder;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import ssafy.sorhy.dto.comment.CommentDto;
import ssafy.sorhy.entity.article.Article;
import ssafy.sorhy.entity.article.SearchCond;
import ssafy.sorhy.entity.user.User;

import javax.validation.constraints.NotBlank;
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

        @NotBlank(message = "제목을 입력하세요.")
        private String title;

        @NotBlank(message = "내용을 입력하세요.")
        private String content;

        public Article toEntity(User user, String imgUrl) {

            return Article.builder()
                    .user(user)
                    .title(this.title)
                    .content(this.content)
                    .imgUrl(imgUrl)
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
        private String imgUrl;
        private List<CommentDto.basicRes> comments;
    }

    @Data
    public static class searchReq {

        private String searchCond;
        private String word;
    }
}
