package ssafy.sorhy.service.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssafy.sorhy.dto.comment.CommentDto;
import ssafy.sorhy.entity.article.Article;
import ssafy.sorhy.entity.comment.Comment;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.exception.CustomException;
import ssafy.sorhy.exception.ErrorCode;
import ssafy.sorhy.repository.article.ArticleRepository;
import ssafy.sorhy.repository.comment.CommentRepository;
import ssafy.sorhy.repository.user.UserRepository;

import java.util.stream.Collectors;

@Transactional
@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    public CommentDto.basicRes save(Long articleId, String nickname, CommentDto.saveReq request) {

        User user = findUser(nickname);
        Article article = articleRepository.findById(articleId)
                .orElseThrow(()-> new CustomException(ErrorCode.DATA_NOT_FOUND));

        Comment comment = Comment.builder()
                .user(user)
                .article(article)
                .content(request.getContent())
                .build();

        Comment saveComment = commentRepository.save(comment);
        return saveComment.toBasicRes();
    }

    public String delete(Long commentId, String nickname) {

        User user = findUser(nickname);
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(()-> new CustomException(ErrorCode.DATA_NOT_FOUND));

        if (comment.getUser().equals(user)) {

            commentRepository.delete(comment);
            return "delete success";
        } else {

            throw new CustomException(ErrorCode.UNAUTHORIZED_USER);
        }
    }

    public String update(Long commentId, String nickname, CommentDto.saveReq request) {

        User user = findUser(nickname);
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(()-> new CustomException(ErrorCode.DATA_NOT_FOUND));

        if (comment.getUser().equals(user)) {

            comment.update(request);
            return "update success!";
        } else {

            throw new CustomException(ErrorCode.UNAUTHORIZED_USER);
        }
    }

    public CommentDto.pagingRes findComments(Long articleId, Pageable pageable) {

        Page<Comment> result = commentRepository.findByArticleIdOrderByIdDesc(articleId, pageable);
        return CommentDto.pagingRes.builder()
                .comments(result.stream()
                        .map(Comment::toBasicRes)
                        .collect(Collectors.toList()))
                .totalElement(result.getTotalElements())
                .totalPage(result.getTotalPages())
                .build();
    }

    private User findUser(String nickname) {
        return userRepository.findByNickname(nickname).orElseThrow(() -> new CustomException(ErrorCode.NICKNAME_NOT_FOUND));
    }
}
