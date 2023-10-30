"use client";
import styled, { css } from "styled-components";
import { CardType } from "./Card2.type";

const StyledCard = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const bgcolor = props.theme.colors.white;
    const lightgray = props.theme.colors.lightgray;
    return css`
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: space-around;

      border-radius: 13px;
      border: 1px solid ${lightgray};
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

const StyledCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
`;
const StyledCardHeader = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.HangeulFontSemiBold;
    const black = props.theme.colors.black;
    const gray = props.theme.colors.gray;

    const small = props.theme.fontSizes.small;
    const xsmall = props.theme.fontSizes.xsmall;

    return css`
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-family: ${font};

      width: 100%;
      align-items: flex-start;

      .title-text {
        font-size: ${small};
        color: ${black};

        width: 240px;
        height: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .writer {
        font-size: ${xsmall};
        color: ${gray};
      }
    `;
  }};
`;

const StyledProbability = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.EnglishFontBold;
    const size = props.theme.fontSizes.medium;
    const purple = props.theme.colors.purple;

    return css`
      display: flex;
      align-items: center;
      gap: 13px;

      .text {
        font-family: ${font};
        font-size: ${size};
        color: ${purple};
      }
    `;
  }};
`;

const StyledRemainTime = styled.div.attrs<CardType>((props) => ({}))`
  ${(props) => {
    const black = props.theme.colors.black;
    const font1 = props.theme.fonts.EnglishFontBold;
    const font2 = props.theme.fonts.HangeulFontSemiBold;
    const xsmall = props.theme.fontSizes.xsmall;
    const medium = props.theme.fontSizes.medium;

    return css`
      display: flex;
      align-items: center;
      gap: 6px;
      /* width: 100%; */

      color: ${black};

      .time-text {
        display: flex;
        align-items: center;
        font-family: ${font1};
        font-size: ${medium};
      }
      .text {
        padding-left: 2px;
        font-family: ${font2};
        font-size: ${xsmall};
      }
    `;
  }};
`;

const StyledImg = styled.img.attrs<any>((props) => ({}))`
  ${(props) => {
    const purple = props.theme.colors.purple;

    return css`
      border: 2.5px dashed ${purple};
      border-radius: 100px;
      width: 130px;
    `;
  }};
`;

export { StyledCard, StyledCardLeft, StyledRemainTime, StyledImg, StyledProbability, StyledCardHeader };
