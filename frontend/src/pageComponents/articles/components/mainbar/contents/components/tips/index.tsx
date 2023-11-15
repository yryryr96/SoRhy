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
            {tipsBoard.length > 0 ? (
                <StyledContentContainer onClick={() => handleContentClick(tipsBoard[0].articleId)}>
                    <StyledLeftContainer>
                        <Image src="/blueicon.svg" alt="blue-button" width={40} height={30} />
                        {tipsBoard[0].articleId}
                    </StyledLeftContainer>
                    <StyledCenterContainer>
                        <StyledCenterHead>{tipsBoard[0].title}</StyledCenterHead>
                        <StyledCenterTail>
                            {' '}
                            {tipsBoard[0].createdAt} | 사진 | {tipsBoard[0].nickname}
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

export default Tips;
