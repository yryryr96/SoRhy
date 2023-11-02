package ssafy.sorhy.controller.article;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ssafy.sorhy.dto.article.ArticleDto;
import ssafy.sorhy.entity.article.Article;
import ssafy.sorhy.exception.CustomException;
import ssafy.sorhy.exception.ErrorCode;
import ssafy.sorhy.repository.article.ArticleRepository;
import ssafy.sorhy.service.article.ArticleService;
import ssafy.sorhy.util.response.Response;

import javax.validation.Valid;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class ArticleApiController {

    private final ArticleService articleService;

    @PostMapping("/article")
    public Response<ArticleDto.basicRes> save(
            @RequestPart @Valid ArticleDto.saveReq data,
            @RequestPart(required = false) MultipartFile file,
            Authentication authentication) throws IOException {

        String nickname = authentication.getName();
        ArticleDto.basicRes response = articleService.save(nickname, file, data);
        return new Response(201, "게시글을 정상적으로 작성했습니다.", response);
    }

    @GetMapping("/articles")
    public Response<ArticleDto.pagingRes> findAll(@PageableDefault(size=2) Pageable pageable) {

        ArticleDto.pagingRes response = articleService.findAll(pageable);
        return new Response(200, "게시글 전체 조회 성공", response);
    }

    @GetMapping("/article/{articleId}")
    public Response<ArticleDto.detailRes> findById(@PathVariable Long articleId) {

        ArticleDto.detailRes response = articleService.findById(articleId);
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

    @GetMapping("/articles/search")
    public Response<ArticleDto.pagingRes> searchArticle(@RequestBody @Valid ArticleDto.searchReq request,
                                                             @PageableDefault(size=2) Pageable pageable) {

        ArticleDto.pagingRes response = articleService.searchArticle(request, pageable);
        return new Response(200, "검색 성공", response);
    }


}
