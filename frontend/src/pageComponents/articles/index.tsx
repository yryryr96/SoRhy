'use client';

import SideBar from './components/sidebar';
import MainBar from './components/mainbar';
import RightBar from './components/rightbar';
import { StyledArticles } from './Articles.Styled';
import { useArticleStore } from '@/stores/useArticleStore';
useArticleStore;
const Articles = () => {
    const selectbtn = useArticleStore((state) => state.selectbtn);

    return (
        <StyledArticles>
            <SideBar selectbtn={selectbtn} />
            <MainBar selectbtn={selectbtn} />
            <RightBar />
        </StyledArticles>
    );
};

export default Articles;
