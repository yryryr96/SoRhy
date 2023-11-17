'use client';

import {
    StyledContentsBox,
    StyledContentContainer,
    StyledLeftContainer,
    StyledCenterContainer,
    StyledRightContainer,
    StyledCenterHead,
    StyledCenterTail,
    StyledArticlePage,
    StyledArticleContent,
} from '../../Contents.Styled';
import Image from 'next/image';
import useUserStore from '@/stores/useUserStore';
import { useRouter } from 'next/navigation';
import { useArticleStore } from '@/stores/useArticleStore';
import { useState, useEffect } from 'react';
import articleReadGet from '@/api/article/articleReadGet';

const CompanyBoard = (props: any) => {
    const { category } = props;
    const path = props.selectbtn;
    const [userInformation] = useUserStore((state: any) => [state.userInformation]);
    const { setselectbtn } = useArticleStore();
    const isToken = userInformation.isAccessToken;
    const [companyBoard, setCompanyBoard] = useState<any>([]);
    const router = useRouter();

    const handlePageClick = async (pageNumber: number) => {
        try {
            const res = await articleReadGet(category, pageNumber - 1);
            setCompanyBoard(res.result);

            router.push(`/articles?category=${category}?page=${pageNumber - 1}`);
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    useEffect(() => {
        articleReadGet(category, 0)
            .then((res) => {
                setCompanyBoard(res.result);
            })
            .catch((error) => {
                console.error('에러 발생:', error);
            });
    }, []);
    const handleContentClick = (articleId: number) => {
        router.push(`/article/${articleId}`);
    };
    const redirectToLogin = () => {
        setselectbtn('1');
        router.push('/login');
    };
    return (
        <>
            {isToken ? (
                <StyledContentsBox>
                    {companyBoard.articles ? (
                        companyBoard.articles.map((article: any, index: any) => (
                            <StyledContentContainer key={index} onClick={() => handleContentClick(article.articleId)}>
                                <StyledLeftContainer>
                                    <Image src="/blueicon.svg" alt="blue-button" width={40} height={30} />
                                    {article.articleId}
                                </StyledLeftContainer>
                                <StyledCenterContainer>
                                    <StyledCenterHead>{article.title}</StyledCenterHead>
                                    <StyledCenterTail>
                                        {companyBoard.articles[index].nickname} |{' '}
                                        {companyBoard.articles[index].createdAt}
                                    </StyledCenterTail>
                                </StyledCenterContainer>
                                <StyledRightContainer>
                                    {article.imageUrl ? (
                                        <Image
                                            src={article.imageUrl}
                                            width={100}
                                            height={95}
                                            style={{ borderRadius: '10px', backgroundSize: 'cover' }}
                                            alt="썸네일"
                                        />
                                    ) : null}
                                </StyledRightContainer>
                            </StyledContentContainer>
                        ))
                    ) : (
                        <div>Loading..</div>
                    )}
                    <StyledArticlePage>
                        {Array.from({ length: companyBoard.totalPage }, (_, index) => index + 1).map((pageNumber) => (
                            <StyledArticleContent onClick={() => handlePageClick(pageNumber)} key={pageNumber}>
                                {pageNumber}
                            </StyledArticleContent>
                        ))}
                    </StyledArticlePage>
                </StyledContentsBox>
            ) : (
                redirectToLogin()
            )}
        </>
    );
};

export default CompanyBoard;
