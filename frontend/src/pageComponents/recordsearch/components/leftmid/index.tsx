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
    const { userId } = props;

    return (
        <StyledLeftMidContainer>
            <StyledMidHeader>
                <Image src="/chr1.png" width={30} height={30} alt="내 점수" />내 점수는?
            </StyledMidHeader>
            <StyledMidBody>
                <StyledScoreHeader>2555점</StyledScoreHeader>
                <StyledScoreBody>상위 1.4% / 1333등</StyledScoreBody>
            </StyledMidBody>
        </StyledLeftMidContainer>
    );
};

export default LeftMid;
