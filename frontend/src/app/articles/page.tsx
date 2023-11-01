import { Metadata } from 'next';
import Article from '@/pageComponents/articles';

export const metadata: Metadata = {
    title: '게시판',
};

export default function Articles() {
    return (
        <>
            <Article />
        </>
    );
}
