package ssafy.sorhy.controller.article;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ssafy.sorhy.dto.article.ArticleDto;
import ssafy.sorhy.service.article.ArticleService;
import ssafy.sorhy.util.Response;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ArticleApiController {

    private final ArticleService articleService;

    @PostMapping("/article")
    public Response<ArticleDto.basicRes> save(@RequestBody ArticleDto.saveReq request, Authentication authentication) {

        String nickname = authentication.getName();
        ArticleDto.basicRes response = articleService.save(nickname, request);
        return new Response(201, "게시글을 정상적으로 작성했습니다.", response);
    }

    @GetMapping("/articles")
    public Response<List<ArticleDto.basicRes>> findAll() {

        List<ArticleDto.basicRes> response = articleService.findAll();
        return new Response(200, "게시글 전체 조회 성공", response);
    }

    @GetMapping("/article/{articleId}")
    public Response<ArticleDto.detailRes> findById(@PathVariable Long articleId) {

        ArticleDto.detailRes response = articleService.findById(articleId);
        return new Response(200, "게시글을 조회했습니다.", response);
    }

}
