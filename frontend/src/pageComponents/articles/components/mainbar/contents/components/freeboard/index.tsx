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
import ArticleDetail from '../../../../../../article';

const FreeBoard = (props: any) => {
    const { category } = props;
    const path = props.selectbtn;
    const [freeBoard, setFreeBoard] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        articleReadGet(category)
            .then((res) => {
                setFreeBoard(res.result.articles);
                console.log(res.result.articles, '호');
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
            {freeBoard.length > 0 ? (
                <StyledContentContainer onClick={() => handleContentClick(freeBoard[0].articleId)}>
                    <StyledLeftContainer>
                        <Image src="/blueicon.svg" alt="blue-button" width={40} height={30} />
                        {freeBoard[0].articleId}
                    </StyledLeftContainer>
                    <StyledCenterContainer>
                        <StyledCenterHead>{freeBoard[0].title}</StyledCenterHead>
                        <StyledCenterTail>
                            {' '}
                            {freeBoard[0].createdAt} | 사진 | {freeBoard[0].nickname}
                        </StyledCenterTail>
                    </StyledCenterContainer>
                    <StyledRightContainer>
                        <Image src="/friends.jpg" width={100} height={100} alt="쌍둥바오" />
                    </StyledRightContainer>
                </StyledContentContainer>
            ) : (
                <div>Loading...</div>
            )}
        </StyledContentsBox>
    );
};

export default FreeBoard;
