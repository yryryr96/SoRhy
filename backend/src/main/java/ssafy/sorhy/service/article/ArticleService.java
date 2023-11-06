package ssafy.sorhy.service.article;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import ssafy.sorhy.dto.article.ArticleDto;
import ssafy.sorhy.entity.article.Article;
import ssafy.sorhy.entity.article.Category;
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

import static ssafy.sorhy.entity.article.SearchCond.*;

@Transactional
@Service
@RequiredArgsConstructor
public class ArticleService {

    private final S3UploadService s3UploadService;
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    public ArticleDto.basicRes save(String nickname, MultipartFile file, ArticleDto.saveReq request) throws IOException {

        String imgUrl;
        User user = findUser(nickname);

        if (file != null) {
            imgUrl = s3UploadService.uploadFile(file);
        } else {
            imgUrl = null;
        }

        Article article = request.toEntity(user, imgUrl);
        articleRepository.save(article);

        return article.toBasicRes();
    }

    public ArticleDto.pagingRes findAllArticle(String nickname, String category, Pageable pageable) {

        Category articleCategory = Category.valueOf(category);
        if (category.equals("COMPANY")) {

            User user = findUser(nickname);
            Long companyId = user.getCompany().getId();
            Page<Article> result = articleRepository.findAllCompanyArticleByOrderByIdDesc(companyId, pageable);
            return toPagingRes(toDtoList(result.getContent()), result.getTotalElements(), result.getTotalPages());
        }

        Page<Article> result = articleRepository.findAllArticleByOrderByIdDesc(articleCategory, pageable);
        return toPagingRes(toDtoList(result.getContent()), result.getTotalElements(), result.getTotalPages());
    }

    public ArticleDto.detailRes findById(Long articleId) {

        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));

        return article.toDetailRes();
    }

    public String update(Long articleId, String nickname, ArticleDto.saveReq request) {

        User user = findUser(nickname);
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));

        if (article.getUser().equals(user)) {
            article.update(request);
            return "ok";
        } else {
            throw new CustomException(ErrorCode.UNAUTHORIZED_USER);
        }
    }

    public String delete(Long articleId, String nickname) {

        User user = findUser(nickname);
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));

        if (article.getUser().equals(user)) {
            articleRepository.delete(article);
            return "delete success!!";
        } else {
            throw new CustomException(ErrorCode.UNAUTHORIZED_USER);
        }
    }

    public ArticleDto.pagingRes searchArticle(ArticleDto.searchReq request, String category, Pageable pageable) {

        String word = request.getWord();
        Category articleCategory;
        SearchCond searchCond;
        Page<Article> result = null;

        try {
            articleCategory = Category.valueOf(category);
            searchCond = valueOf(request.getSearchCond());
        } catch (Exception e) {
            throw new CustomException(ErrorCode.NOT_VALID_REQUEST);
        }

        switch (searchCond) {
            case NONE:
                result = articleRepository.searchArticleByTitleAndContent(word, articleCategory, pageable);
                break;
            case TITLE:
                result = articleRepository.searchArticleByTitle(word, articleCategory, pageable);
                break;
            case NICKNAME:
                result = articleRepository.searchArticleByNickname(word, articleCategory, pageable);
                break;
            case CONTENT:
                result = articleRepository.searchArticleByContent(word, articleCategory, pageable);
                break;
            default:
                throw new CustomException(ErrorCode.NOT_VALID_REQUEST);
        }

        return toPagingRes(toDtoList(result.getContent()), result.getTotalElements(), result.getTotalPages());
    }

    public ArticleDto.pagingRes searchCompanyArticle(String nickname, ArticleDto.searchReq request, Pageable pageable) {

        String word = request.getWord();
        SearchCond searchCond;
        Page<Article> result = null;
        User user = userRepository.findByNickname(nickname).orElseThrow(() -> new CustomException(ErrorCode.NICKNAME_NOT_FOUND));
        Long companyId = user.getCompany().getId();

        try {
            searchCond = valueOf(request.getSearchCond());
        } catch (Exception e) {
            throw new CustomException(ErrorCode.NOT_VALID_REQUEST);
        }

        switch(searchCond) {
            case NONE:
                result = articleRepository.searchCompanyArticleByTitleAndContent(word, word, companyId, pageable);
                break;
            case TITLE:
                result = articleRepository.searchCompanyArticleByTitle(word, companyId, pageable);
                break;
            case NICKNAME:
                result = articleRepository.searchCompanyArticleByNickname(word, pageable);
                break;
            case CONTENT:
                result = articleRepository.searchCompanyArticleByContent(word, companyId, pageable);
                break;
            default:
                throw new CustomException(ErrorCode.NOT_VALID_REQUEST);
        }
        return toPagingRes(toDtoList(result.getContent()), result.getTotalElements(), result.getTotalPages());
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

    private User findUser(String nickname) {

        return userRepository.findByNickname(nickname)
                .orElseThrow(() -> new CustomException(ErrorCode.NICKNAME_NOT_FOUND));
    }
}
