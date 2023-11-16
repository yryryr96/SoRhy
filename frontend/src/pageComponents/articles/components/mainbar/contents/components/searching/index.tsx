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
import { useArticleStore } from '@/stores/useArticleStore';
import { useSearchBoardStore } from '@/stores/useSearchBoardStore';
import articleSearchGet from '@/api/article/articleSearchGet';
const Searching = () => {
    const { searchOption, setSearchOption, nowboard, setNowboard, searchKeyword, setSearchKeyword } = useSearchBoardStore();
    const { selectbtn, setselectbtn } = useArticleStore();
    const [searching, setSearching] = useState<any[]>([]);
    const router = useRouter();
    console.log("검색", searchOption);
    useEffect(() => {
        const datas = {
            searchCond: searchOption,
            word: searchKeyword,
            category: nowboard
        };
        articleSearchGet(datas)
            .then((res) => {
                setSearching(res.data.result.articles);
            })
            .catch((error) => {
                console.error('에러 발생:', error);
            });
    }, [searchOption]);
    
    const handleContentClick = (articleId: number) => {
        router.push(`/article/${articleId}`);
    };
    
    return (
        <StyledContentsBox>
            {searching.length > 0 ? (
                searching.map((article: any, index: any) => (
                    <StyledContentContainer key={index} onClick={() => handleContentClick(article.articleId)}>
                        <StyledLeftContainer>
                            <Image src="/blueicon.svg" alt="blue-button" width={40} height={30} />
                            {article.articleId}
                        </StyledLeftContainer>
                        <StyledCenterContainer>
                            <StyledCenterHead>{article.title}</StyledCenterHead>
                            <StyledCenterTail>
                                {' '}
                                {searching[0].nickname} | {searching[0].createdAt}
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
                <div>Loading...</div>
            )}
        </StyledContentsBox>
    );
};

export default Searching;
