import styled, { css } from 'styled-components';

const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 38vw;
    height: 19vh;
    padding: 3% 3%;
    border: 1px solid lightgray;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    gap: 10%;
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30%;

    font-size: 21px;
    font-weight: bold;
    color: #318fff;
`;

const BottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 30%; // 100%
    height: 70%;
    gap: 2px;
`;

const ClickBox = styled.div.attrs<any>((props) => ({
    color: props.color || '#318fff',
}))`
    display: flex;
    align-items: center;
    padding: 0% 20% 0% 0%;
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.color};
    gap: 11px;
`;

const SelectBox = styled.select`
    width: 7vw;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const SearchInput = styled.input`
    width: 9vw;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const SearchButton = styled.button`
    width: 4vw;
    padding: 10px;
    background: #318fff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export { StyledSearchBar, TopContainer, BottomContainer, ClickBox, SelectBox, SearchInput, SearchButton };
