import styled, { css } from 'styled-components';

const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 25vh;
    padding: 3% 3%;
    border: 1px solid lightgray;
    border-radius: 20px;
    box-shadow: 1px 1px 2px 1px lightgray;
    gap: 10%;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 30%;

    font-size: 30px;
    font-weight: bold;
    color: #318fff;
`;

const BottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 30%; // 100%
    height: 70%;
    padding: 0% 2%;
    gap: 10%;
`;
export { StyledSearchBar, TopContainer, BottomContainer };
