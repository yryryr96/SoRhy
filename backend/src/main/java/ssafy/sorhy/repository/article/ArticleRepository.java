package ssafy.sorhy.repository.article;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ssafy.sorhy.entity.article.Article;

public interface ArticleRepository extends JpaRepository<Article, Long> {

    @Query("select count(a) from Article a where a.user.nickname = :nickname")
    Long countArticleByNickname(@Param("nickname") String nickname);
}
