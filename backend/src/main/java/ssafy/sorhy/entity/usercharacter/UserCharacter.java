package ssafy.sorhy.entity.usercharacter;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.dto.user.UserDto;
import ssafy.sorhy.entity.character.Character;
import ssafy.sorhy.entity.user.User;

import javax.persistence.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class UserCharacter {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_character_id")
    private Long id;

    @Builder.Default
    private Long useCount = 0L;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "character_id")
    private Character character;

    public void addUseCount() {
        this.useCount += 1;
    }

    public UserDto.top3Character toTop3Character() {

        return UserDto.top3Character.builder()
                .characterId(this.character.getId())
                .characterName(this.character.getName())
                .cnt(this.useCount)
                .build();
    }
}
