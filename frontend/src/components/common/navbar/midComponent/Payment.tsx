"use client";
import React from "react";
import { StyledMidComp } from "../Navbar.styled";

const PaymentComponent = (props: any) => {
  const pathname = props.pathname;
  return (
    <StyledMidComp pathname={pathname} />
  );
};

export default PaymentComponent;