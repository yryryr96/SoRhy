import styled, { css } from 'styled-components';

const StyledResultChartContainer = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
    height: 92%;
`;

const StyledResultContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 65%;
    height: 100%;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 0px;
`;

const StyledWinPercentText = styled.h3`
    position: absolute;
    left: 46.25%;
    top: 19.7%;
`;
export { StyledResultContainer, StyledResultChartContainer, StyledWinPercentText };
