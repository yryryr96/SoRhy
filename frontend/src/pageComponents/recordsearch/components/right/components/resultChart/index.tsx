import { Doughnut } from "react-chartjs-2";
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { StyledResultChartContainer, StyledWinPercentText } from "./GameResultChart.Styled";

ChartJS.register(ArcElement, Tooltip, Legend);

const GameResultChart = (props: any) => {

    const {gameResult} = props;
    const [winCount, setWinCount] = useState<number>(0);
    const [winPercent, setWinpercent] = useState<number>(0);
    
    const data = {    
        
        datasets: [
            {
                data: [winCount, 5-winCount],
                backgroundColor: ['#358fda', '#ea4a50'],
                borderColor: ['#358fda', '#ea4a50'],
                borderWidth: 1,
                cutout: '70%',
            },
        ],
    };

    useEffect(()=>{
        
        let count = 0;
        gameResult.map(result => result.winner === true ? count ++ : null);
        setWinCount(count);
        setWinpercent(count/5 * 100);
    },[])

    return (
        
        <StyledResultChartContainer>
            <Doughnut data={data}/>
            <StyledWinPercentText>{winPercent}%</StyledWinPercentText>
        </StyledResultChartContainer>
    );
}

export default GameResultChart;