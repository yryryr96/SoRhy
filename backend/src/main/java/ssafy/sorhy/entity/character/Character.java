package ssafy.sorhy.entity.character;

import lombok.Getter;
import ssafy.sorhy.entity.usercharacter.UserCharacter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Table(name = "Characters")
public class Character {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "character_id")
    private Long id;

    private String name;

    @OneToMany(mappedBy = "character")
    private List<UserCharacter> userCharacter;
}
