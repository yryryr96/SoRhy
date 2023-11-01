package ssafy.sorhy.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ssafy.sorhy.entity.user.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByNickname(String nickname);

    boolean existsByNickname(String nickname);
}
