import styled, { css } from "styled-components";
import { ButtonStyles } from "./Button.type";
const StyledButton = styled.button.attrs<ButtonStyles>((props) => ({}))`
  ${(props) => {
    const gender = props.checkgender || null;
    const name = props.name || null;
    const age = props.checkage || null;
    const id = props.id || null;
    const use = props.use || "basic";

    const font = props.theme.fonts.HangeulFontSemiBold;
    const lightgray = props.theme.colors.lightgray;
    const gray = props.theme.colors.gray;
    const medium = props.theme.fontSizes.medium;
    const small = props.theme.fontSizes.small;
    const black = props.theme.colors.black;
    const white = props.theme.colors.white;
    const yellow = props.theme.colors.yellow;
    const blue = '#318fff'
    const useStyle: any = {
      basic: `
                border-radius: 48px;
                background-color : ${lightgray};
                color: ${white};
            `,
      SignUpLogin: `
                border-radius: 48px;
                background-color: ${yellow};
                color : ${black};
                font-size:${small};
            `,
      gender: `
                background-color: ${gender === name ? yellow : lightgray};
                color : ${black};
            `,
      blackwhite: `
                border-radius: 48px;
                background-color: ${black};
                color : ${white};
                font-size:${medium};
            `,
      whiteblack: `
                border-radius: 48px;
                background-color: ${white};
                color : ${black};
                font-size:${medium};
            `,

      age: `
                background-color: ${age === id ? yellow : lightgray};
                color : ${black};
            `,
      gray: `
                border-radius: 48px;
                border: 1px solid ${lightgray};
                font-size:${small};
                background-color: ${white};
                color : ${black};
            `,
      blue : `
                border-radius: 48px;
                font-size:${small};
                background-color: ${blue};
                color : ${white};
            `,
      bggray : `
                border-radius: 48px;
                font-size:${small};
                background-color: ${lightgray};
                color : ${black};
      `,

      sortingYellow: `
                justify-content: space-evenly;
                border-radius: 10px;
                border: 1.216px solid rgba(214, 214, 214, 0.20);
                background: #FFFAAE;
                font-size:${small};
            `,
      sortingYellowClick: `
                justify-content: space-evenly;
                border-radius: 10px;
                border: 1.216px solid rgba(214, 214, 214, 0.20);
                background: #FFF129;
                font-size:${small};
            `,
      sortingPurple: `
                justify-content: space-evenly;
                border-radius: 10px;
                border: 1.216px solid rgba(214, 214, 214, 0.20);
                background: #D4C9FF;
                font-size:${small};
            `,
      sortingPurpleClick: `
                justify-content: space-evenly;
                border-radius: 10px;
                border: 1.216px solid rgba(214, 214, 214, 0.20);
                background: #8E69FF;
                font-size:${small};
            `,
      purple: `
                border-radius: 48px;
                background-color: ${props.theme.colors.purple};
                color : ${white};
                font-size:${small}
            `,
      longYellow: `
                border-radius: 48px;
                background-color: ${yellow};
                color : ${black};
                font-size:${small}
            `,
    };
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      border: hidden;
      width: 100%;
      height: 100%;
      cursor: pointer;
      font-family: ${font};
      ${useStyle[use]};
      &:active {
        margin-left: 3px;
        margin-top: 3px;
      }
    `;
  }}
`;

const StyledImage = styled.img`
  width: 25px;
`;
export { StyledButton, StyledImage };
