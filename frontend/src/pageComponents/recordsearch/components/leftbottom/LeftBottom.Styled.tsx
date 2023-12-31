import styled, { css } from 'styled-components';

const StyledLeftBottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 30%;
    padding: 4% 5%;
    border: 1px solid gray;
    border-radius: 20px;
`;

const StyledBottomHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 25%;
    font-size: 19px;
    font-weight: bold;

    gap: 10px;
`;

const StyledBottomBody = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10% 5%;
    align-items: center;
    width: 100%;
    height: 75%;

    gap: 25px;
`;

const StyledCharContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 18px;
    font-weight: bold;
    gap: 10px;
`;

export { StyledCharContent, StyledLeftBottomContainer, StyledBottomHeader, StyledBottomBody };
