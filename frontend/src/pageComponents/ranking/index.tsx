'use client';

import { useRankStore } from '@/stores/useRankStore';
import {
    StyledRankingMain,
    StyledRankingFrame,
    StyledRankingHeader,
    StyledRankingTop,
    StyledRankingSelector,
    StyledRankingBody,
    StyledInnerHeader,
    StyledInnerBody,
    StyledRankInfo,
} from './Ranking.Styled';
import Image from 'next/image';
import Balloon from './components/balloon';
import House from './components/house';
import Swim from './components/swim';
import Company from './components/company';

const Ranking = () => {
    const { selectedbtn, setselectedbtn } = useRankStore();
    const handleItemClick = (newPath: string) => {
        setselectedbtn(newPath);
    };
    return (
        <StyledRankingMain>
            <StyledRankingFrame>
                <StyledRankingHeader>
                    <Image src="/trophy.svg" width={50} height={50} alt="Ranking" />
                    Ranking
                </StyledRankingHeader>
                <StyledRankingTop>
                    <StyledRankingSelector onClick={() => handleItemClick('1')}>
                        <Image src="/house.svg" width={35} height={35} alt="house" />내 집 마련
                    </StyledRankingSelector>
                    <StyledRankingSelector onClick={() => handleItemClick('2')}>
                        <Image src="/watermelon.svg" width={35} height={35} alt="balloon" />
                        수박 부시기
                    </StyledRankingSelector>
                    <StyledRankingSelector onClick={() => handleItemClick('3')}>
                        <Image src="/swim.svg" width={35} height={35} alt="swim" />
                        수영 레이싱
                    </StyledRankingSelector>
                    <StyledRankingSelector onClick={() => handleItemClick('4')}>
                        <Image src="/enterprise.svg" width={35} height={35} alt="enterprise" />
                        회사 랭킹
                    </StyledRankingSelector>
                </StyledRankingTop>
                <StyledRankingBody>
                    {selectedbtn === '1' && <House />}
                    {selectedbtn === '2' && <Balloon />}
                    {selectedbtn === '3' && <Swim />}
                    {selectedbtn === '4' && <Company />}
                </StyledRankingBody>
            </StyledRankingFrame>
        </StyledRankingMain>
    );
};

export default Ranking;
