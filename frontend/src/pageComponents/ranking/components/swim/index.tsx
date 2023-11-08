'use client';

import { StyledInnerBody, StyledInnerHeader, StyledRankInfo } from '../../Ranking.Styled';
import { useState, useEffect } from 'react';
import GameRankGet from '@/api/rank/GameRankGet';

const Swim = () => {
    const [SwimDetail, setSwimDetail] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        GameRankGet('SWIM')
            .then((res) => {
                setSwimDetail(res.result);
                setLoading(false);
            })
            .catch((error) => {
                console.error('에러 발생:', error);
            });
    }, []);
    return (
        <>
            <StyledInnerHeader>
                <p>순위</p>
                <p>유저 닉네임</p>
                <p>회사명</p>
                <p>Point</p>
                <p>모스트 캐릭터</p>
            </StyledInnerHeader>
            <StyledInnerBody>
                {loading ? (
                    <div>Loading...</div>
                ) : SwimDetail.length > 0 ? (
                    SwimDetail.map((rank: any, index: number) => (
                        <StyledRankInfo key={index}>
                            <p>{index + 1}</p>
                            <p>{rank.nickname}</p>
                            <p>{rank.company}</p>
                            <p>{rank.score}</p>
                            <p>미정이</p>
                        </StyledRankInfo>
                    ))
                ) : (
                    <div>댓글이 없습니다</div>
                )}
            </StyledInnerBody>
        </>
    );
};

export default Swim;
