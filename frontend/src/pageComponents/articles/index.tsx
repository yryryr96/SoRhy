'use client';

import SideBar from './components/sidebar';
import MainBar from './components/mainbar';
import RightBar from './components/rightbar';
import { Container, StyledArticles } from './Articles.Styled';
import { useArticleStore } from '@/stores/useArticleStore';
useArticleStore;
const Articles = () => {
    const selectbtn = useArticleStore((state) => state.selectbtn);

    return (
        <Container>
            <StyledArticles>
                <SideBar selectbtn={selectbtn} />
                <MainBar selectbtn={selectbtn} />
                <RightBar />
            </StyledArticles>
        </Container>
    );
};

export default Articles;
