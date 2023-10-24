package ssafy.sorhy.dto.comment;

import lombok.Builder;
import lombok.Data;
import ssafy.sorhy.entity.comment.Comment;
import ssafy.sorhy.entity.user.User;

@Data
public class CommentDto {

    @Data
    @Builder
    public static class basicRes {

        private Long articleId;
        private String nickname;
        private String content;
        private String createdAt;
    }

    @Data
    public static class saveReq {

        private String nickname;
        private String content;
    }
}
