import api from "../api";

const loginPost = async (user: any) => {
    const res = await api({
        method: "post",
        url: "/user/login",
        data: {
            ...user,
        },
    });
    if (res.data.success === true) {
        localStorage.setItem("nickname", user.nickname);
        localStorage.setItem("password", user.password);
        localStorage.setItem("accessToken", res.data.response.accessToken);
        localStorage.setItem("refreshToken", res.data.response.refreshToken);
    }
    return res;
};

export default loginPost;
