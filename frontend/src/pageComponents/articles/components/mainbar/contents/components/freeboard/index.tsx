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

const FreeBoard = (props: any) => {
    const { category } = props;
    const path = props.selectbtn;
    const [freeBoard, setFreeBoard] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        articleReadGet(category)
            .then((res) => {
                setFreeBoard(res.result.articles);
            })
            .catch((error) => {
                console.error('에러 발생:', error);
            });
    }, []);
    const handleContentClick = (articleId: number) => {
        router.push(`/article/${articleId}`);
    };
    console.log(freeBoard)
    return (
        <StyledContentsBox>
            {freeBoard.length > 0 ? freeBoard.map(article => (
                <StyledContentContainer onClick={() => handleContentClick(article.articleId)}>
                    <StyledLeftContainer>
                        <Image src="/blueicon.svg" alt="blue-button" width={40} height={30} />
                        {article.articleId}
                    </StyledLeftContainer>
                    <StyledCenterContainer>
                        <StyledCenterHead>{article.title}</StyledCenterHead>
                        <StyledCenterTail>
                            {article.createdAt} | 사진 | {article.nickname}
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

export default FreeBoard;
