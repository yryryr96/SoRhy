package ssafy.sorhy.dto.comment;

import lombok.Builder;
import lombok.Data;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
public class CommentDto {

    @Data
    @Builder
    public static class basicRes {

        private Long commentId;
        private String nickname;
        private String content;
        private String createdAt;
    }

    @Data
    public static class saveReq {

        @NotBlank
        private String content;
    }

    @Data
    @Builder
    public static class pagingRes {

        private long totalElement;
        private int totalPage;
        private List<basicRes> comments;
    }
}
