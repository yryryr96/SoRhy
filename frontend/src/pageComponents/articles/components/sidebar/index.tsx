'use client';

import { StyledSideBar, StyledSideItem } from './Sidebar.Styled';
import HR from '@/components/hr';
import Image from 'next/image';
import { useArticleStore } from '@/stores/useArticleStore';
const SideBar = (props: any) => {
    const path = props.selectbtn;
    const { selectbtn, setselectbtn } = useArticleStore();
    const handleItemClick = (newPath: string) => {
        setselectbtn(newPath);
    };

    return (
        <StyledSideBar>
            <StyledSideItem font_size="21px" font_weight="bold" color="on">
                게시판
                <Image src="/rightarrow.svg" priority={true} width={20} height={15} alt="오른쪽 화살표" />
            </StyledSideItem>
            <HR />
            <StyledSideItem onClick={() => handleItemClick('1')} active={path === '1'}>
                자유 게시판
            </StyledSideItem>
            <StyledSideItem onClick={() => handleItemClick('2')} active={path === '2'}>
                회사 게시판
            </StyledSideItem>
            <StyledSideItem font_size="21px" font_weight="bold" color="on">
                나머지
                <Image src="/rightarrow.svg" priority={true} width={20} height={15} alt="오른쪽 화살표" />
            </StyledSideItem>
            <HR />
            <StyledSideItem onClick={() => handleItemClick('3')} active={path === '3'}>
                Tips
            </StyledSideItem>
            <StyledSideItem onClick={() => handleItemClick('4')} active={path === '4'}>
                버그 신고
            </StyledSideItem>
        </StyledSideBar>
    );
};

export default SideBar;
