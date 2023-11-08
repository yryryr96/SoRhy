package ssafy.sorhy.controller.rank;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;
import ssafy.sorhy.dto.gameresult.GameResultDto;
import ssafy.sorhy.dto.user.UserDto;
import ssafy.sorhy.service.gameresult.GameResultService;
import ssafy.sorhy.util.response.Response;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/rank")
public class RankApiController {

    private final GameResultService gameResultService;

    @GetMapping("/{gameTitle}")
    public Response<List<GameResultDto.personalRankRes>> eachGameRank(@PathVariable String gameTitle,
                                                                      @PageableDefault(size=10) Pageable pageable) {

        List<GameResultDto.personalRankRes> response = gameResultService.eachGameRank(gameTitle, pageable);
        return new Response(200, "게임 별 랭크 조회 성공", response);
    }

    @GetMapping("/company")
    public Response<List<GameResultDto.companyRankRes>> companyRank() {

        List<GameResultDto.companyRankRes> response = gameResultService.companyRank();
        return new Response<>(200, "회사 별 랭크 조회 성공",response);
    }

    @GetMapping("/company/{companyId}")
    public Response<List<UserDto.userRankOfCompanyRes>> companyUserRank(@PathVariable Long companyId,
                                                                        @PageableDefault(size=10) Pageable pageable) {

        List<UserDto.userRankOfCompanyRes> response = gameResultService.companyUserRank(pageable, companyId);
        return new Response(200, "사내 랭킹 조회 성공", response);
    }
}
