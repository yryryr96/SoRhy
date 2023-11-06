//article 작성 Post

import api from '../api';

const articleSavePost = async (articleDatas: any) => {
    try {
        const accessToken = localStorage.getItem('accessToken');
        // console.log(articleDatas, "알데",accessToken)
        const response = await api.post('/article', articleDatas, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error: ', error);

        throw error;
    }
};

export default articleSavePost;
