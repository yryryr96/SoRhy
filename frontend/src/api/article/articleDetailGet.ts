// article 세부 조회 Get

import api from '../api';

const articleDetailGet = async (articleId: any) => {
    try {
        const res = await api.get('/article/' + articleId, {});
        return res.data;
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
};

export default articleDetailGet;
