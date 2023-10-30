"use client";
import React from "react";
import Image from "next/image";
import { MycardType } from "./Mycard.type";
import { StyledCard, StyledTag, StyledCardHeader, StyledBottomText, StyledImg } from "./Mycard.styled";
import { useMypageStore } from "@/stores/mypage/useMypageStore";

const Mycard = (props: MycardType) => {
  const images: { [key: string]: string } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };
  const imgsrc = images[props.giveaways];

  const typeName = props.type === "INSTANT_WIN" ? "즉시당첨" : "일  반";
  const selectbtn = useMypageStore((state) => state.selectbtn);

  const tmp = parseFloat(props.probability || "");
  const formattedProbability = tmp % 1 === 0 ? Math.round(tmp) + "%" : tmp.toFixed(1) + "%";

  const settingByBtn: any = {
    2: {
      imagePath: "/card/percent.png",
      text: "확률",
      value: formattedProbability,
    },
    3: {
      imagePath: "/card/smile.svg",
      text: "응답자수",
      value: props.headcount + "/" + props.closedheadcount,
    },
  };
  const { imagePath, text, value } = settingByBtn[selectbtn] || {};

  const [unit1, unit2] = props.remaintime ? props.remaintime.split(", ") : ["00분", "00초"];
  const [value1, label1] = unit1.split(":");
  const [value2, label2] = unit2.split(":");

  const newProps = { ...props, typename: typeName };
  return (
    <StyledCard {...newProps}>
      <StyledTag {...newProps}>
        {props.type === "NORMAL" ? (
          <Image src="/card/whatshot.svg" priority={true} width={11} height={11} alt="whatshot" />
        ) : (
          <Image src="/card/bolt.svg" priority={true} width={11} height={11} alt="abc" />
        )}
        <div className="type-text">{typeName}</div>
      </StyledTag>

      <StyledCardHeader {...newProps}>
        <div className="title-text">{props.title}</div>
        <div className="writer" style={{ margin: "0px 10px" }} {...props}>
          {props.writername}
        </div>
      </StyledCardHeader>

      <div style={{ width: "90px", height: "90px" }}>
        <StyledImg src={imgsrc} {...newProps} />
      </div>

      <StyledBottomText {...newProps}>
        <div className="time-text">
          <Image src="/card/yellowblackclock.svg" priority={true} width={22} height={22} alt="remaintime" />
          <div className="text">남은 시간</div>
        </div>
        <div style={{ width: "80px", display: "flex", justifyContent: "flex-end", gap: "5px" }}>
          <div>
            <span>{value1}</span>
            <span>{label1}</span>
          </div>
          <div>
            <span>{value2}</span>
            <span>{label2}</span>
          </div>
        </div>
      </StyledBottomText>

      <StyledBottomText {...newProps}>
        <div className="time-text">
          <Image src={imagePath} priority={true} width={22} height={22} alt="remaintime" />
          <div className="text">{text}</div>
        </div>
        {value}
      </StyledBottomText>
    </StyledCard>
  );
};

export default Mycard;
