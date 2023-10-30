package ssafy.sorhy.controller.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ssafy.sorhy.dto.comment.CommentDto;
import ssafy.sorhy.repository.comment.CommentRepository;
import ssafy.sorhy.service.comment.CommentService;
import ssafy.sorhy.util.response.Response;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class CommentApiController {

    private final CommentService commentService;
    private final CommentRepository commentRepository;

    @PostMapping("/{articleId}/comment")
    public Response<CommentDto.basicRes> save(@PathVariable Long articleId, @RequestBody @Valid CommentDto.saveReq request, Authentication authentication) {

        String nickname = authentication.getName();
        return new Response(201, "댓글 생성 완료", commentService.save(articleId, nickname, request));
    }

    @DeleteMapping("/{articleId}/comment/{commentId}")
    public Response<String> delete(@PathVariable Long articleId, @PathVariable Long commentId, Authentication authentication) {

        String nickname = authentication.getName();
        commentService.delete(commentId, nickname);
        return new Response(204, "댓글 삭제 완료", "comment delete success!!");
    }

    @PutMapping("/{articleId}/comment/{commentId}")
    public Response<String> update(@PathVariable Long articleId,
                                   @PathVariable Long commentId,
                                   @RequestBody @Valid CommentDto.saveReq request,
                                   Authentication authentication) {

        String nickname = authentication.getName();
        commentService.update(commentId, nickname, request);
        return new Response(200, "댓글 수정 완료", "comment update success!!");
    }
}
