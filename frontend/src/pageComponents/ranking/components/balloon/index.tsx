'use client';

import React, { useState, useEffect } from 'react';
import {
    StyledEmptyText,
    StyledInfoContainer,
    StyledInnerBody,
    StyledInnerHeader,
    StyledRankInfo,
} from '../../Ranking.Styled';
import GameRankGet from '@/api/rank/GameRankGet';
import Image from 'next/image';

const Balloon = () => {
    const [BalloonDetail, setBalloonDetail] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        GameRankGet('BALLOON')
            .then((res) => {
                setBalloonDetail(res.result);
                setLoading(false);
            })
            .catch((error) => {
                console.error('에러 발생:', error);
            });
    }, []);
    return (
        <>
            <StyledInnerHeader>
                <StyledInfoContainer alignItems="center" width="10%">
                    순위
                </StyledInfoContainer>
                <StyledInfoContainer alignItems="center" width="30%">
                    유저 닉네임
                </StyledInfoContainer>
                <StyledInfoContainer alignItems="center" width="20%">
                    회사명
                </StyledInfoContainer>
                <StyledInfoContainer alignItems="center" width="15%">
                    Point
                </StyledInfoContainer>
                <StyledInfoContainer alignItems="center" width="25%">
                    모스트 캐릭터
                </StyledInfoContainer>
            </StyledInnerHeader>
            <StyledInnerBody>
                {loading ? (
                    <StyledEmptyText>Loading...</StyledEmptyText>
                ) : BalloonDetail.length > 0 ? (
                    BalloonDetail.map((rank: any, index: number) => (
                        <StyledRankInfo key={index}>
                            <StyledInfoContainer width="10%">{index + 1}</StyledInfoContainer>
                            <StyledInfoContainer width="30%">{rank.nickname}</StyledInfoContainer>
                            <StyledInfoContainer width="20%">{rank.company}</StyledInfoContainer>
                            <StyledInfoContainer width="15%">{rank.score}</StyledInfoContainer>
                            <StyledInfoContainer width="25%">
                                {rank.top3Characters.map((character, characterIndex) => (
                                    <React.Fragment key={characterIndex}>
                                        <Image
                                            src={`/chr${character.characterId}.png`}
                                            width={40}
                                            height={40}
                                            alt={`캐릭${characterIndex + 1}`}
                                            style={{ borderRadius: '20px' }}
                                        />
                                        {characterIndex < 2 && '   '}
                                    </React.Fragment>
                                ))}
                            </StyledInfoContainer>
                        </StyledRankInfo>
                    ))
                ) : (
                    <StyledEmptyText>랭킹 정보가 없습니다</StyledEmptyText>
                )}
            </StyledInnerBody>
        </>
    );
};

export default Balloon;
