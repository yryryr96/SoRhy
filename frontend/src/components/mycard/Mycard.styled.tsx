"use client";
import styled, { css } from "styled-components";
import { MycardType } from "./Mycard.type";
import moment from "moment";

const StyledCard = styled.div.attrs<MycardType>((props) => ({}))`
  ${(props) => {
    const white = props.theme.colors.white;
    const gray = props.theme.colors.lightgray;
    const bgcolor = props.closed ? gray : white;

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

const StyledTag = styled.div.attrs<MycardType>((props) => ({}))`
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

const StyledCardHeader = styled.div.attrs<MycardType>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.HangeulFontSemiBold;
    const black = props.theme.colors.black;
    const gray = props.theme.colors.gray;
    const small = props.theme.fontSizes.small;
    const xsmall = props.theme.fontSizes.xsmall;

    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6px;
      font-family: ${font};

      //
      width: 100%;
      text-align: center;

      .title-text {
        font-size: ${small};
        color: ${black};
        width: 150px;
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

const StyledBottomText = styled.div.attrs<MycardType>((props) => ({}))`
  ${(props) => {
    const black = props.theme.colors.black;
    const font = props.theme.fonts.HangeulFontSemiBold;
    const size = props.theme.fontSizes.xsmall;

    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      color: ${black};
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
    const yellow = props.theme.colors.yellow;
    const purple = props.theme.colors.purple;
    let color;
    if (props.type === "NORMAL") {
      color = purple;
    } else {
      color = yellow;
    }

    return css`
      border: 2.5px dashed ${color};
      border-radius: 48px;
      width: 90px;
    `;
  }};
`;

export { StyledCard, StyledTag, StyledCardHeader, StyledBottomText, StyledImg };
