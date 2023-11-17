import api from '../api';

const issueDataGet = async () => {
    try {
            const res = await api.get('/articles/issue', {
            });
            return res.data;
        
    } catch (err) {
        console.log("Error : ", err);
        throw err;
    }
};

export default issueDataGet;
