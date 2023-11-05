import styled, { css } from 'styled-components';

const Container = styled.div`
    display: flex;
    position: relative;

    width: 100vw;
    height: 100vh;
`;

const StyledArticles = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100vw;
    height: 110vh; //추후 수정 필요 임의값
    background-image: url('/background7.jpg');
    background-size: cover;

    padding: 6vh 15vw;
    gap: 2vw;
    z-index: 1;
`;

export { StyledArticles, Container };
