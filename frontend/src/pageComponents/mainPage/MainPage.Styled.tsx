import styled, { css } from 'styled-components';

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('/background12.jpg');
    background-size: cover;
    width: 100vw;
    height: 100vh;
    gap: 10vh;
`;

const StyledMainSearchBox = styled.div.attrs<any>((props: any) => ({}))`
    ${(props: any) => {
        return css`
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10vh;
            width: 40vw;
            height: 10vh;
            border: 2px solid #0b4f8f;
            border-radius: 40px;
            background-color: white;
            gap: 2vw;
        `;
    }}
`;

export { StyledMain, StyledMainSearchBox };
