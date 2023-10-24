package ssafy.sorhy.controller.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ssafy.sorhy.dto.comment.CommentDto;
import ssafy.sorhy.repository.comment.CommentRepository;
import ssafy.sorhy.service.comment.CommentService;

@RestController
@RequiredArgsConstructor
public class CommentApiController {

    private final CommentService commentService;

//    @PostMapping("/{articleId}/comment")
//    public CommentDto.BasicRes save(@PathVariable Long articleId, @RequestBody CommentDto.saveReq request) {
//
//        commentService.save(articleId, request);
//    }
}
