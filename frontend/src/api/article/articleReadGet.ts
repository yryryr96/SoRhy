import api from '../api';

const articleReadGet = async (category: string) => {
    const accessToken = localStorage.getItem('accessToken');
    try {
        if (category !== 'COMPANY') {
            const res = await api.get(`/articles?category=` + category, {});
            return res.data;
        } else {
            const res = await api.get(`/articles?category=` + category, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            return res.data;
        }
    } catch (err) {
        console.log(err);
    }
};

export default articleReadGet;
