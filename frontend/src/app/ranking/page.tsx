import { Metadata } from 'next';
import Ranking from '@/pageComponents/ranking';

export const metadata: Metadata = {
    title: '랭킹 페이지',
};

export default function Rankings() {
    return (
        <>
            <Ranking />
        </>
    );
}
