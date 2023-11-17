'use client';

import { StyledMainBar } from './Mainbar.Styled';
import Contents from './contents';
import SearchBar from './searchbar';

const MainBar = (props: any) => {
    const path = props.selectbtn;
    return (
        <StyledMainBar>
            <SearchBar />
            <Contents selectbtn={path} />
        </StyledMainBar>
    );
};

export default MainBar;
