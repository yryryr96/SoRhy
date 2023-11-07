import { useRouter } from "next/navigation"
import useUserStore from "@/stores/useUserStore"
import { useState, useEffect } from "react"
import axios from 'axios'

import { useCookies } from 'react-cookie'

interface User {
    nickname : String,
    password : String
}

export const useLoginHook = () => {
    const router = useRouter()
    const setUserInformation = useUserStore((state:any) => state.setUserInformation)
    const userInformation = useUserStore((state:any) => state.userInformation)
    const login = useUserStore((state:any) => state.login)
    
    const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"]);
    const [isRemember, setIsRemember] = useState(false);

    useEffect(() => {
        if (cookies.rememberUserId !== undefined) {
            handleUserId(cookies.rememberUserId);
            setIsRemember(true);
        }
    }, []);

    const handleOnChange = (e:any) => {
        setIsRemember(e.target.checked);
        if (!e.target.checked) {
            removeCookie("rememberUserId");
        }
    };


    const [user, setUser] = useState({
        nickname : "",
        password : ""
        
    })

    const [inputState, setInputState] = useState({
        nickname: 1,
        password: 1      
    })

    const handleUserId = (data:any) => {
        setUser({
            ...user,
            ["nickname"] : data 
        })
    }

    const handleChange = (e:any) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

        setInputState({
            ...inputState,
            [e.target.name] : 1
        })
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault()

        if (user.nickname === "") {
            setInputState({
                ...inputState,
                ["nickname"] : 0
            })
            alert('닉네임을 입력해주세요.')
            return
        } 
        
        else if (user.password === "") {
            setInputState({
                ...inputState,
                ["password"] : 0
            })
            alert('비밀번호를 입력해주세요')
            return
        } 

        else {
            try {
                const res = await axios({
                  method: 'post',
                  url: `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
                  data : {...user},
                  responseType: 'json',
                });
                console.log(res)
                console.log(res.data)
                localStorage.setItem("nickname", user.nickname)
                localStorage.setItem("password", user.password)
                localStorage.setItem("accessToken", res.data.result.token)
                
                login();
                
                if (isRemember) {
                  setCookie("rememberUserId", user.nickname, { path: '/' });
                }

      
                await router.push('/')
              } catch (err) {
                console.log(err);
              }
        }
    }
    return {handleChange, handleSubmit, handleUserId, handleOnChange, inputState, user, isRemember}
}
    