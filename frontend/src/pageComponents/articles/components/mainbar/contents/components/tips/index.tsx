'use client';

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

const Tips = (props: any) => {
    const path = props.selectbtn;

    return (
        <StyledContentsBox>
            <StyledContentContainer>
                <StyledLeftContainer>
                    <Image src="/blueicon.svg" alt="blue-button" width={40} height={30} />
                    162
                </StyledLeftContainer>
                <StyledCenterContainer>
                    <StyledCenterHead>우리회사 개쩜</StyledCenterHead>
                    <StyledCenterTail>사내 | 시간 | 사진 | 닉네임</StyledCenterTail>
                </StyledCenterContainer>
                <StyledRightContainer>
                    <Image src="/friends.jpg" width={110} height={110} alt="쌍둥바오" />
                </StyledRightContainer>
            </StyledContentContainer>
            <StyledContentContainer>
                <StyledLeftContainer>
                    <Image src="/blueicon.svg" alt="blue-button" width={40} height={30} />
                    162
                </StyledLeftContainer>
                <StyledCenterContainer>
                    <StyledCenterHead>우리회사 개쩜</StyledCenterHead>
                    <StyledCenterTail>사내 | 시간 | 사진 | 닉네임</StyledCenterTail>
                </StyledCenterContainer>
                <StyledRightContainer>
                    <Image src="/friends.jpg" width={110} height={110} alt="쌍둥바오" />
                </StyledRightContainer>
            </StyledContentContainer>
            <StyledContentContainer>
                <StyledLeftContainer>
                    <Image src="/blueicon.svg" alt="blue-button" width={40} height={30} />
                    162
                </StyledLeftContainer>
                <StyledCenterContainer>
                    <StyledCenterHead>우리회사 개쩜</StyledCenterHead>
                    <StyledCenterTail>사내 | 시간 | 사진 | 닉네임</StyledCenterTail>
                </StyledCenterContainer>
                <StyledRightContainer>
                    <Image src="/friends.jpg" width={110} height={110} alt="쌍둥바오" />
                </StyledRightContainer>
            </StyledContentContainer>
            <StyledContentContainer>
                <StyledLeftContainer>
                    <Image src="/blueicon.svg" alt="blue-button" width={40} height={30} />
                    162
                </StyledLeftContainer>
                <StyledCenterContainer>
                    <StyledCenterHead>우리회사 개쩜</StyledCenterHead>
                    <StyledCenterTail>사내 | 시간 | 사진 | 닉네임</StyledCenterTail>
                </StyledCenterContainer>
                <StyledRightContainer>
                    <Image src="/friends.jpg" width={110} height={110} alt="쌍둥바오" />
                </StyledRightContainer>
            </StyledContentContainer>
        </StyledContentsBox>
    );
};

export default Tips;
