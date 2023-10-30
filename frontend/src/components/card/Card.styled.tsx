"use client";
import styled, { css } from "styled-components";
import { CardType } from "./Card.type";

const StyledCard = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    let bgcolor;
    const probability = parseInt(props.probability, 10);
    if (props.type === "NORMAL") {
      bgcolor = props.typename === "일반" ? props.theme.colors.white : props.theme.colors.purple;
    } else {
      bgcolor = probability <= 40 ? props.theme.colors.white : props.theme.colors.yellow;
    }

    return css`
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;

      border-radius: 16px;
      border: 1px solid #e4e7ec;
      background-color: ${bgcolor};

      padding: 30px;
      &:active {
        margin-top: 3px;
        margin-left: 3px;
      }
      cursor: pointer;
    `;
  }};
`;

const StyledTag = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const type = props.type;

    const lightpurple = "linear-gradient(0deg, rgba(168, 140, 255, 0.2) 0%, rgba(168, 140, 255, 0.2) 100%), #fff";
    const lightyellow = "linear-gradient(0deg, rgba(255, 241, 41, 0.30) 0%, rgba(255, 241, 41, 0.30) 100%), #FFF";
    const bgcolor = type === "NORMAL" ? lightpurple : lightyellow;

    const bcolor = type === "NORMAL" ? "rgba(168, 140, 255, 0.10)" : "rgba(255, 241, 41, 0.20)";
    const color = type === "NORMAL" ? props.theme.colors.blue : props.theme.colors.orange;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const xsmall = props.theme.fontSizes.xsmall;
    return css`
      display: flex;
      padding: 4px 6px 4px 4px;
      align-items: center;
      gap: 1.5px;
      border-radius: 6px;
      border: 0.7px solid ${bcolor};
      background: ${bgcolor};

      .type-text {
        font-family: ${font};
        font-size: ${xsmall};
        color: ${color};
      }
    `;
  }};
`;

const StyledCardHeader = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.HangeulFontSemiBold;
    const black = props.theme.colors.black;
    const white = props.theme.colors.white;
    const small = props.theme.fontSizes.small;
    const xsmall = props.theme.fontSizes.xsmall;

    let color;
    if (props.type === "NORMAL") {
      color = props.typename === "일반" ? black : white;
    } else {
      color = black;
    }

    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6px;
      font-family: ${font};
      color: ${color};

      //
      width: 100%;
      text-align: center;

      .titletext {
        font-size: ${small};
        //
        width: 150px;
        height: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .writer {
        font-size: ${xsmall};
      }
    `;
  }};
`;

const StyledProbability = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.EnglishFontBold;
    const size = props.theme.fontSizes.large;
    const black = props.theme.colors.black;
    const white = props.theme.colors.white;
    const purple = props.theme.colors.purple;
    let color;
    const probability = parseInt(props.probability, 10);
    if (props.type === "NORMAL") {
      color = props.typename === "일반" ? purple : white;
    } else {
      color = black;
    }

    return css`
      color: ${color};
      text-align: right;
      font-family: ${font};
      font-size: ${size};
    `;
  }};
`;

const StyledRemainTime = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const black = props.theme.colors.black;
    const white = props.theme.colors.white;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const size = props.theme.fontSizes.xsmall;

    let color;
    if (props.type === "NORMAL") {
      color = props.typename === "일반" ? black : white;
    } else {
      color = black;
    }

    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      color: ${color};
      font-family: ${font};
      font-size: ${size};
      text-align: center;

      .time-text {
        display: flex;
        align-items: center;
      }
      .text {
        padding-left: 2px;
      }
    `;
  }};
`;

const StyledImg = styled.img.attrs<any>((props) => ({}))`
  ${(props) => {
    const black = props.theme.colors.black;
    const white = props.theme.colors.white;
    const purple = props.theme.colors.purple;
    let color;
    if (props.type === "NORMAL") {
      color = props.typename === "일반" ? purple : white;
    } else {
      color = black;
    }

    return css`
      border: 2.5px dashed ${color};
      border-radius: 48px;
      width: 80px;
    `;
  }};
`;

export { StyledCard, StyledTag, StyledRemainTime, StyledImg, StyledProbability, StyledCardHeader };
