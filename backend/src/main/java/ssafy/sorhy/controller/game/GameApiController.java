package ssafy.sorhy.controller.game;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import ssafy.sorhy.dto.game.GameDto;
import ssafy.sorhy.entity.game.Game;
import ssafy.sorhy.repository.game.GameRepository;
import ssafy.sorhy.service.game.GameService;
import ssafy.sorhy.util.response.Response;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/game")
public class GameApiController {

    private final GameService gameService;
    private final GameRepository gameRepository;

    @PostMapping
    public Response<GameDto.Response> createGame(@RequestBody GameDto.Request request) {
        GameDto.Response response = gameService.createGame(request);
        return new Response(201, "게임 생성 완료", response);
    }

    @GetMapping
    public List<Game> findAll() {
        return gameRepository.findAll();
    }
}
