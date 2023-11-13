'use client';

import { StyledInnerBody, StyledInnerHeader, StyledRankInfo } from '../../Ranking.Styled';
import React, { useState, useEffect } from 'react';
import GameRankGet from '@/api/rank/GameRankGet';
import Image from 'next/image';
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
                            <p>
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
                            </p>
                        </StyledRankInfo>
                    ))
                ) : (
                    <div>                    <div></div>
                    </div>
                )}
            </StyledInnerBody>
        </>
    );
};

export default Swim;
