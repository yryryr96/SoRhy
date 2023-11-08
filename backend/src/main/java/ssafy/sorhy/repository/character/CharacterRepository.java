package ssafy.sorhy.repository.character;

import org.springframework.data.jpa.repository.JpaRepository;
import ssafy.sorhy.entity.character.Character;

public interface CharacterRepository extends JpaRepository<Character, Long> {
}
