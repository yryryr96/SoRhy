package ssafy.sorhy.service.article;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssafy.sorhy.dto.article.ArticleDto;
import ssafy.sorhy.entity.article.Article;
import ssafy.sorhy.entity.user.User;
import ssafy.sorhy.repository.article.ArticleRepository;
import ssafy.sorhy.repository.user.UserRepository;

import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Service
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    public ArticleDto.basicRes save(String nickname, ArticleDto.saveReq request) {

        User user = userRepository.findByNickname(nickname);
        Article article = request.toEntity(user);
        articleRepository.save(article);

        return article.toBasicRes();
    }

    public List<ArticleDto.basicRes> findAll() {

        List<Article> articles = articleRepository.findAll();

        return articles.stream()
                .map(article -> article.toBasicRes())
                .collect(Collectors.toList());
    }

    public ArticleDto.detailRes findById(Long articleId) {

        Article article = articleRepository.findById(articleId).get();
        return article.toDetailRes();
    }
}
