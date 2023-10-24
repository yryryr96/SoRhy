package ssafy.sorhy.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import ssafy.sorhy.entity.user.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByNickname(String nickname);

    boolean existsByNickname(String nickname);
}
