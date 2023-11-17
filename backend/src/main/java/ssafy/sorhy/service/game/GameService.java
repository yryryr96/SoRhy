package ssafy.sorhy.service.game;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssafy.sorhy.entity.game.Game;
import ssafy.sorhy.dto.game.GameDto;
import ssafy.sorhy.repository.game.GameRepository;

@Service
@RequiredArgsConstructor
@Transactional
public class GameService {

    private final GameRepository gameRepository;

    public GameDto.Response createGame(GameDto.Request request) {
        Game game = request.toEntity();
        Game saveGame = gameRepository.save(game);
        return saveGame.toSaveGameDto();
    }
}
