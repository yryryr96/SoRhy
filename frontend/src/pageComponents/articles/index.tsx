'use client';

import Contents from './components/contents';
import SearchBar from './components/searchbar';
import SideBar from './components/sidebar';
import { StyledArticles } from './Articles.Styled';

const Articles = () => {
    return (
        <StyledArticles>
            <SideBar />
            <Contents />
            <SearchBar />
        </StyledArticles>
    );
};

export default Articles;
