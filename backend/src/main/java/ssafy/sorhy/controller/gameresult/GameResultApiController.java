package ssafy.sorhy.controller.gameresult;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.service.gameresult.GameResultService;
import ssafy.sorhy.service.user.UserService;
import ssafy.sorhy.util.response.Response;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/gameresult")
public class GameResultApiController {

    private final GameResultService gameResultService;

    @PostMapping
    public Response<GameResultDto.saveRes> save(@RequestBody GameResultDto.saveReq request, Authentication authentication) {

        String nickname = authentication.getName();
        GameResultDto.saveRes response = gameResultService.save(request, nickname);
        return new Response(201, "게임 결과를 저장했습니다.", response);
    }
}
