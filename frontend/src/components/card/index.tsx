"use client";
import React from "react";
import Image from "next/image";
import { CardType } from "./Card.type";
import { StyledCard, StyledTag, StyledCardHeader, StyledRemainTime, StyledImg, StyledProbability } from "./Card.styled";
import moment from "moment";

const CardComponent = (props: CardType) => {
  const images: { [key: string]: string } = {
    CHICKEN: "/card/chicken.png",
    COFFEE: "/card/coffee.png",
  };
  const imgsrc = images[props.giveaways];

  let typeName = "일반";
  if (props.type === "INSTANT_WIN") {
    typeName = "즉시당첨";
  } else if (props.type === "NORMAL") {
    const now = moment();
    const endTime = moment(props.endtime, "YYYY-MM-DD-HH-mm");
    const diffHours = endTime.diff(now, "hours");

    if (diffHours < 24) {
      typeName = "타임어택";
    }
  }
  const [unit1, unit2] = props.remaintime ? props.remaintime.split(', ') : ["00분", "00초"];
  const [value1, label1] = unit1.split(':');
  const [value2, label2] = unit2.split(':');

  const value = parseFloat(props.probability);

  let formattedProbability;
  if (value % 1 === 0) {
    formattedProbability = Math.round(value) + '%';
  } else if ((value * 10) % 10 === 0) {
    formattedProbability = Math.round(value) + '%';
  } else {
    formattedProbability = (Math.ceil(value * 10) / 10).toFixed(1) + '%';
  }



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
        <div className="titletext">{props.title}</div>
        <div className="writer" style={{ margin: "0px 10px" }} {...props}>
          {props.nickname}
        </div>
      </StyledCardHeader>

      <div style={{ width: "80px", height: "80px" }}>
        <StyledImg src={imgsrc} />
      </div>

      {props.contentype === "speedy" ? (
        <StyledProbability {...newProps}>{props.responsedtime}</StyledProbability>
      ) : (
        <StyledProbability {...newProps}>{formattedProbability}</StyledProbability>
      )}
      <StyledRemainTime {...newProps}>
        <div className="time-text">
          {props.type === "NORMAL" ? (
            typeName === "일반" ? (
              <Image src="/card/purpleblackclock.svg" priority={true} width={22} height={22} alt="remaintime" />
            ) : (
              <Image src="/card/purpleclock.svg" priority={true} width={22} height={22} alt="remaintime" />
            )
          ) : parseInt(props.probability, 10) <= 40 ? (
            <Image src="/card/yellowblackclock.svg" priority={true} width={22} height={22} alt="remaintime" />
          ) : (
            <Image src="/card/yellowclock.svg" priority={true} width={22} height={22} alt="remaintime" />
          )}

          <div className="text">남은 시간</div>
        </div>
        <div style={{ width: "80px", display: "flex", justifyContent: "flex-end", gap: "5px" }}>
          <div><span>{value1}</span><span>{label1}</span></div>
          <div><span>{value2}</span><span>{label2}</span></div>
        </div>
      </StyledRemainTime>
    </StyledCard>
  );
};

export default CardComponent;
