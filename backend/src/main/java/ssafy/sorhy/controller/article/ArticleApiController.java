package ssafy.sorhy.controller.article;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.lang.Nullable;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ssafy.sorhy.dto.article.ArticleDto;
import ssafy.sorhy.service.article.ArticleService;
import ssafy.sorhy.util.response.Response;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class ArticleApiController {

    private final ArticleService articleService;

    @PostMapping("/article")
    public Response<ArticleDto.basicRes> save(
            @RequestPart @Valid ArticleDto.saveReq request,
            @RequestPart @Nullable MultipartFile file,
            Authentication authentication) throws IOException {

        String nickname = authentication.getName();
        ArticleDto.basicRes response = articleService.save(nickname, file, request);
        return new Response(201, "게시글을 정상적으로 작성했습니다.", response);
    }

    // 자유 게시판 글 전체 조회
    @GetMapping("/articles")
    public Response<ArticleDto.pagingRes> findAllArticle(@RequestParam String category,
                                                         @PageableDefault(size=4) Pageable pageable,
                                                         Authentication authentication) {

        String nickname = null;
        if (category.equals("COMPANY")) {
            nickname = authentication.getName();
        }
        ArticleDto.pagingRes response = articleService.findAllArticle(nickname, category, pageable);
        return new Response(200, "게시글 전체 조회 성공", response);
    }

    @GetMapping("/articles/hot")
    public Response<ArticleDto.pagingRes> findHotArticles(@RequestParam String category,
                                                         @PageableDefault(size=4) Pageable pageable,
                                                         Authentication authentication) {
        String nickname = null;
        if (category.equals("COMPANY")) {
            nickname = authentication.getName();
        }
        ArticleDto.pagingRes response = articleService.findHotArticles(nickname, category, pageable);
        return new Response(200, "게시글 전체 조회 성공", response);
    }

    @GetMapping("/articles/issue")
    public Response<List<ArticleDto.issueRes>> findCurrentIssue(@PageableDefault(size=6) Pageable pageable) {

        List<ArticleDto.issueRes> response = articleService.findCurrentIssue(pageable);
        return new Response(200, "실시간 핫이슈 조회 성공", response);
    }

    @GetMapping("/article/{articleId}")
    public Response<ArticleDto.detailRes> findById(@PathVariable Long articleId,
                                                   @PageableDefault(size=4) Pageable pageable) {

        ArticleDto.detailRes response = articleService.findById(articleId, pageable);
        return new Response(200, "게시글을 조회했습니다.", response);
    }

    @PutMapping("/article/{articleId}")
    public Response<String> update(@PathVariable Long articleId,
                                   @RequestBody ArticleDto.saveReq request,
                                   Authentication authentication) {

        String response = articleService.update(articleId, authentication.getName(), request);
        return new Response(200, "게시글 수정 성공", response);
    }

    @DeleteMapping("/article/{articleId}")
    public Response<String> delete(@PathVariable Long articleId,
                                   Authentication authentication) {

        String nickname = authentication.getName();
        String response = articleService.delete(articleId, nickname);
        return new Response<>(204, "삭제 안료", response);
    }

    @PostMapping("/articles/search")
    public Response<ArticleDto.pagingRes> searchArticle(@RequestBody @Valid ArticleDto.searchReq request,
                                                        @PageableDefault(size=6) Pageable pageable,
                                                        Authentication authentication) {

        ArticleDto.pagingRes response;
        String category = request.getCategory();
        if (category.equals("COMPANY")) {

            String nickname = authentication.getName();
            response = articleService.searchCompanyArticle(nickname, request, pageable);
        } else {

            response = articleService.searchArticle(request, category, pageable);
        }
        return new Response(200, "검색 성공", response);
    }
}
