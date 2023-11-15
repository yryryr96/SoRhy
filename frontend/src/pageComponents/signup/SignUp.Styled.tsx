import styled, { css } from 'styled-components';

const StyledSignupMain = styled.div`
    display: flex;
    /* position: absolute; */
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding: 4% 0;
    width: 100vw;
    height: 100vh;
    background-image: url('/background12.jpg');
    background-size: cover;
`;

const StyledSignupFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    height: 91%;
    padding: 1% 2%;
    border: 1px solid lightgray;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

const StyledSignupForm = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 95%;
    background-color: white;
    gap: 30px;
`;

const StyledSignupFormButton = styled.button`
    color: #fff;
    font-size: 18px;
    border-radius: 10px;
    border: transparent;
    background-color: #318fff;
    width: 100%;
    height: 10%;
    margin-top: 20px;
    cursor: pointer;
`;
const StyledTextPtag = styled.div`
    width: 100%;
    height: 50%;
`;

const StyledTextContainer = styled.div`
    display: 'flex';
    width: 100%;
    height: 5%;
    justify-content: 'center';
    margin-bottom: 15px;
`;

const StyledInputLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 15%;
`;
export {
    StyledInputLabelContainer,
    StyledSignupMain,
    StyledSignupFrame,
    StyledSignupFormButton,
    StyledSignupForm,
    StyledTextPtag,
    StyledTextContainer,
};
