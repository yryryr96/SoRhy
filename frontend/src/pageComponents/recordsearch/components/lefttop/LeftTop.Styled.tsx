import styled, { css } from 'styled-components';

const StyledLeftTopContainer = styled.div`
    display: flex;
    padding: 7% 0 0 1%;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 55%;
`;

const StyledTopContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    gap: 10px;
`;

const StyledBottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 5% 7%;
    gap: 10px;
`;

const StyledPictureSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
`;

const StyledTitleInfo = styled.div`
    display: flex;
    flex-direction: column;

    width: 60%;
    height: 90%;
`;

const StyledTopTitle = styled.div`
    display: flex;

    align-items: center;
    width: 100%;
    height: 65%;

    font-size: 33px;
    font-weight: bold;
`;

const StyledBottomTitle = styled.div`
    display: flex;
    width: 100%;
    height: 30%;
    font-size: 19px;
    color: gray;
`;

const StyledUpdateRecord = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 20px;
`;
const StyledUpdateText = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 30%;
    font-size: 17px;
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
