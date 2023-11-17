// 닉네임 정보 기반으로 전적조회 Get

import api from "../api";

const recordCheckGet = async (id: any) => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await api.get("/user/" + id, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

export default recordCheckGet;
