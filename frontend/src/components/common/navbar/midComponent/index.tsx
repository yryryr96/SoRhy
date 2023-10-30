"use client";
import React, { useEffect } from "react";
import DefaultComponent from "./DefaultComponent";
import SurveylistComponent from "./SurveylistComponent";
import MypageComponent from "./MypageComponent";
import SurveyDetailComponent from "./SurveyDetailComponent";
import MakesruveyComponent from "./MakesurveyComponent";
import SurveyAnswerComponent from "./SurveyAnswerCompnent";
import SurveyResultComponent from "./SurveyResultComponent";
import PaymentComponent from "./Payment";


const MidComponent = (props: any) => {
  const pathname = props.pathname;

  if (pathname === "/surveylist") {
    return <SurveylistComponent pathname={pathname} />;
  } else if (pathname === "/surveydetail") {
    return <SurveyDetailComponent pathname={pathname} />
  } else if (pathname === "/mypage") {
    return <MypageComponent pathname={pathname} />;
  } else if (pathname === "/makesurvey") {
    return <MakesruveyComponent pathname={pathname} />
  } else if (pathname === "/surveyresult") {
    return <SurveyResultComponent pathname={pathname} />
  } else if (pathname === "/payment") {
    return <PaymentComponent pathname={pathname} />
  }  
  else if (pathname.includes("/surveyAnswer")) {
    return 
  }
  return <DefaultComponent pathname={pathname} />;
};

export default MidComponent;
