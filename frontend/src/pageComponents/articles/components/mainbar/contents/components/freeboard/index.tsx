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
    const path = props.selectbtn;
    const [freeBoard,setFreeBoard] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        articleReadGet()
            .then(res => {
                console.log(res,"후우")
                setFreeBoard(res.result.articles);
            })
            .catch(error => {
                console.error("에러 발생:", error);
            });
    }, []);
    const handleContentClick = (articleId: number) => {
        
        router.push(`/article/${articleId}`);
    };
    console.log(freeBoard[0],"야")
    return (
        <StyledContentsBox onClick={() => handleContentClick(freeBoard[0].articleId)}>
            {freeBoard.length > 0 ? (
                <StyledContentContainer>
                    <StyledLeftContainer>
                        <Image src="/blueicon.svg" alt="blue-button" width={40} height={30} />
                        {freeBoard[0].articleId}
                    </StyledLeftContainer>
                    <StyledCenterContainer>
                        <StyledCenterHead>{freeBoard[0].title}</StyledCenterHead>
                        <StyledCenterTail> {freeBoard[0].createdAt} | 사진 | {freeBoard[0].nickname}</StyledCenterTail>
                    </StyledCenterContainer>
                    <StyledRightContainer>
                        <Image src="/friends.jpg" width={100} height={100} alt="쌍둥바오" />
                    </StyledRightContainer>
                </StyledContentContainer>
              
        ) : (<div>Loading...</div>)}
           
        </StyledContentsBox>
        )
    }

export default FreeBoard;
