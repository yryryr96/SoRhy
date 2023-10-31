package ssafy.sorhy.repository.article;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ssafy.sorhy.entity.article.Article;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long> {


    Page<Article> findAllByOrderByIdDesc(Pageable pageable);

    @Query("select count(a) from Article a where a.user.nickname = :nickname")
    Long countArticleByNickname(@Param("nickname") String nickname);

    Page<Article> findByTitleContainingOrderByIdDesc(String word, Pageable pageable);

    @Query("select a from Article a join a.user u where u.nickname = :nickname order by a.id desc")
    Page<Article> findByNicknameOrderByIdDesc(@Param("nickname") String nickname, Pageable pageable);

    Page<Article> findByContentContaining(String word, Pageable pageable);

    Page<Article> findByTitleContainingOrContentContainingOrderByIdDesc(String title, String content, Pageable pageable);
}
