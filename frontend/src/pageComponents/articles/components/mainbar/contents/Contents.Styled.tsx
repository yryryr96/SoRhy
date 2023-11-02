import styled, { css } from 'styled-components';

const StyledContentsBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 68vh;
    padding: 2% 2%;
    border: 1px solid lightgray;
    border-radius: 20px;
    box-shadow: 1px 1px 2px 1px lightgray;
    gap: 5%;
    overflow: auto;
    /* &::-webkit-scrollbar {
        width: 8px;
        height: 8px;

        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    } */
`;

const StyledContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 26%;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 1px lightgray;
`;

const StyledLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15%;
    height: 100%;
    font-size: 21px;
    gap: 7%;
`;

const StyledCenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 67%;
    height: 100%;
    padding: 3.5% 2%;
`;

const StyledRightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 13%;
    height: 100%;
`;

const StyledCenterHead = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50%;
    font-size: 24px;
    font-weight: bold;
`;

const StyledCenterTail = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50%;
    font-size: 18px;
`;

export {
    StyledContentsBox,
    StyledContentContainer,
    StyledLeftContainer,
    StyledCenterContainer,
    StyledRightContainer,
    StyledCenterHead,
    StyledCenterTail,
};
