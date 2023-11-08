import api from '../api';

const GameRankGet = async (game: string) => {
    try {
        const res = await api.get('/rank/' + game, {});
        return res.data;
    } catch (err) {
        console.log('Error : ', err);
        throw err;
    }
};

export default GameRankGet;
