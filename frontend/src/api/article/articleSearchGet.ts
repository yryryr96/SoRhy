import api from '../api';

const articleSearchGet = async (keywordData: any) => {
    const accessToken = localStorage.getItem('accessToken');

    const keyData = keywordData;

    try {
        const res = await api.post(`/articles/search`, keyData, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};

export default articleSearchGet;
