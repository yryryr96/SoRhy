"use client";
import React from "react";
import { StyledMidComp } from "../Navbar.styled";

const SurveyDetailComponent = (props: any) => {
  const pathname = props.pathname;
  return (
    <StyledMidComp pathname={pathname} />
  );
};

export default SurveyDetailComponent;