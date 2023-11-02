import styled, { css } from 'styled-components';

const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 19vh;
    padding: 3% 3%;
    border: 1px solid lightgray;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    gap: 10%;
`;

const TopContainer = styled.div`
    display : flex;
    justify-content : space-between;
    width: 100%;
    height: 30%;

    font-size: 27px;
    font-weight: bold;
    color: gray;
`;

const BottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 30%; // 100%
    height: 70%;
    padding: 0% 2%;

`;

const ClickBox = styled.div.attrs<any>((props) => ({
    color : props.color ||  '#318fff'
}))`
    display : flex;
    align-items : center;
    padding : 0% 20% 0% 0%;
    font-size : 22px;
    font-weight : bold;
    color : ${(props) => props.color};
    gap : 15px;

`
export { StyledSearchBar, TopContainer, BottomContainer ,ClickBox };
