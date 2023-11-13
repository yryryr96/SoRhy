import styled, { css } from 'styled-components';

const StyledRankingMain = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 140vh;
    background-image: url('/background21.jpg');
    background-size: cover;
`;

const StyledRankingFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    height: 90%;
    padding: 2% 2%;
    border: 1px solid lightgray;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    gap: 20px;
`;

const StyledRankingHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 9%;
    font-size: 36px;
    font-weight: bold;
    color: #218fff;
    border-bottom: 2px solid #218fff;
    gap: 1%;
`;

const StyledRankingTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 2%;
    width: 100%;
    height: 12%;

    gap: 3%;
`;

const StyledRankingSelector = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 8%;
    height: 68%;
    border: 1px solid #218fff;
    border-radius: 17px;
`;

const StyledRankingBody = styled.div`
    display: flex;
    flex-direction: column;

    width: 96%;
    height: 80%;
    padding: 0 2%;
    border: 1px solid #218fff;
    border-radius: 20px;
    gap: 3.5%;
`;

const StyledInnerHeader = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 10%;
    font-size: 20px;
    font-weight: bold;
    color: #218fff;
    border-bottom: 1px solid gray;
`;

const StyledInnerBody = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    gap: 4px;
`;

const StyledRankInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10%;
    font-size: 18px;
`;

const StyledInfoContainer = styled.div.attrs<any>({})`
    display: flex;
    justify-content: center;
    align-items: ${(props) => props.alignItems || 'flex-start'};
    width: ${(props) => props.width || '20%'};
    height: ${(props) => props.height || '100%'};
    gap: 18px;
`;

const StyledEmptyText = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: gray;
    font-size: 40px;
    font-weight: bold;
`;

export {
    StyledEmptyText,
    StyledInfoContainer,
    StyledRankingMain,
    StyledRankingFrame,
    StyledRankingHeader,
    StyledRankingTop,
    StyledRankingSelector,
    StyledRankingBody,
    StyledInnerHeader,
    StyledInnerBody,
    StyledRankInfo,
};
