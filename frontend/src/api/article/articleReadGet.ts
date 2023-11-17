import api from '../api';

const articleReadGet = async (category: string, pages: any) => {
    const accessToken = localStorage.getItem('accessToken');
    try {
        if (category !== 'COMPANY') {
            const res = await api.get(`/articles?category=${category}&page=${pages}`, {});

            return res.data;
        } else {
            const res = await api.get(`/articles?category=${category}&page=${pages}`, {
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
