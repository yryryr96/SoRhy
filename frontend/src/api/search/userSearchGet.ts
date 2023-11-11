// article 세부 조회 Get

import api from "../api";

const userSearchGet = async (userId: any) => {
    try {
        const res = await api.get("/user/" + userId, {

        });
        console.log(res)
        return res.data;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

export default userSearchGet;
