package ssafy.sorhy.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ssafy.sorhy.dto.user.UserRankInfoDto;
import ssafy.sorhy.entity.user.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByNickname(String nickname);

    boolean existsByNickname(String nickname);

    @Query("select u from User u " +
            "join u.company c " +
            "where c.id = :companyId " +
            "and " +
            "u.totalScore = (select max(u2.totalScore) from User u2 join u2.company c2 where c2.id = :companyId)")
    Optional<User> findCompanyFirstRankUser(Long companyId);

    @Query(value = "select new ssafy.sorhy.dto.user.UserRankInfoDto(count(u), (select count(u)+1 from User u where u.totalScore > (select u2.totalScore from User u2 where u2.nickname = :nickname))) from User u")
    UserRankInfoDto findUserRankInfo(String nickname);
}
