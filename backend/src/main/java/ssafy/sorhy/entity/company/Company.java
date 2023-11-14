package ssafy.sorhy.entity.company;

import lombok.Getter;
import lombok.NoArgsConstructor;
import ssafy.sorhy.dto.ranking.RankingDto;
import ssafy.sorhy.entity.user.User;

import javax.persistence.*;
import java.util.List;
import java.util.Optional;

@Entity
@NoArgsConstructor
@Getter
public class Company {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_id")
    private Long id;

    private String companyName;
    private int companyScore;

    @OneToMany(mappedBy = "company")
    private List<User> users;

    public void updateCompanyScore(int userScore) {
        this.companyScore += userScore;
    }
}
