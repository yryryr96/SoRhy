import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface SignupHookType {
    user: any;
    inputState: any;
    nickname?: string;
    password?: string;
    password_sec?: string;
    companyId?: number;
    handleChange: (e: any) => void;
    handleSubmit: (e: any) => void;
}

export const useSignupHook = (): SignupHookType => {
    const router = useRouter();
    const [user, setUser] = useState({
        nickname: "",
        password: "",
        companyId: 0,
    });

    const [password_sec, setPassword_sec] = useState("");
    const [inputState, setInputState] = useState({
        nickname: "",
        password: "",
        password_sec: "",
        companyId: 0,
    });

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/; //최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        if (name === "password_sec") {
            setPassword_sec(value);
        } else {
            setUser({
                ...user,
                [name]: value,
            });
        }

        setInputState({
            ...inputState,
            [name]: 1,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (user.nickname === "") {
            setInputState({
                ...inputState,
                ["nickname"]: "",
            });
            alert("닉네임을 입력해주세요.");
            return;
        } else if (!passwordRegex.test(user.password)) {
            setInputState({
                ...inputState,
                ["password"]: "",
            });
            alert("비밀번호 형식을 맞춰주세요");
            return;
        } else if (password_sec === "") {
            setInputState({
                ...inputState,
                ["password_sec"]: "",
            });
            alert("비밀번호를 한번 더 입력해주세요");
            return;
        } else if (user.password !== password_sec) {
            alert("비밀번호를 다시 확인해주세요");
            return;
        } else if (user.nickname === "") {
            setInputState({
                ...inputState,
                ["nickname"]: "",
            });
            alert("닉네임을 입력해주세요");
            return;
        } else if (user.companyId === 0) {
            setInputState({
                ...inputState,
                ["companyId"]: 0,
            });
            alert("회사 번호를 입력해주세요");
            return;
        } else {
            console.log({ ...user });
            axios({
                method: "post",
                url: `${process.env.NEXT_PUBLIC_API_URL}/user/join`,
                data: { ...user },
            })
                .then((res) => {
                    console.log(res);
                    router.push("/");
                })
                .catch((err) => console.log(err));
            return;
        }
    };

    return { user, inputState, handleChange, handleSubmit };
};
