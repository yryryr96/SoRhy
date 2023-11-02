package ssafy.sorhy.repository.article;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ssafy.sorhy.entity.article.Article;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long> {

    @Query("select a from Article a where a.companyArticle = 0 order by a.id desc")
    Page<Article> findAllFreeArticleByOrderByIdDesc(Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.companyArticle = 1 and u.company.id = :companyId " +
            "order by a.id desc")
    Page<Article> findAllCompanyArticleByOrderByIdDesc(Long companyId, Pageable pageable);

    @Query("select count(a) from Article a where a.user.nickname = :nickname")
    Long countArticleByNickname(@Param("nickname") String nickname);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.companyArticle = 0 and a.title like %:word% " +
            "order by a.id desc")
    Page<Article> searchFreeArticleByTitle(String word, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.companyArticle = 0 and u.nickname = :nickname " +
            "order by a.id desc")
    Page<Article> searchFreeArticleByNickname(@Param("nickname") String nickname, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.companyArticle = 0 and a.content like %:word% " +
            "order by a.id desc")
    Page<Article> searchFreeArticleByContent(String word, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.companyArticle = 0 and a.title like %:title% or a.content like %:content% " +
            "order by a.id desc")
    Page<Article> searchFreeArticleByTitleAndContent(String title, String content, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.companyArticle = 1 and u.company.id = :companyId and a.title like %:word% " +
            "order by a.id desc")
    Page<Article> searchCompanyArticleByTitle(String word, Long companyId, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.companyArticle = 1 and u.nickname = :nickname " +
            "order by a.id desc")
    Page<Article> searchCompanyArticleByNickname(@Param("nickname") String nickname, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.companyArticle = 1 and u.company.id = :companyId and a.content like %:word% " +
            "order by a.id desc")
    Page<Article> searchCompanyArticleByContent(String word, Long companyId, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.companyArticle = 1 and u.company.id = :companyId and a.title like %:title% or a.content like %:content% " +
            "order by a.id desc")
    Page<Article> searchCompanyArticleByTitleAndContent(String title, String content, Long companyId,Pageable pageable);
}
