//article 전체 조회 Get

import api from "../api";

const articleReadGet = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
        const res = await api.get(`/articles`, {
        });
        return res.data;
    } catch (err) {
        console.log(err)
    }
};

export default articleReadGet;
