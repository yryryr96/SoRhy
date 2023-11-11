package ssafy.sorhy.controller.rank;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;
import ssafy.sorhy.dto.ranking.RankingDto;
import ssafy.sorhy.service.gameresult.GameResultService;
import ssafy.sorhy.service.ranking.RankingService;
import ssafy.sorhy.util.response.Response;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/rank")
public class RankApiController {

    private final RankingService rankingService;

    @GetMapping("/{gameTitle}")
    public Response<List<RankingDto.personalRankRes>> eachGameRank(@PathVariable String gameTitle,
                                                                      @PageableDefault(size=10) Pageable pageable) {

        List<RankingDto.personalRankRes> response = rankingService.eachGameRank(gameTitle, pageable);
        return new Response(200, "게임 별 랭크 조회 성공", response);
    }

    @GetMapping("/company")
    public Response<List<RankingDto.companyRankRes>> companyRank() {

        List<RankingDto.companyRankRes> response = rankingService.companyRank();
        return new Response<>(200, "회사 별 랭크 조회 성공",response);
    }
}
