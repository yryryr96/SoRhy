'use client';

import { StyledInfoContainer, StyledInnerBody, StyledInnerHeader, StyledRankInfo } from '../../Ranking.Styled';
import { useState, useEffect } from 'react';
import GameRankGet from '@/api/rank/GameRankGet';
const Company = () => {
    const [CompanyDetail, setCompanyDetail] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        GameRankGet('company')
            .then((res) => {
                console.log(res.result);
                setCompanyDetail(res.result);
                setLoading(false);
            })
            .catch((error) => {
                console.error('에러 발생:', error);
            });
    }, []);
    console.log(CompanyDetail);
    return (
        <>
            <StyledInnerHeader>
                <StyledInfoContainer alignItems="center" width="15%">
                    순위
                </StyledInfoContainer>
                <StyledInfoContainer alignItems="center" width="35%">
                    회사명
                </StyledInfoContainer>
                <StyledInfoContainer alignItems="center" width="25%">
                    Total Point
                </StyledInfoContainer>
                <StyledInfoContainer alignItems="center" width="25%">
                    1위 유저
                </StyledInfoContainer>
            </StyledInnerHeader>
            <StyledInnerBody>
                {loading ? (
                    <div>Loading...</div>
                ) : CompanyDetail.length > 0 ? (
                    CompanyDetail.map((rank: any, index: number) => (
                        <StyledRankInfo key={index}>
                            <StyledInfoContainer width="15%">{index + 1}</StyledInfoContainer>
                            <StyledInfoContainer width="35%">{rank.companyName}</StyledInfoContainer>
                            <StyledInfoContainer width="25%">
                                {rank.companyScore.toLocaleString()}점
                            </StyledInfoContainer>
                            <StyledInfoContainer width="25%">{rank.companyFirstRankUser}</StyledInfoContainer>
                        </StyledRankInfo>
                    ))
                ) : (
                    <div></div>
                )}
            </StyledInnerBody>
        </>
    );
};

export default Company;
