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
                    <Image src="/ranking.svg" width={50} height={50} alt="Ranking" />
                    Ranking
                </StyledRankingHeader>
                <StyledRankingTop>
                    <StyledRankingSelector onClick={() => handleItemClick('1')}>
                        <Image src="/house.svg" width={35} height={35} alt="house" />
                        House
                    </StyledRankingSelector>
                    <StyledRankingSelector onClick={() => handleItemClick('2')}>
                        <Image src="/balloon.svg" width={35} height={35} alt="balloon" />
                        Balloon
                    </StyledRankingSelector>
                    <StyledRankingSelector onClick={() => handleItemClick('3')}>
                        <Image src="/swim.svg" width={35} height={35} alt="swim" />
                        Swim
                    </StyledRankingSelector>
                    <StyledRankingSelector onClick={() => handleItemClick('4')}>
                        <Image src="/enterprise.svg" width={35} height={35} alt="enterprise" />
                        Company
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
