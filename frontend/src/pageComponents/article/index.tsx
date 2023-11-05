'use client';

import { useEffect, useState } from 'react';
import articleDetailGet from '@/api/article/articleDetailGet';
import Image from 'next/image';

export interface ArticleDetail {
    articleId ?: number;
    nickname ?: string;
    title ?: string;
    imageUrl ?: any;
    createdAt ?: any;
}

const Article = (props: any) => {
    const { articleId } = props;
    const [articleDetail, setArticleDetail] = useState<ArticleDetail[]>([])
    useEffect(() => {
        articleDetailGet(articleId)
            .then(res => {
                setArticleDetail(res.result);
            })
            .catch(error => {
                console.error("에러 발생:", error);
            });
    }, [articleId]);
    console.log(articleDetail)
    return (
        <>
            {articleDetail ? <div>{articleDetail.articleId} | {articleDetail.title}</div>
            : <div>Loading...</div>}
        </>
        )
    }

export default Article;
