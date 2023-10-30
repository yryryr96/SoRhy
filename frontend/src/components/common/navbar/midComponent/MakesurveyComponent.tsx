"use client";
import React from "react";
import { useState, useEffect } from "react";
import { StyledText, StyledMidComp, StyledTitleInput } from "../Navbar.styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import useSettingSurveyApiStore from "@/stores/makesurvey/useSettingSurveyApiStore";
import useMakeSurveyApiStore from "@/stores/makesurvey/useMakeSurveyApiStore";
import makeSurveyPost from "@/api/makesurvey/makeSurveyPost";
import useSurveyStore from "@/stores/makesurvey/useSurveyStore";
import usePriceStore from "@/stores/usePriceStore";
import useSurveyFocus from "@/stores/makesurvey/useSurveyFocusStore";
import Modal from "@/components/modal";


const MakesruveyComponent = (props: any) => {
    const pathname = props.pathname;
    const router = useRouter();
    const {resetSettingSurveyData} = useSettingSurveyApiStore();
    const {surveyList,setSurveyList,reset} = useMakeSurveyApiStore();
    const {surveyComponents,resetSurveyComponents} = useSurveyStore();
    const {price,decrement} = usePriceStore();
    const {resetSelectedSurvey} = useSurveyFocus();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState("");

    const {
      title,
      setTitle,
      content,
      closedHeadCount,
      startTime,
      endTime,
      type,
      surveyTarget,
      img,
    } = useSettingSurveyApiStore();


  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleCreateButtonClick = () => {

    decrement(price);

      const surveyData = {
        title,
        content,
        closedHeadCount,
        startTime,
        endTime,
        type,
        surveyTarget,
        img,
        questions: surveyComponents.map((component, index) => {
          const { componentKey, ...dataWithoutComponentKey } = surveyList[component.componentKey];
          return {
            ...dataWithoutComponentKey,
            questionNumber: index + 1 
            };
          })
        }

      const Inner_hasEmptyValue = surveyData.questions.some((questionData: any, questionIndex: number) => {
        if (questionData.title === "" || questionData.type === "") {
            setModalText(`질문 ${questionIndex + 1}의 모든 필드를 채워주시기 바랍니다.`);
            setModalVisible(true);
            return true;
        }
 
        if (questionData.multipleChoices) {
            const emptyChoiceIndex = questionData.multipleChoices.findIndex((choice: any) => choice.content === "");
            if (emptyChoiceIndex !== -1) {
                setModalText(`질문 ${questionIndex + 1}의 선택지 ${emptyChoiceIndex + 1}의 내용을 채워주시기 바랍니다.`);
                setModalVisible(true);
                return true;
            }     
            if (questionData.multipleChoices.length <= 1) {
                setModalText(`질문 ${questionIndex + 1}의 선택지 개수는 2개 이상이어야 합니다.`);
                setModalVisible(true);
                return true;
            }
            }
            return false;
        });

        const Outer_hasEmptyValue =
            surveyData.title === "" ? (() => { setModalText("설문 제목을 입력해주세요"); return true; })() :
            surveyData.content === "" ? (() => { setModalText("설문 부가 설명을 입력해주세요."); return true; })() :
            surveyData.closedHeadCount === 0 ? (() => { setModalText("설문 인원을 입력해주세요."); return true; })() :
            surveyData.endTime === 0 ? (() => { setModalText("종료 시간을 선택해주세요."); return true; })() :
            surveyData.startTime === 0 ? (() => { setModalText("시작 시간을 선택해주세요."); return true; })() :
            (surveyData.surveyTarget === undefined || surveyData.surveyTarget.length === 0) ? (() => { setModalText("설문 대상을 선택해주세요."); return true; })() :
            surveyData.type === "" ? (() => { setModalText("설문 유형을 선택해주세요."); return true; })() :
            surveyData.startTime === "" ? (() => { setModalText("설문 시작 시간을 선택해주세요."); return true; })() :
            surveyData.endTime === "" ? (() => { setModalText("설문 마감 시간을 선택해주세요."); return true; })() : 
            surveyComponents.length === 0 ? (() => { setModalText("설문 문항은 최소 1개 이상 존재해야 합니다."); return true; })() : false;

        if (Inner_hasEmptyValue || Outer_hasEmptyValue) {
            setModalVisible(true);

        } else {
            router.push(`/payment`);
              }
          };
          const handleResetButtonClick = () => {
            resetSettingSurveyData(); 
            resetSurveyComponents();
            reset();
            resetSelectedSurvey();
          };

  return (
    <StyledMidComp pathname={pathname}>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px",maxWidth : "600px"}} >
                <StyledTitleInput onChange={handleTitleChange} value={title} style={{minWidth : "600px",maxWidth : "600px"}}></StyledTitleInput>
                <StyledText>
                    <Image src='/survey/check.png' width={12} height={12} style={{ marginRight: "10px" }} alt="체크" />
                    모든 변경사항이 반영되었습니다.
                </StyledText>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ width: "93px", height: "35px" }}>
                    <Button use="gray" label="초기화" onClick={handleResetButtonClick} />
                </div>
                <div style={{ width: "93px", height: "35px" }}>
                    <Button use="longYellow" label="생성하기" onClick={handleCreateButtonClick} />
                </div>
            </div>
            {modalVisible && (    
                <Modal isOpen={modalVisible} bigtext={modalText} confirm="확인" cancel="취소" onConfirmClick={() => setModalVisible(false)} onClose={() => setModalVisible(false)} />
            )}
        </StyledMidComp>
    );
};

export default MakesruveyComponent;