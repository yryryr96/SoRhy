import styled, { css } from 'styled-components';

const ArticleContainer = styled.div`
    display: flex;
    position: relative;

    width: 100vw;
    height: 100vh;
`;

const StyledArticle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100vw;
    height: 100vh; //추후 수정 필요 임의값
    background-image: url('/background7.jpg');
    background-size: cover;

    padding: 6vh 6vw;
    z-index: 1;
`;

const StyledArticleContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 90vh;
    padding: 3% 3%;
    border: 1px solid lightgray;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    gap: 10%;
`;

const StyledArticleHeader = styled.div`
    display: flex;
    width: 100%;
    height: 20%;
    border: 1px solid black;
`;

const StyledArticleBody = styled.div`
    display: flex;
    width: 100%;
    height: 70%;
    border: 1px solid black;
`;

export { StyledArticle, ArticleContainer, StyledArticleContent, StyledArticleHeader, StyledArticleBody };
