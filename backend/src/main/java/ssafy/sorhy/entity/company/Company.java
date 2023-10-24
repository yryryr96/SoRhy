package ssafy.sorhy.entity.company;

import lombok.NoArgsConstructor;
import ssafy.sorhy.entity.user.User;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
public class Company {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_id")
    private Long id;

    private String companyName;
    private Long companyScore;

    @OneToMany(mappedBy = "company")
    private List<User> users;
}
