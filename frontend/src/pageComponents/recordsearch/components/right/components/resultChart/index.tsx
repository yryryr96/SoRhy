import { Doughnut } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { StyledResultChartContainer, StyledWinPercentText, StyledResultContainer } from './GameResultChart.Styled';
import Image from 'next/image';
ChartJS.register(ArcElement, Tooltip, Legend);

const GameResultChart = (props: any) => {
    const { gameResult } = props;
    const [winCount, setWinCount] = useState<number>(0);
    const [winPercent, setWinpercent] = useState<number>(0);

    const data = {
        datasets: [
            {
                data: [winCount, 5 - winCount],
                backgroundColor: ['#358fda', '#ea4a50'],
                borderColor: ['#358fda', '#ea4a50'],
                borderWidth: 1,
                cutout: '70%',
            },
        ],
    };

    useEffect(() => {
        let count = 0;
        gameResult.map((result) => (result.winner === true ? count++ : null));
        setWinCount(count);
        setWinpercent((count / 5) * 100);
    }, []);

    return (
        <>
            <StyledResultChartContainer>
                <Doughnut data={data} />
                <StyledWinPercentText>{winPercent}%</StyledWinPercentText>
            </StyledResultChartContainer>
            <StyledResultContainer>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>최근 5경기 통계</div>
                <div style={{ fontSize: '19px' }}>
                    {winCount} 승 {5 - winCount} 패
                    <Image src="/cuteline.svg" width={30} height={30} alt="내 점수" style={{ borderRadius: '20px' }} />
                </div>
            </StyledResultContainer>
        </>
    );
};

export default GameResultChart;
