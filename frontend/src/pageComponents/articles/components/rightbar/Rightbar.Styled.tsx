import styled, { css } from 'styled-components';

const StyledRightBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 68vh;
    border: 1px solid lightgray;
    padding: 2% 1.5%;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

const RightTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 8%;
    margin-left: 10px;
    margin-top: 9px;
    font-size: 21px;
    font-weight: bold;
    color: #318fff;
`;

const RightBottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding : 10px 0;
    width: 100%; // 100%
    height: 91%;
    gap: 2px;

`;

const StyledRightItem = styled.div.attrs<any>((props) => ({
    font_size: props.font_size || props.theme.fontSizes.small,
    font_weight: props.font_weight || 'normal',
    color: props.color || 'black',
}))`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 187px;
    height: 11%;
    /* border: 1px solid black; */
    font-size: ${(props) => props.font_size};
    font-weight: ${(props) => props.font_weight};
    color: ${(props) => (props.active ? '#318fff' : props.color === 'on' ? '#318fff' : 'black')};
    gap: 15px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
`;

export { StyledRightBar, RightTopContainer, RightBottomContainer, StyledRightItem };
