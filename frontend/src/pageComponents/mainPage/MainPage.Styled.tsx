import styled, { css } from 'styled-components';

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 70vh;
`;

const StyledMainSearchBox = styled.div.attrs<any>((props: any) => ({}))`
    ${(props: any) => {
        return css`
            display: flex;
            justify-content: center;
            align-items: center;

            width: 40vw;
            height: 10vh;
            border: 2px solid #0b4f8f;
            border-radius: 40px;
            gap: 2vw;
        `;
    }}
`;

export { StyledMain, StyledMainSearchBox };
