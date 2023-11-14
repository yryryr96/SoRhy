import styled, { css } from "styled-components";

const StyledSignupMain = styled.div`
    display: flex;
    /* position: absolute; */
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding: 4% 0;
    width: 100vw;
    height: 100vh;
`;

const StyledSignupFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    height: 88%;
    padding: 1% 2%;
    border: 1px solid lightgray;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    gap: 20px;
`;

const StyledSignupForm = styled.form`
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width : 100%;
    height : 95%;
    background-color: white;
    gap: 20px;
    
`

const StyledSignupFormButton = styled.button`

    color : #fff;
    font-size : 15px;
    border-radius : 10px;
    border : transparent;
    background-color: #318fff;
    width: 100%;
    height : 10%;
    margin-top:10px;
    cursor : pointer;
`
const StyledTextPtag = styled.p`
    margin-bottom: 5px;
`

const StyledTextContainer = styled.div`
    display:"flex";
    width:"100%"; 
    justify-content:"center";
`;
export {
    StyledSignupMain,
    StyledSignupFrame,
    StyledSignupFormButton,
    StyledSignupForm,
    StyledTextPtag,
    StyledTextContainer
}