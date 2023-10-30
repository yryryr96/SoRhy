"use client";
import React from "react";
import Image from "next/image";
import { CardType } from "./Card2.type";
import { StyledCard, StyledCardLeft, StyledCardHeader, StyledRemainTime, StyledImg, StyledProbability } from "./Card2.styled";

const Card2Component = (props: CardType) => {
  const images: { [key: string]: string } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };
  const imgsrc = images[props.giveaways];
  const [unit1, unit2] = props.remaintime ? props.remaintime.split(", ") : ["00분", "00초"];
  const [value1, label1] = unit1.split(":");
  const [value2, label2] = unit2.split(":");

  const value = parseFloat(props.probability);
  const formattedProbability = value % 1 === 0 ? Math.round(value) + "%" : value.toFixed(1) + "%";

  return (
    <StyledCard {...props}>
      <StyledCardLeft>
        <StyledCardHeader {...props}>
          <div className="title-text">{props.title}</div>
          <div className="writer" {...props}>
            {props.nickname}
          </div>
        </StyledCardHeader>

        <StyledRemainTime {...props}>
          <Image src="/card/yellowblackclock.svg" priority={true} width={30} height={30} alt="remaintime" />
          <div className="time-text">
            <div style={{ width: "110px", display: "flex", justifyContent: "space-between" }}>
              <div>
                <span>{value1}</span>
                <span>{label1}</span>
              </div>
              <div>
                <span>{value2}</span>
                <span>{label2}</span>
              </div>
            </div>
          </div>
          <div className="text">남음</div>
        </StyledRemainTime>

        <StyledProbability {...props}>
          <Image src="/card/percent.svg" priority={true} width={30} height={30} alt="remaintime" />
          <div className="text" {...props}>
            {formattedProbability}
          </div>
        </StyledProbability>
      </StyledCardLeft>

      <StyledImg src={imgsrc} />
    </StyledCard>
  );
};

export default Card2Component;
