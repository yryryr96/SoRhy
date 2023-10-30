"use client";
import React from "react";
import { StyledMidComp, StyledNavLink } from "../Navbar.styled";

const DefaultComponent = (props: any) => {
  const pathname = props.pathname;

  return (
    <StyledMidComp pathname={pathname} >
      <StyledNavLink href="/surveylist">설문하기</StyledNavLink>
      <StyledNavLink href="/makesurvey">설문만들기</StyledNavLink>
    </StyledMidComp>
  );
};

export default DefaultComponent;
