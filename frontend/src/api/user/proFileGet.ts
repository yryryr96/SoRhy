// 엑세스 토큰 정보 바탕으로 프로필 정보 return 받음

import api from "../api";

const profileGet = async (accessToken: any) => {
    const response = await api({
        method: "get",
        url: `/user/profile`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response;
};

export default profileGet;
