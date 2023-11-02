'use client';

import {
    StyledContentsBox,
    StyledContentContainer,
    StyledLeftContainer,
    StyledCenterContainer,
    StyledRightContainer,
} from '../../Contents.Styled';

const CompanyBoard = (props: any) => {
    const path = props.selectbtn;

    return (
        <StyledContentsBox>
            <StyledContentContainer>
                <StyledLeftContainer>1</StyledLeftContainer>
                <StyledCenterContainer>2</StyledCenterContainer>
                <StyledRightContainer>3</StyledRightContainer>
            </StyledContentContainer>
        </StyledContentsBox>
    );
};

export default CompanyBoard;
