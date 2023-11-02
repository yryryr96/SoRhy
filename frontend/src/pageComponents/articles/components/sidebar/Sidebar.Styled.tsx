import styled, { css } from 'styled-components';

const StyledSideBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 26vw;
    height: 55vh;
    border: 1px solid lightgray;
    border-radius: 20px;
    box-shadow: 1px 1px 2px 1px lightgray;
    gap: -1%;
`;

const StyledSideItem = styled.div.attrs<any>((props) => ({
    font_size: props.font_size || props.theme.fontSizes.small,
    font_weight: props.font_weight || 'normal',
    color: props.color || 'black',
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15%;
    /* border: 1px solid black; */
    font-size: ${(props) => props.font_size};
    font-weight: ${(props) => props.font_weight};
    color: ${(props) => (props.active ? '#318fff' : props.color === 'on' ? '#318fff' : 'black')};
    gap: 40%;
    cursor: pointer;
`;

export { StyledSideBar, StyledSideItem };
