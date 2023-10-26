package ssafy.sorhy.controller.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ssafy.sorhy.dto.comment.CommentDto;
import ssafy.sorhy.repository.comment.CommentRepository;
import ssafy.sorhy.service.comment.CommentService;
import ssafy.sorhy.util.Response;

@RestController
@RequiredArgsConstructor
public class CommentApiController {

    private final CommentService commentService;

    @PostMapping("/{articleId}/comment")
    public Response<CommentDto.basicRes> save(@PathVariable Long articleId, @RequestBody CommentDto.saveReq request, Authentication authentication) {

        String nickname = authentication.getName();
        return new Response(201, "댓글 생성 완료", commentService.save(articleId, nickname, request));
    }
}
