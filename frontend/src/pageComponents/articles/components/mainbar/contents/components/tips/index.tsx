'use client';

import { useEffect, useState } from 'react';
import articleReadGet from '@/api/article/articleReadGet';
import { useRouter } from 'next/navigation';
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

const Tips = (props: any) => {
    const { category } = props;
    const path = props.selectbtn;
    const [tipsBoard, setTipsBoard] = useState<any[]>([]);
    const router = useRouter();
    useEffect(() => {
        articleReadGet(category)
            .then((res) => {
                setTipsBoard(res.result.articles);
            })
            .catch((error) => {
                console.error('에러 발생:', error);
            });
    }, []);
    const handleContentClick = (articleId: number) => {
        router.push(`/article/${articleId}`);
    };
    return (
        <StyledContentsBox>
            {tipsBoard.length > 0 ? tipsBoard.map((article:any,index:any) => (
                <StyledContentContainer key={index} onClick={() => handleContentClick(article.articleId)}>
                    <StyledLeftContainer>
                        <Image src="/blueicon.svg" alt="blue-button" width={40} height={30} />
                        {article.articleId}
                    </StyledLeftContainer>
                    <StyledCenterContainer>
                        <StyledCenterHead>{article.title}</StyledCenterHead>
                        <StyledCenterTail>
                            {' '}
                            {tipsBoard[0].nickname} | {tipsBoard[0].createdAt}
                        </StyledCenterTail>
                    </StyledCenterContainer>
                    <StyledRightContainer>
                        {article.imageUrl ? <Image src={article.imageUrl} width={100} height={95} style={{borderRadius:"10px", backgroundSize:"cover"}} alt="썸네일" /> : null}
                    </StyledRightContainer>
                </StyledContentContainer>
            )) : (
                <div>Loading...</div>
            )}
        </StyledContentsBox>
    );
};

export default Tips;
