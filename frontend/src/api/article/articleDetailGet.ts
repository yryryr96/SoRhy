// article 세부 조회 Get

import api from '../api';

const articleDetailGet = async (articleId: any, page: any=0) => {
    try {
            const res = await api.get(`/article/${articleId}?page=${page}`, {});
        return res.data;
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
};

export default articleDetailGet;
