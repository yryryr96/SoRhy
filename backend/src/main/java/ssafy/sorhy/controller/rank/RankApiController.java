package ssafy.sorhy.controller.rank;

import lombok.Getter;
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
    public Response<List<GameResultDto.personalRankRes>> eachGameRank(@PathVariable String gameTitle) {

        List<GameResultDto.personalRankRes> response = gameResultService.eachGameRank(gameTitle);
        return new Response(200, "게임 별 랭크 조회 성공", response);
    }

    @GetMapping("/company")
    public Response<List<GameResultDto.companyRankRes>> companyRank() {
        List<GameResultDto.companyRankRes> response = gameResultService.companyRank();
        return new Response<>(200, "회사 별 랭크 조회 성공",response);
    }
}
