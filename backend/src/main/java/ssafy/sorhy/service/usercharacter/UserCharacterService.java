package ssafy.sorhy.service.usercharacter;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.entity.character.Character;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.entity.usercharacter.UserCharacter;
import ssafy.sorhy.exception.CustomException;
import ssafy.sorhy.exception.ErrorCode;
import ssafy.sorhy.repository.character.CharacterRepository;
import ssafy.sorhy.repository.usercharacter.UserCharacterRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional
public class UserCharacterService {

    private final UserCharacterRepository userCharacterRepository;
    private final CharacterRepository characterRepository;

    public void findByUserIdAndCharacterId(User user, Long characterId) {
        Optional<UserCharacter> userCharacterInfo = userCharacterRepository.findByUserIdAndCharacterId(user.getId(), characterId);
        if (userCharacterInfo.isEmpty()) {

            Character character = characterRepository.findById(characterId).orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));
            UserCharacter newInfo = UserCharacter.builder()
                    .user(user)
                    .character(character)
                    .build();

            newInfo.addUseCount();
            userCharacterRepository.save(newInfo);
            return;
        }

        userCharacterInfo.get().addUseCount();
    }

    public List<GameResultDto.top3Character> findTop3Character(Long userId) {

        return userCharacterRepository.findTop3CharacterByUserId(userId).stream()
                .map(UserCharacter::toTop3Character)
                .collect(Collectors.toList());
    }
}
