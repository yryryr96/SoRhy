'use client';

import React, { useState, useEffect } from 'react';
import Input from '@/components/input';
import Button from '@/components/button';
import { useLoginHook } from '@/hooks/user/useLoginHook';
import { StyledLoginButtonBox, StyledLoginForm, StyledLoginFormButton, StyledLoginFrame, StyledLoginInputBox, StyledLoginMain, StyledLoginTextContainer, StyledSignupButton } from './Login.Styled';
import { useRouter } from 'next/navigation';
import { StyledTextContainer, StyledTextPtag } from '../signup/SignUp.Styled';
import HR from '@/components/hr';

const Login = () => {
    const router = useRouter();
    const { handleChange, handleSubmit, handleOnChange, inputState, user, isRemember } = useLoginHook();

    useEffect(() => {
        const checkbox = document.getElementById('LoginState') as HTMLInputElement;
        if (checkbox) {
            checkbox.checked = isRemember;
        }
    }, [isRemember]);

    const handleButtonClick = () => {
        router.push(`/signup/`);
    };

    return (
        <StyledLoginMain>
            <StyledLoginFrame>                
                <StyledLoginForm onSubmit={handleSubmit}>
                    <StyledTextContainer>
                        <h2 style={{textAlign:"center"}}>로그인</h2>
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
                    <StyledLoginButtonBox>
                        <StyledLoginFormButton type="submit">로그인</StyledLoginFormButton>
                        <StyledSignupButton onClick={handleButtonClick}>회원가입</StyledSignupButton>
                    </StyledLoginButtonBox>
                </StyledLoginForm>
            </StyledLoginFrame>
        </StyledLoginMain>
    );
};

export default Login;
