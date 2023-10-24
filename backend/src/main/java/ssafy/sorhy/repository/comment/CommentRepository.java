package ssafy.sorhy.repository.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import ssafy.sorhy.entity.comment.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
