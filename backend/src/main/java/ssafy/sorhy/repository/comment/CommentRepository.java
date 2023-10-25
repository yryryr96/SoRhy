package ssafy.sorhy.repository.comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ssafy.sorhy.entity.comment.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("select count(c) from Comment c where c.user.nickname = :nickname")
    Long countCommentByNickname(@Param("nickname") String nickname);
}
