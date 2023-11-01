'use client';
import React from 'react';
import { StyledMidComp, StyledNavLink } from '../Navbar.styled';

const DefaultComponent = (props: any) => {
    const pathname = props.pathname;

    return (
        <StyledMidComp pathname={pathname}>
            <StyledNavLink href="/surveylist">전적검색</StyledNavLink>
            <StyledNavLink href="/makesurvey">랭킹보기</StyledNavLink>
        </StyledMidComp>
    );
};

export default DefaultComponent;
