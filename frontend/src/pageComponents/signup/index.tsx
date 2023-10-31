"use client";

import Input from "@/components/input";
import Button from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSignupHook } from "@/hooks/user/useSignupHook";

const Signup = () => {
    const { user, inputState, handleChange, handleSubmit } = useSignupHook();
    return (
        <div>
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>닉네임:</label>
                    <Input type="text" name="nickname" onChange={handleChange} inputstate={inputState.nickname} />
                </div>
                <div>
                    <label>비밀번호:</label>
                    <Input type="password" name="password" onChange={handleChange} inputstate={inputState.password} />
                </div>
                <div>
                    <label>비밀번호 확인:</label>
                    <Input
                        type="password"
                        name="password_sec"
                        onChange={handleChange}
                        inputstate={inputState.password_sec}
                    />
                </div>
                <div>
                    <label>회사 번호:</label>
                    <Input type="number" name="companyId" onChange={handleChange} inputstate={inputState.companyId} />
                </div>
                <Button use="SignUpLogin" label="회원가입" type="submit"></Button>
            </form>
        </div>
    );
};

export default Signup;
