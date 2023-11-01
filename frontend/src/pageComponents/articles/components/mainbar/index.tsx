'use client';

import { StyledMainBar } from './Mainbar.Styled';
import Contents from './contents';
import SearchBar from './searchbar';

const MainBar = () => {
    return (
        <StyledMainBar>
            <SearchBar />
            <Contents />
        </StyledMainBar>
    );
};

export default MainBar;
