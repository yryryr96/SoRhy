import styled, { css } from 'styled-components';

const ArticleContainer = styled.div`
    display: flex;
    position: relative;

    width: 100vw;
    height: 140vh;
    background-image: url('/background7.jpg');
    background-size: cover;
`;

const StyledArticle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100vw;
    height: 140vh; //추후 수정 필요 임의값

    padding: 2vh 2vw;
    z-index: 1;
    gap: 6%;
`;

const StyledRightContent = styled.div`
    display: flex;
    width: 35vh;
    height: 90%;
`;

const StyledArticleContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 130vh;
    padding: 2% 3%;
    border: 1px solid lightgray;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    gap: 25px;
`;

const StyledArticleHeader = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #218fff;
    width: 100%;
    height: 6%;
    font-size: 28px;
    font-weight: bold;
    color: #218fff;
`;

const StyledArticleTop = styled.div`
    display: flex;
    border-bottom: 1px solid lightgray;
    width: 100%;
    height: 6%;
    font-size: 30px;
    /* padding: 0% 5%; */
`;

const StyledArticleBody = styled.div`
    display: flex;
    width: 100%;
    height: 60vh;
    padding: 3% 3%;
    border: 1px solid lightgray;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    gap: 10px;
`;

const StyledArticleComment = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    width: 100%;
    height: 30%;
    padding: 2% 2%;
    gap: 20px;
`;

const StyledCommentHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    border-bottom: 1px solid gray;
    padding: 1% 0;
    gap: 20px;
    font-size: 21px;
    color: #218fff;
    font-weight: bold;
`;

const StyledCommentBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60vh;

    gap: 14%;
    font-size: 18px;
`;

const StyledComment = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 15%;
    font-size: 16px;
`;

const StyledCommentTop = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 35%;
    gap: 10px;
    font-size: 21px;
    color: #218fff;
    font-weight: bold;
`;

export {
    StyledComment,
    StyledCommentBody,
    StyledCommentTop,
    StyledCommentHeader,
    StyledArticleComment,
    StyledArticleTop,
    StyledArticle,
    ArticleContainer,
    StyledArticleContent,
    StyledArticleHeader,
    StyledArticleBody,
    StyledRightContent,
};
