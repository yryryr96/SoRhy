package ssafy.sorhy.service.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssafy.sorhy.dto.comment.CommentDto;
import ssafy.sorhy.entity.article.Article;
import ssafy.sorhy.entity.comment.Comment;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.repository.article.ArticleRepository;
import ssafy.sorhy.repository.comment.CommentRepository;
import ssafy.sorhy.repository.user.UserRepository;

@Transactional
@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    public CommentDto.basicRes save(Long articleId, String nickname, CommentDto.saveReq request) {
        User user = userRepository.findByNickname(nickname);
        Article article = articleRepository.findById(articleId).get();

        Comment comment = Comment.builder()
                .user(user)
                .article(article)
                .content(request.getContent())
                .build();

        Comment saveComment = commentRepository.save(comment);
        return saveComment.toBasicRes();
    }
}