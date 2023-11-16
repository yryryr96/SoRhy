// article 세부 조회 Get

import api from '../api';

const userSearchGet = async (userId: any, page: any = 0) => {
    try {
        const res = await api.get(`/user/${userId}?page=${page}`, {});
        console.log(res);
        return res.data;
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
};

export default userSearchGet;
