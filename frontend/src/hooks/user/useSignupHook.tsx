import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface SignupHookType {
    user: any;
    inputState: any;
    nickname?: string;
    password?: string;
    confirmPassword?: string;
    companyId?: number;
    handleChange: (e: any) => void;
    handleSubmit: (e: any) => void;
}

export const useSignupHook = (): SignupHookType => {
    const router = useRouter();
    const [user, setUser] = useState({
        nickname: '',
        password: '',
        confirmPassword: '',
        companyId: 0,
    });

    const [inputState, setInputState] = useState({
        nickname: '',
        password: '',
        confirmPassword: '',
        companyId: 0,
    });

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/; //최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
    const nicknameRegex = /^[a-z0-9]{5,20}$/; // 5글자 이상으로 설정

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if (name === 'companyId') {
            setUser({
                ...user,
                [name]: parseInt(value),
            });
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

        if (!nicknameRegex.test(user.nickname)) {
            setInputState({
                ...inputState,
                ['nickname']: '',
            });
            alert('닉네임을 입력해주세요.');
            return;
        } else if (!passwordRegex.test(user.password)) {
            setInputState({
                ...inputState,
                ['password']: '',
            });
            alert('비밀번호 형식을 맞춰주세요');
            return;
        } else if (user.confirmPassword === '') {
            setInputState({
                ...inputState,
                ['confirmPassword']: '',
            });
            alert('비밀번호를 한번 더 입력해주세요');
            return;
        } else if (user.password !== user.confirmPassword) {
            alert('비밀번호를 다시 확인해주세요');
            return;
        } else if (user.nickname === '') {
            setInputState({
                ...inputState,
                ['nickname']: '',
            });
            alert('닉네임을 입력해주세요');
            return;
        } else if (user.companyId === 0) {
            setInputState({
                ...inputState,
                ['companyId']: 0,
            });
            alert('회사 번호를 입력해주세요');
            return;
        } else {
            console.log(`${process.env.NEXT_PUBLIC_API_URL}`)
            axios({
                method: 'post',
                url: `${process.env.NEXT_PUBLIC_API_URL}/user/join`,
                data: { ...user },
            })
                .then((res) => {
                    console.log(res);
                    router.push('/');
                })
                .catch((err) => console.log(err));
            return;
        }
    };

    return { user, inputState, handleChange, handleSubmit };
};
