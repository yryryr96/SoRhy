'use client';
import { useState } from 'react';
import Input from '@/components/input';
import Button from '@/components/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSignupHook } from '@/hooks/user/useSignupHook';
import { SelectBox } from '../articles/components/mainbar/searchbar/Searchbar.Styled';
import {
    StyledLoginForm,
    StyledLoginFrame,
    StyledLoginInputBox,
    StyledLoginMain,
    StyledLoginTextContainer,
} from '../login/Login.Styled';
import {
    StyledInputLabelContainer,
    StyledSignupForm,
    StyledSignupFormButton,
    StyledSignupFrame,
    StyledSignupMain,
    StyledTextContainer,
    StyledTextPtag,
} from './SignUp.Styled';
import HR from '@/components/hr';

const Signup = () => {
    const { user, inputState, handleChange, handleSubmit } = useSignupHook();
    const [selectedCompany, setSelectedCompany] = useState('1');

    return (
        <StyledSignupMain>
            <StyledSignupFrame>
                <StyledSignupForm onSubmit={handleSubmit}>
                    <StyledTextContainer>
                        <h2 style={{ textAlign: 'center', color: '#218fff' }}>회원가입</h2>
                        <HR width="100%" leftmargin="0%" />
                    </StyledTextContainer>
                    <StyledInputLabelContainer>
                        <StyledTextPtag>닉네임</StyledTextPtag>
                        <StyledLoginInputBox>
                            <Input
                                type="text"
                                name="nickname"
                                onChange={handleChange}
                                inputstate={inputState.nickname}
                                width={25.5}
                                height={5}
                            />
                        </StyledLoginInputBox>
                    </StyledInputLabelContainer>
                    <StyledInputLabelContainer>
                        <StyledTextPtag>비밀번호</StyledTextPtag>
                        <StyledLoginInputBox>
                            <Input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                inputstate={inputState.password}
                                width={25.5}
                                height={5}
                            />
                        </StyledLoginInputBox>
                    </StyledInputLabelContainer>
                    <StyledInputLabelContainer>
                        <StyledTextPtag>비밀번호 확인</StyledTextPtag>
                        <StyledLoginInputBox>
                            <Input
                                type="password"
                                name="confirmPassword"
                                onChange={handleChange}
                                width={25.5}
                                height={5}
                            />
                        </StyledLoginInputBox>
                    </StyledInputLabelContainer>
                    <StyledInputLabelContainer>
                        <StyledTextPtag>회사</StyledTextPtag>
                        <SelectBox value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
                            <option value="1">직방</option>
                            <option value="2">삼성전자</option>
                            <option value="3">삼성전기</option>
                            <option value="4">삼성생명</option>
                            <option value="5">삼성화재</option>
                            <option value="6">싸피</option>
                        </SelectBox>
                    </StyledInputLabelContainer>

                    <StyledSignupFormButton type="submit">가입하기</StyledSignupFormButton>
                </StyledSignupForm>
            </StyledSignupFrame>
        </StyledSignupMain>
    );
};

export default Signup;
