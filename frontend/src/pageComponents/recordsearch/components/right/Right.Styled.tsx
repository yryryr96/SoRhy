import styled, { css } from 'styled-components';

const StyledRightHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1% 0;
    width: 90%;
    height: 23.5%;
`;

const StyledRightHeaderTop = styled.div`
    display: flex;
    width: 100%;
    height: 30%;
    font-size: 32px;
    font-weight: bold;
    /* border: 1px solid lightgray; */
    /* color: #86bebe; */
    color: #218fff;
    gap: 15px;
`;
const StyledRightHeaderBottom = styled.div`
    display: flex;
    width: 100%;
    height: 70%;
    padding : 0 2.5%;
    border: 1px solid lightgray;
    border-radius: 20px;
`;

const StyledRightBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3% 3%;
    width: 90%;
    height: 90%;
    border: 1px solid gray;
    border-radius: 20px;
    gap: 10px;
`;

const StyledRecord = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 20%;
    border: 1px solid #bfbfbf;
    border-radius: 20px;
`;

const StyledRecordColor = styled.div.attrs<any>({})`
    display: flex;
    width: 4%;
    background-color: ${(props) => (props.iswinner ? '#218fff' : 'red')};

    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
`;

const StyledRecordMain = styled.div<any>`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    border-right: 1.5px dotted #218fff;
`;

const StyledRecordMainTop = styled.div<any>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30%;
    padding: 0% 5%;
    font-size: 15px;
    gap: 4px;
`;
const StyledRecordMainBottom = styled.div<any>`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70%;
`;

const StyledRecordBottomLeft = styled.div<any>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 100%;
`;

const StyledRecordBottomRight = styled.div<any>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    height: 100%;

    font-size: 20px;
    font-weight: bold;
    gap: 3px;
`;

const StyledRecordVS = styled.div<any>`
    display: flex;
    flex-direction: row;

    align-items: center;
    width: 46%;
    height: 100%;
    gap: 3px;
`;

const StyledVsContainer = styled.div<any>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    gap: 15px;
`;

const StyledTeamContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    width: 100%;
    height: 20%;
`;

export {
    StyledRightHeaderTop,
    StyledRightHeaderBottom,
    StyledTeamContainer,
    StyledVsContainer,
    StyledRecordBottomLeft,
    StyledRecordBottomRight,
    StyledRecordMainBottom,
    StyledRecordMainTop,
    StyledRecordVS,
    StyledRecordMain,
    StyledRecordColor,
    StyledRecord,
    StyledRightHeader,
    StyledRightBody,
};
