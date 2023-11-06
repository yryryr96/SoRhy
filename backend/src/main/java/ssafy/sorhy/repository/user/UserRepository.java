package ssafy.sorhy.repository.user;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ssafy.sorhy.entity.user.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByNickname(String nickname);

    boolean existsByNickname(String nickname);

    @Query("select u from User u join u.company c where c.id = :companyId order by u.totalScore desc")
    Page<User> findUserRankInCompany(@Param("companyId") Long companyId, Pageable pageable);
}
