import styled, { css } from 'styled-components';

const StyledLeftTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 30%;
`;

const StyledTopContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const StyledBottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 70%;

    margin-left: 40%;
    gap: 10px;
`;

const StyledPictureSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 100%;
`;

const StyledTitleInfo = styled.div`
    display: flex;
    flex-direction: column;

    width: 60%;
    height: 100%;
`;

const StyledTopTitle = styled.div`
    display: flex;

    align-items: center;
    width: 100%;
    height: 60%;

    font-size: 33px;
    font-weight: bold;
`;

const StyledBottomTitle = styled.div`
    display: flex;
    width: 100%;
    height: 40%;
    font-size: 19px;
    color: gray;
`;

const StyledUpdateRecord = styled.div`
    display: flex;
    width: 50%;
    height: 70%;
`;
const StyledUpdateText = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    height: 60%;
    font-size: 14px;
    color: gray;
`;

export {
    StyledUpdateText,
    StyledUpdateRecord,
    StyledTopTitle,
    StyledBottomTitle,
    StyledBottomContainer,
    StyledTopContainer,
    StyledLeftTopContainer,
    StyledPictureSide,
    StyledTitleInfo,
};
