package ssafy.sorhy.repository.article;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ssafy.sorhy.entity.article.Article;
import ssafy.sorhy.entity.article.Category;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long> {

    @Query("select a from Article a where a.category = :category order by a.id desc")
    Page<Article> findAllArticleByOrderByIdDesc(@Param("category") Category category, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.category = 'COMPANY' and u.company.id = :companyId " +
            "order by a.id desc")
    Page<Article> findAllCompanyArticleByOrderByIdDesc(@Param("companyId") Long companyId, Pageable pageable);

    @Query("select a from Article a where a.category = :category order by a.viewCount desc")
    Page<Article> findHotArticleByOrderByViewCountDesc(@Param("category") Category category, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.category = 'COMPANY' and u.company.id = :companyId " +
            "order by a.viewCount desc")
    Page<Article> findHotCompanyArticleByOrderByViewCountDesc(@Param("companyId") Long companyId, Pageable pageable);

    @Query("select count(a) from Article a where a.user.nickname = :nickname")
    Long countArticleByNickname(@Param("nickname") String nickname);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.category = :category and a.title like %:word% " +
            "order by a.id desc")
    Page<Article> searchArticleByTitle(@Param("word") String word, @Param("category") Category category, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.category = :category and u.nickname = :nickname " +
            "order by a.id desc")
    Page<Article> searchArticleByNickname(@Param("nickname") String nickname, @Param("category") Category category, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.category = :category and a.content like %:word% " +
            "order by a.id desc")
    Page<Article> searchArticleByContent(@Param("word") String word, @Param("category") Category category, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.category = :category and a.title like %:word% or a.content like %:word% " +
            "order by a.id desc")
    Page<Article> searchArticleByTitleAndContent(@Param("word") String word, @Param("category") Category category, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.category = 'COMPANY' and u.company.id = :companyId and a.title like %:word% " +
            "order by a.id desc")
    Page<Article> searchCompanyArticleByTitle(@Param("word") String word, @Param("companyId") Long companyId, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.category = 'COMPANY' and u.nickname = :nickname " +
            "order by a.id desc")
    Page<Article> searchCompanyArticleByNickname(@Param("nickname") String nickname, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.category = 'COMPANY' and u.company.id = :companyId and a.content like %:word% " +
            "order by a.id desc")
    Page<Article> searchCompanyArticleByContent(@Param("word") String word, @Param("companyId") Long companyId, Pageable pageable);

    @Query("select a from Article a " +
            "join a.user u " +
            "where a.category = 'COMPANY' and u.company.id = :companyId and a.title like %:title% or a.content like %:content% " +
            "order by a.id desc")
    Page<Article> searchCompanyArticleByTitleAndContent(@Param("title") String title, @Param("content") String content, @Param("companyId") Long companyId, Pageable pageable);
}
