'use client';

import React from 'react';
import { useState,useEffect } from 'react';
import issueDataGet from '@/api/article/issueDataGet';
import HR from '@/components/hr';
import Image from 'next/image';
import { StyledRightBar, RightTopContainer, RightBottomContainer, StyledRightItem } from './Rightbar.Styled';
import { useRouter } from 'next/navigation';

const RightBar = () => {
    const router = useRouter();
    const [issueData, setIssueData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const handleTitleClick = (articleId:number) => {
        router.push(`/article/${articleId}`);
    };

    useEffect(() => {
        issueDataGet()
            .then((res) => {
                setIssueData(res.result);
                setLoading(false); 
            })
            .catch((error) => {
                console.error('에러 발생:', error);
            });
    }, []);
    console.log("issudata",issueData)
    return (
        <StyledRightBar>
            <RightTopContainer>실시간 인기글</RightTopContainer>
            <HR />
            <RightBottomContainer>
            {issueData.slice(0, 7).map((item, index) => (
        <React.Fragment key={index}>
            <StyledRightItem onClick={()=>handleTitleClick(item.articleId)}>
                <Image src="/freedom.png" width={32} height={18} alt="자유" />
                {item.title}
            </StyledRightItem>
            <HR />
        </React.Fragment>
    ))}


            </RightBottomContainer>
        </StyledRightBar>
    );
};

export default RightBar;
