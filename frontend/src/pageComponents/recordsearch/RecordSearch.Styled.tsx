import styled, { css } from 'styled-components';

const StyledRecordMain = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 140vh;
    background-image: url('/background22.jpg');
    background-size: cover;
`;

const StyledRecordFrame = styled.div`
    display: flex;
    flex-direction: row;
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

const StyledLeftContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    width: 40%;
    height: 100%;
    border: 1px solid black;
    gap: 6%;
`;

const StyledRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    border: 1px solid black;
    gap: 6%;
`;

export { StyledRecordMain, StyledRecordFrame, StyledLeftContainer, StyledRightContainer };
