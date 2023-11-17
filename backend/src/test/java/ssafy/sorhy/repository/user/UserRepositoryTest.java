package ssafy.sorhy.repository.user;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import ssafy.sorhy.dto.user.UserRankInfoDto;
import ssafy.sorhy.entity.user.User;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import java.util.List;

@SpringBootTest
class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @Autowired
    EntityManager em;

    @Test
    @DisplayName("유저 전체 카운트")
    void countAllUsers() {

        Query query = em.createQuery("SELECT count(*), (SELECT count(u) from User u where u.totalScore > (select u2.totalScore from User u2 where u2.nickname = :nickname)) FROM User u");
        query.setParameter("nickname", "ssafy123");
        Object[] result = (Object[]) query.getSingleResult();

        long totalCount = (Long) result[0];
        long ssafy123Count = (Long) result[1];

        System.out.println("전체 유저 수: " + totalCount);
        System.out.println("ssafy123의 totalScore보다 높은 점수를 가진 유저 수: " + ssafy123Count);
    }
    
    @Test
    @DisplayName("유저 랭킹 조회")
    void findPersonalRankInfo() {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            System.out.println("===========");
            UserRankInfoDto userInfo = userRepository.findUserRankInfo(user.getNickname());
            System.out.println("userInfo.getPersonalRank() = " + userInfo.getPersonalRank());
            System.out.println("userInfo.getTotalUsersCount() = " + userInfo.getTotalUsersCount());
            System.out.println("userInfo.getRankPercent() = " + userInfo.getRankPercent());
        }
    }
}