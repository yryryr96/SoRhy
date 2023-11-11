'use client';

import { useState, useEffect } from 'react';
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
    const { nickname,company } = props;
    const [randomNumber, setRandomNumber] = useState<number>(1);
    const getRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 10) + 1;

        setRandomNumber(newRandomNumber);
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
                        width={120}
                        height={120}
                        alt={'캐릭터 초상화'}
                        style={{ borderRadius: '60px' }}
                    />
                </StyledPictureSide>
                <StyledTitleInfo>
                    <StyledTopTitle>{nickname}</StyledTopTitle>
                    <StyledBottomTitle>소속 : {company}</StyledBottomTitle>
                </StyledTitleInfo>
            </StyledTopContainer>
            <StyledBottomContainer>
                <StyledUpdateRecord>
                    <Button use="blue" label="전적 업데이트" style={{ width: '100%', borderRadius: '8px' }} />
                </StyledUpdateRecord>
                <StyledUpdateText>15분전 갱신됨</StyledUpdateText>
            </StyledBottomContainer>
        </StyledLeftTopContainer>
    );
};

export default LeftTop;
