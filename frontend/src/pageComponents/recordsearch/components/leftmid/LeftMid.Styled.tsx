import styled, { css } from 'styled-components';

const StyledLeftMidContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 25%;
    padding: 4% 4% 0 5%;
    border: 1px solid gray;
    border-radius: 20px;
`;

const StyledMidHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 25%;
    font-size: 20px;
    font-weight: bold;
    gap: 10px;
`;

const StyledMidBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 75%;
    gap: 10px;
`;

const StyledScoreHeader = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    width: 100%;
    height: 50%;
    font-size: 38px;
    font-weight: bold;

    color: #218fff;
`;

const StyledScoreBody = styled.div`
    display: flex;

    justify-content: center;
    width: 100%;
    height: 50%;
    font-size: 17px;
`;

export { StyledScoreHeader, StyledScoreBody, StyledLeftMidContainer, StyledMidBody, StyledMidHeader };
