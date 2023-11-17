package ssafy.sorhy.repository.comment;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ssafy.sorhy.entity.comment.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("select count(c) from Comment c where c.user.nickname = :nickname")
    Long countCommentByNickname(String nickname);

    Page<Comment> findByArticleIdOrderByIdDesc(Long articleId, Pageable pageable);
}
