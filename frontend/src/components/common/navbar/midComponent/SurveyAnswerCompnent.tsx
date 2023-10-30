"use client";
import React, { useEffect, useState } from "react";
import { StyledMidComp } from "../Navbar.styled";

const SurveyAnswerComponent = (props: any) => {
  const pathname = props.pathname;

  return (
    <StyledMidComp pathname={pathname}>        
    </StyledMidComp>
  );
};

export default SurveyAnswerComponent;