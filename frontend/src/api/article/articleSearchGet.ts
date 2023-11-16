import api from '../api';

const articleSearchGet = async (keywordData: any) => {
    const accessToken = localStorage.getItem('accessToken');
    console.log(keywordData, '키워드대ㅔ이터');
    const keyData = keywordData;
    console.log(keyData, '키데이트');
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
