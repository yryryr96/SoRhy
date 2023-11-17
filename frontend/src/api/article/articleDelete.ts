// 글 삭제 Delete

import api from "../api";

const articleDelete = async (articleId: any) => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await api.delete("/article/" + articleId, {
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

export default articleDelete;
