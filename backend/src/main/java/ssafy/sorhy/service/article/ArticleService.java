package ssafy.sorhy.service.article;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import ssafy.sorhy.dto.article.ArticleDto;
import ssafy.sorhy.entity.article.Article;
import ssafy.sorhy.entity.article.SearchCond;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.exception.CustomException;
import ssafy.sorhy.exception.ErrorCode;
import ssafy.sorhy.repository.article.ArticleRepository;
import ssafy.sorhy.repository.user.UserRepository;
import ssafy.sorhy.service.s3.S3UploadService;
import ssafy.sorhy.util.response.Response;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Service
@RequiredArgsConstructor
public class ArticleService {

    private final S3UploadService s3UploadService;
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    public ArticleDto.basicRes save(String nickname, MultipartFile file, ArticleDto.saveReq data) throws IOException {

        String imgUrl;
        User user = userRepository.findByNickname(nickname);

        if (file != null) {
            imgUrl = s3UploadService.uploadFile(file);
        } else {
            imgUrl = null;
        }

        Article article = data.toEntity(user,imgUrl);
        articleRepository.save(article);

        return article.toBasicRes();
    }

    public ArticleDto.pagingRes findAllFreeArticle(Pageable pageable) {

        Page<Article> result = articleRepository.findAllFreeArticleByOrderByIdDesc(pageable);

        return toPagingRes(toDtoList(result.getContent()), result.getTotalElements(), result.getTotalPages());
    }

    public ArticleDto.pagingRes findAllCompanyArticle(Long companyId, String nickname, Pageable pageable) {

        User user = userRepository.findByNickname(nickname);

        validateUser(companyId, user);

        Page<Article> result = articleRepository.findAllCompanyArticleByOrderByIdDesc(companyId, pageable);
        return toPagingRes(toDtoList(result.getContent()), result.getTotalElements(), result.getTotalPages());
    }

    public ArticleDto.detailRes findById(Long articleId) {

        Article article = articleRepository.findById(articleId)
                .orElseThrow(()-> new CustomException(ErrorCode.DATA_NOT_FOUND));

        return article.toDetailRes();
    }

    public String update(Long articleId, String nickname, ArticleDto.saveReq request) {

        Article article = articleRepository.findById(articleId)
                .orElseThrow(()-> new CustomException(ErrorCode.DATA_NOT_FOUND));

        if(article.getUser().getNickname().equals(nickname)) {
            article.update(request);
            return "ok";
        } else {
            throw new CustomException(ErrorCode.UNAUTHORIZED_USER);
        }
    }

    public String delete(Long articleId, String nickname) {

        Article article = articleRepository.findById(articleId)
                .orElseThrow(()-> new CustomException(ErrorCode.DATA_NOT_FOUND));

        if (article.getUser().getNickname().equals(nickname)) {
            articleRepository.delete(article);
            return "delete success!!";
        } else {
            throw new CustomException(ErrorCode.UNAUTHORIZED_USER);
        }
    }

    public ArticleDto.pagingRes searchArticle(ArticleDto.searchReq request, Pageable pageable) {

        String word = request.getWord();

        if (SearchCond.NONE == (SearchCond.valueOf(request.getSearchCond()))) {
            Page<Article> result = articleRepository.searchFreeArticleByTitleAndContent(word, word, pageable);

            return toPagingRes(toDtoList(result.getContent()), result.getTotalElements(), result.getTotalPages());
        }

        if (SearchCond.TITLE == (SearchCond.valueOf(request.getSearchCond()))) {

            Page<Article> result = articleRepository.searchFreeArticleByTitle(word, pageable);
            return toPagingRes(toDtoList(result.getContent()), result.getTotalElements(), result.getTotalPages());
        }

        if (SearchCond.NICKNAME == (SearchCond.valueOf(request.getSearchCond()))) {

            Page<Article> result = articleRepository.searchFreeArticleByNickname(word, pageable);
            return toPagingRes(toDtoList(result.getContent()), result.getTotalElements(), result.getTotalPages());
        }

        if (SearchCond.CONTENT == (SearchCond.valueOf(request.getSearchCond()))) {

            Page<Article> result = articleRepository.searchFreeArticleByContent(word, pageable);
            return toPagingRes(toDtoList(result.getContent()), result.getTotalElements(), result.getTotalPages());
        }

        throw new CustomException(ErrorCode.DATA_NOT_FOUND);
    }

    public ArticleDto.pagingRes searchCompanyArticle(Long companyId, ArticleDto.searchReq request, Pageable pageable) {

        String word = request.getWord();

        if (SearchCond.NONE == (SearchCond.valueOf(request.getSearchCond()))) {
            Page<Article> result = articleRepository.searchCompanyArticleByTitleAndContent(word, word, companyId, pageable);

            return toPagingRes(toDtoList(result.getContent()), result.getTotalElements(), result.getTotalPages());
        }

        if (SearchCond.TITLE == (SearchCond.valueOf(request.getSearchCond()))) {

            Page<Article> result = articleRepository.searchCompanyArticleByTitle(word, companyId, pageable);
            return toPagingRes(toDtoList(result.getContent()), result.getTotalElements(), result.getTotalPages());
        }

        if (SearchCond.NICKNAME == (SearchCond.valueOf(request.getSearchCond()))) {

            Page<Article> result = articleRepository.searchCompanyArticleByNickname(word, pageable);
            return toPagingRes(toDtoList(result.getContent()), result.getTotalElements(), result.getTotalPages());
        }

        if (SearchCond.CONTENT == (SearchCond.valueOf(request.getSearchCond()))) {

            Page<Article> result = articleRepository.searchCompanyArticleByContent(word, companyId, pageable);
            return toPagingRes(toDtoList(result.getContent()), result.getTotalElements(), result.getTotalPages());
        }

        throw new CustomException(ErrorCode.DATA_NOT_FOUND);
    }

    private List<ArticleDto.basicRes> toDtoList(List<Article> articleList) {

        return articleList.stream()
                .map(Article::toBasicRes)
                .collect(Collectors.toList());
    }

    private ArticleDto.pagingRes toPagingRes(List<ArticleDto.basicRes> articlesDto, long totalElement, int totalPage) {

        return ArticleDto.pagingRes.builder()
                .totalPage(totalPage)
                .totalElement(totalElement)
                .articles(articlesDto)
                .build();
    }

    private void validateUser(Long companyId, User user) {
        if (companyId != user.getCompany().getId()) {

            throw new CustomException(ErrorCode.UNAUTHORIZED_USER);
        }
    }
}
