'use client';
import React from 'react';
import { StyledMidComp, StyledNavLink } from '../Navbar.styled';

const DefaultComponent = (props: any) => {
    const pathname = props.pathname;

    return (
        <StyledMidComp pathname={pathname}>
            {/* <StyledNavLink href="/recordsearch/:userid">전적검색</StyledNavLink> */}
            <StyledNavLink href="/ranking">랭킹보기</StyledNavLink>
            <StyledNavLink href="/articles">커뮤니티</StyledNavLink>
        </StyledMidComp>
    );
};

export default DefaultComponent;
