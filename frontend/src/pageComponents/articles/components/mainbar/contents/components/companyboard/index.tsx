'use client';

import {
    StyledContentsBox,
    StyledContentContainer,
    StyledLeftContainer,
    StyledCenterContainer,
    StyledRightContainer,
    StyledCenterHead,
    StyledCenterTail,
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
    const [companyBoard, setCompanyBoard] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        articleReadGet(category)
            .then((res) => {
                setCompanyBoard(res.result.articles);
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
                    {companyBoard.length > 0 ? companyBoard.map(article => (
                        <StyledContentContainer onClick={() => handleContentClick(article.articleId)}>
                            <StyledLeftContainer>
                                <Image src="/blueicon.svg" alt="blue-button" width={40} height={30} />
                                {article.articleId}
                            </StyledLeftContainer>
                            <StyledCenterContainer>
                                <StyledCenterHead>{companyBoard[0].title}</StyledCenterHead>
                                <StyledCenterTail>
                                    {article.createdAt} | 사진 | {article.nickname}
                                </StyledCenterTail>
                            </StyledCenterContainer>
                            <StyledRightContainer>
                                {article.imageUrl ? <Image src={article.imageUrl} width={100} height={95} style={{borderRadius:"10px", backgroundSize:"cover"}} alt="썸네일" /> : null}
                            </StyledRightContainer>
                        </StyledContentContainer>
                    )) : (
                        <div>Loading..</div>
                    )}
                </StyledContentsBox>
            ) : (
                redirectToLogin()
            )}
        </>
    );
};

export default CompanyBoard;
