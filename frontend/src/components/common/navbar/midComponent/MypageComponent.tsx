"use client";
import React from "react";
import { StyledMidComp, StyledMypageNavBtn } from "../Navbar.styled";
import { useMypageStore } from "@/stores/mypage/useMypageStore";

const MypageComponent = (props: any) => {
  const pathname = props.pathname;
  const setselectbtn = useMypageStore((state) => state.setselectbtn);
  const selectbtn = useMypageStore((state) => state.selectbtn);

  return (
    <StyledMidComp pathname={pathname}>
      <StyledMypageNavBtn selectbtn={selectbtn} colorCode="1" onClick={() => setselectbtn("1")}>
        회원 정보 수정
      </StyledMypageNavBtn>
      <StyledMypageNavBtn selectbtn={selectbtn} colorCode="2" onClick={() => setselectbtn("2")}>
        응답한 설문
      </StyledMypageNavBtn>
      <StyledMypageNavBtn selectbtn={selectbtn} colorCode="3" onClick={() => setselectbtn("3")}>
        만든 설문
      </StyledMypageNavBtn>
      <StyledMypageNavBtn selectbtn={selectbtn} colorCode="4" onClick={() => setselectbtn("4")}>
        당첨된 상품
      </StyledMypageNavBtn>
    </StyledMidComp>
  );
};

export default MypageComponent;
