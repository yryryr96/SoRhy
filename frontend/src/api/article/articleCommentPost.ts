// 댓글 작성 post

import api from "../api";

const articleCommentPost = async (articleId: any, commentDatas: any) => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await api.post(`article/${articleId}/comment`, commentDatas, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data.response;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

export default articleCommentPost;
