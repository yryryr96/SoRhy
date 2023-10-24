package ssafy.sorhy.controller.rank;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.entity.gameresult.GameResult;
import ssafy.sorhy.service.gameresult.GameResultService;
import ssafy.sorhy.util.Response;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/rank")
public class RankApiController {

    private final GameResultService gameResultService;

    @GetMapping("/{gameTitle}")
    public Response<List<GameResultDto.RankRes>> eachGameRank(@PathVariable String gameTitle) {

        List<GameResultDto.RankRes> response = gameResultService.eachGameRank(gameTitle);
        return new Response(200, "게임별 랭크 조회 성공", response);
    }
}
