'use client';

import Image from 'next/image';
import {
    StyledScoreHeader,
    StyledScoreBody,
    StyledLeftMidContainer,
    StyledMidBody,
    StyledMidHeader,
} from './LeftMid.Styled';

const LeftMid = (props: any) => {
    const { totalScore, rankPercent, personalRanking } = props;

    return (
        <StyledLeftMidContainer>
            <StyledMidHeader>
                <Image src="/scorestandard2.svg" width={35} height={35} alt="내 점수" />내 점수는?
            </StyledMidHeader>
            <StyledMidBody>
                <StyledScoreHeader>{totalScore}점</StyledScoreHeader>
                <StyledScoreBody>
                    상위 {rankPercent}% / {personalRanking}등
                </StyledScoreBody>
            </StyledMidBody>
        </StyledLeftMidContainer>
    );
};

export default LeftMid;
