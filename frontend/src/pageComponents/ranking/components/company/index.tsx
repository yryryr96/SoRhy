'use client';

import { StyledInnerBody, StyledInnerHeader, StyledRankInfo } from '../../Ranking.Styled';
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
    console.log(CompanyDetail)
    return (
        <>
            <StyledInnerHeader>
                <p>순위</p>
                <p>회사명</p>
                <p>Point</p>
                <p>1위 유저</p>
            </StyledInnerHeader>
            <StyledInnerBody>
                {loading ? (
                    <div>Loading...</div>
                ) : CompanyDetail.length > 0 ? (
                    CompanyDetail.map((rank: any, index: number) => (
                        <StyledRankInfo key={index}>
                            <p>{index + 1}</p>
                            <p>{rank.companyName}</p>
                            <p>{rank.companyScore}</p>
                            <p>{rank.companyFirstRankUser}</p>

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
