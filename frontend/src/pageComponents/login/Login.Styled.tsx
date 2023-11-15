import styled, { css } from 'styled-components';

const StyledLoginMain = styled.div`
    display: flex;
    /* position: absolute; */
    flex-direction: column;
    /* justify-content: center; */
    background-image: url('/background12.jpg');
    background-size: cover;
    align-items: center;
    padding: 7% 0;
    width: 100vw;
    height: 100vh;
`;

const StyledLoginFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    height: 85%;
    padding: 1% 2% 1% 2%;
    border: 1px solid lightgray;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    gap: 5px;
`;

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 90%;
    background-color: white;
    gap: 5px;
`;

const StyledLoginInnerForm = styled.div`
    display: flex;
    border: 1px solid black;
    background-color: white;
    width: 100%;
`;

const StyledLoginInnerFormInput = styled.input`
    border: 2px solid black;
    background-color: white;
    height: 25%;
    font-size: 20px;
    padding: 3%;
`;

const StyledLoginInputBox = styled.div`
    height: 60%;
`;

const StyledLoginFormButton = styled.button`
    color: #fff;
    font-size: 18px;
    border-radius: 10px;
    border: transparent;
    background-color: #318fff;
    width: 100%;
    height: 40px;
    cursor: pointer;
`;
const StyledSignupButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    border-radius: 10px;
    border: transparent;
    background-color: #87cefe;
    width: 100%;
    height: 40px;
    cursor: pointer;
`;
const StyledLoginButtonBox = styled.div.attrs<any>((props: any) => ({}))`
    ${(props: any) => {
        return css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            gap: 10px;

            /* margin-top:10px; */
        `;
    }}
`;

const StyledLoginTextContainer = styled.div`
    display: 'flex';
    width: 100%;
    justify-content: 'center';
    align-items: 'center';
`;

export {
    StyledLoginMain,
    StyledLoginFrame,
    StyledLoginInnerForm,
    StyledLoginForm,
    StyledLoginInnerFormInput,
    StyledLoginFormButton,
    StyledLoginButtonBox,
    StyledSignupButton,
    StyledLoginInputBox,
    StyledLoginTextContainer,
};
