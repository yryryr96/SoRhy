'use client';

import React, { useState, useEffect } from 'react';
import Input from '@/components/input';
import Button from '@/components/button';
import { useLoginHook } from '@/hooks/user/useLoginHook';

const Login = () => {
    const { handleChange, handleSubmit, handleOnChange, inputState, user, isRemember } = useLoginHook();

    useEffect(() => {
        const checkbox = document.getElementById('LoginState') as HTMLInputElement;
        if (checkbox) {
            checkbox.checked = isRemember;
        }
    }, [isRemember]);

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>닉네임:</label>
                    <Input type="text" name="nickname" onChange={handleChange} inputstate={inputState.nickname} />
                </div>
                <div>
                    <label>비밀번호:</label>
                    <Input type="password" name="password" onChange={handleChange} inputstate={inputState.password} />
                </div>
                <Button use="SignUpLogin" label="로그인" type="submit"></Button>
            </form>
        </div>
    );
};

export default Login;
