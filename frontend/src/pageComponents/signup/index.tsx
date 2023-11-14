'use client';

import Input from '@/components/input';
import Button from '@/components/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSignupHook } from '@/hooks/user/useSignupHook';
import { StyledLoginForm, StyledLoginFrame, StyledLoginInputBox, StyledLoginMain, StyledLoginTextContainer } from '../login/Login.Styled';
import { StyledSignupForm, StyledSignupFormButton, StyledSignupFrame, StyledSignupMain, StyledTextContainer, StyledTextPtag } from './SignUp.Styled';
import HR from '@/components/hr';

const Signup = () => {
    const { user, inputState, handleChange, handleSubmit } = useSignupHook();
    return (
        <StyledSignupMain>
            <StyledSignupFrame>
                <StyledSignupForm onSubmit={handleSubmit}>
                    <StyledTextContainer>
                        <h2 style={{textAlign:"center"}}>회원가입</h2>
                        <HR />
                    </StyledTextContainer>                    
                    <div>
                    <StyledTextPtag>닉네임</StyledTextPtag>
                    <StyledLoginInputBox>
                        <Input type="text" name="nickname" onChange={handleChange} inputstate={inputState.nickname} width={25.5} height={5}/>
                    </StyledLoginInputBox>
                    </div>

                    <div>
                    <StyledTextPtag>비밀번호</StyledTextPtag>
                    <StyledLoginInputBox>
                        <Input type="password" name="password" onChange={handleChange} inputstate={inputState.password} width={25.5} height={5}/>
                    </StyledLoginInputBox>
                    </div>

                    <div>
                    <StyledTextPtag>비밀번호 확인</StyledTextPtag>
                    <StyledLoginInputBox>
                        <Input
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                            inputstate={inputState.confirmPassword}
                            width={25.5} 
                            height={5}
                        />
                    </StyledLoginInputBox>
                    </div>

                    <div>
                    <StyledTextPtag>회사</StyledTextPtag>
                        <Input style={{border:"1px solid black"}} type="number" name="companyId" onChange={handleChange} inputstate={inputState.companyId} />
                    </div>
                    <StyledSignupFormButton type="submit">회원가입</StyledSignupFormButton>
                </StyledSignupForm>
            </StyledSignupFrame>
        </StyledSignupMain>
    );
};

export default Signup;
