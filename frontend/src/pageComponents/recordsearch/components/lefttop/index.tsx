'use client';
import React, { useState, useEffect } from 'react';
import {
    StyledUpdateRecord,
    StyledTopTitle,
    StyledBottomTitle,
    StyledBottomContainer,
    StyledTopContainer,
    StyledLeftTopContainer,
    StyledPictureSide,
    StyledTitleInfo,
    StyledUpdateText,
} from './LeftTop.Styled';
import Image from 'next/image';
import Button from '@/components/button';

const LeftTop = (props: any) => {
    const { nickname, company, win, lose } = props;
    const [randomNumber, setRandomNumber] = useState<number>(1);
    const getRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 10) + 1;

        setRandomNumber(newRandomNumber);
    };
    const handleRefreshClick = () => {
        window.location.reload();
    };
    useEffect(() => {
        getRandomNumber();
    }, []);

    return (
        <StyledLeftTopContainer>
            <StyledTopContainer>
                <StyledPictureSide>
                    <Image
                        src={`/chr${randomNumber}.png`}
                        width={180}
                        height={180}
                        alt={'캐릭터 초상화'}
                        style={{ borderRadius: '100px' }}
                    />
                </StyledPictureSide>
                <StyledTitleInfo>
                    <StyledTopTitle>{nickname}</StyledTopTitle>
                    <StyledBottomTitle>소속 : {company}</StyledBottomTitle>
                    <StyledBottomTitle>
                        통합 전적 : {win} 승 {lose} 패
                    </StyledBottomTitle>
                </StyledTitleInfo>
            </StyledTopContainer>
            <StyledBottomContainer>
                <StyledUpdateRecord>
                    <Button
                        use="blue"
                        label="전적 업데이트"
                        onClick={handleRefreshClick}
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                </StyledUpdateRecord>
                <StyledUpdateText>너무 잦은 업데이트는 No No!</StyledUpdateText>
            </StyledBottomContainer>
        </StyledLeftTopContainer>
    );
};

export default LeftTop;
