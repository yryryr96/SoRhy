'use client';

import { useState, useEffect } from 'react';
import { StyledRecordMain, StyledRecordFrame, StyledLeftContainer, StyledRightContainer } from './RecordSearch.Styled';
import LeftBottom from './components/leftbottom';
import LeftTop from './components/lefttop';
import LeftMid from './components/leftmid';
import Right from './components/right';
import { loadBindings } from 'next/dist/build/swc';
import userSearchGet from '@/api/search/userSearchGet';

const RecordSearch = (props: any) => {
    const { userId } = props;
    const [userInfo, setUserInfo] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        userSearchGet(userId)
            .then((res) => {
                setUserInfo(res.result);
                setLoading(true);
            })
            .catch((error) => {
                console.error('에러가 발생하였습니다:', error);
            });
    }, []);
    console.log(userInfo);
    return (
        <>
            {loading ? (
                <StyledRecordMain>
                    <StyledRecordFrame>
                        <StyledLeftContainer>
                            <LeftTop nickname={userInfo.nickname} company={userInfo.companyName} />
                            <LeftMid
                                totalScore={userInfo.totalScore}
                                rankPercent={userInfo.rankPercent}
                                personalRanking={userInfo.personalRanking}
                            />
                            <LeftBottom top3Characters={userInfo.top3Characters} />
                        </StyledLeftContainer>
                        <StyledRightContainer>
                            <Right gameResult={userInfo.gameResults} />
                        </StyledRightContainer>
                    </StyledRecordFrame>
                </StyledRecordMain>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default RecordSearch;
