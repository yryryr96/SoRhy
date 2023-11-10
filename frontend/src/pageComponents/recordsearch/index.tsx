'use client';

import { StyledRecordMain, StyledRecordFrame, StyledLeftContainer, StyledRightContainer } from './RecordSearch.Styled';
import LeftBottom from './components/leftbottom';
import LeftTop from './components/lefttop';
import LeftMid from './components/leftmid';
import Right from './components/right';

const RecordSearch = (props: any) => {
    const { userId } = props;

    return (
        <>
            <StyledRecordMain>
                <StyledRecordFrame>
                    <StyledLeftContainer>
                        <LeftTop userId={userId} />
                        <LeftMid userId={userId} />
                        <LeftBottom userId={userId} />
                    </StyledLeftContainer>
                    <StyledRightContainer>
                        <Right userId={userId} />
                    </StyledRightContainer>
                </StyledRecordFrame>
            </StyledRecordMain>
        </>
    );
};

export default RecordSearch;
