// 회원가입 정보 보내고 return 값으로 승인/비승인 여부 받음

import api from "../api";

const signupPost = async (user: any) => {
    try {
        const res = await api({
            method: "post",
            url: "/user/join",
            data: { ...user },
        });
        return res;
    } catch (err) {
        throw err;
    }
};

export default signupPost;
