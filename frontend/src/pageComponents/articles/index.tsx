'use client';

import SideBar from './components/sidebar';
import MainBar from './components/mainbar';
import { StyledArticles } from './Articles.Styled';

const Articles = () => {
    return (
        <StyledArticles>
            <SideBar />
            <MainBar />
        </StyledArticles>
    );
};

export default Articles;
