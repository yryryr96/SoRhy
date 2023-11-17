import api from '../api';

const loginGet = async (accessToken: any) => {
    const response = await api({
        method: 'get',
        url: `/user/login`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response;
};

export default loginGet;
