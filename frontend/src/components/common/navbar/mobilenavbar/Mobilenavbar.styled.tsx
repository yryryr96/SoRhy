import styled, { css } from "styled-components";
import Link from "next/link";
const StyledMobileNavbar = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const yellow = props.theme.colors.yellow;

    return css`
      width: 100%;
      height: 56px;
      background-color: ${yellow};
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      z-index: 1;
      padding: 0px 35px;
    `;
  }};
`;

const StyledEndComp = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const size = props.pathname === "/makesurvey" || props.pathname === "/surveyresult" ? "10%" : "20%";
    return css`
      width: ${size};
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    `;
  }};
`;

const StyledNavLink = styled(Link)`
  padding: 0px 10px;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
`;

const StyleLogout = styled.div`
  padding: 0px 10px;
  font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
`;

export { StyledMobileNavbar, StyleLogout, StyledEndComp, StyledNavLink };
