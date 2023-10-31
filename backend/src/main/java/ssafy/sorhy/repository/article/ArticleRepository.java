package ssafy.sorhy.repository.article;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ssafy.sorhy.entity.article.Article;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long> {

    @Query("select count(a) from Article a where a.user.nickname = :nickname")
    Long countArticleByNickname(@Param("nickname") String nickname);

    List<Article> findByTitleContainingOrderByIdDesc(String word);

    @Query("select a from Article a join fetch a.user where a.user.nickname = :nickname order by a.id desc")
    List<Article> findByNicknameOrderByDesc(@Param("nickname") String nickname);

    List<Article> findByContentContaining(String word);

    List<Article> findByTitleContainingOrContentContainingOrderByIdDesc(String title, String content);
}
