'use client';

import HR from '@/components/hr';
import Image from 'next/image';
import { StyledRightBar, RightTopContainer, RightBottomContainer, StyledRightItem } from './Rightbar.Styled';

const RightBar = () => {
    return (
        <StyledRightBar>
            <RightTopContainer>실시간 인기글</RightTopContainer>
            <HR />
            <RightBottomContainer>
                <StyledRightItem>
                    <Image src="/freedom.png" width={32} height={18} alt="자유" /> 나 이거 맞냐? 어렵다
                </StyledRightItem>
                <HR />
                <StyledRightItem>
                    <Image src="/company.png" width={32} height={18} alt="자유" /> 나 이거 맞냐? 어렵다
                </StyledRightItem>
                <HR />
                <StyledRightItem>
                    <Image src="/Tips.png" width={32} height={18} alt="자유" /> 나 이거 맞냐? 어렵다
                </StyledRightItem>
                <HR />
                <StyledRightItem>
                    <Image src="/company.png" width={32} height={18} alt="자유" /> 나 이거 맞냐? 어렵다
                </StyledRightItem>
                <HR />
                <StyledRightItem>
                    <Image src="/freedom.png" width={32} height={18} alt="자유" /> 나 이거 맞냐? 어렵다 나 이거 맞냐?
                    어렵다 나 이거 맞냐? 어렵다
                </StyledRightItem>
                <HR />
                <StyledRightItem>
                    <Image src="/freedom.png" width={32} height={18} alt="자유" />나 이거 맞냐? 어렵다
                </StyledRightItem>
                <HR />
            </RightBottomContainer>
        </StyledRightBar>
    );
};

export default RightBar;
