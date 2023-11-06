'use client';

import { useEffect, useState } from 'react';
import articleDetailGet from '@/api/article/articleDetailGet';
import {
    StyledArticle,
    ArticleContainer,
    StyledArticleContent,
    StyledArticleHeader,
    StyledArticleBody,
} from './Article.Styled';
import Image from 'next/image';
import Button from '@/components/button';
import Input from '@/components/input';

export interface ArticleDetail {
    articleId?: number;
    nickname?: string;
    title?: string;
    imageUrl?: any;
    createdAt?: any;
}

const Article = (props: any) => {
    const { articleId } = props;
    const [articleDetail, setArticleDetail] = useState<ArticleDetail[]>([]);
    useEffect(() => {
        articleDetailGet(articleId)
            .then((res) => {
                setArticleDetail(res.result);
            })
            .catch((error) => {
                console.error('에러 발생:', error);
            });
    }, [articleId]);
    console.log(articleDetail);
    return (
        <ArticleContainer>
            <StyledArticle>
                <StyledArticleContent>
                    {articleDetail ? (
                        <>
                            <StyledArticleHeader>z</StyledArticleHeader>
                            <StyledArticleBody></StyledArticleBody>
                        </>
                    ) : (
                        <div>Loading...</div>
                    )}
                </StyledArticleContent>
            </StyledArticle>
        </ArticleContainer>
    );
};

export default Article;
