'use client';
import { useRouter } from 'next/navigation';
import userSearchGet from '@/api/search/userSearchGet';
import {
    StyledPageContent,
    StyledPageContainer,
    StyledRightHeaderTop,
    StyledRightHeaderBottom,
    StyledVsContainer,
    StyledRecordBottomLeft,
    StyledRecordBottomRight,
    StyledRecordMainBottom,
    StyledRecordMainTop,
    StyledRecordVS,
    StyledRecordMain,
    StyledRecordColor,
    StyledRecord,
    StyledRightHeader,
    StyledRightBody,
    StyledTeamContainer,
    StyledChart,
} from './Right.Styled';
import Image from 'next/image';
import GameResultChart from './components/resultChart';
import { useState } from 'react';

const Right = (props: any) => {
    const { gameResult, nickname } = props;
    const [gameInfo, setGameInfo] = useState<any>(gameResult);
    const router = useRouter();

    const handlePageClick = async (pageNumber: number) => {
        try {
            const res = await userSearchGet(nickname, pageNumber - 1);
            setGameInfo(res.result.gameResults);

            router.push(`/recordsearch/${nickname}?page=${pageNumber - 1}`);
        } catch (error) {
            console.error('Error: ', error);
        }
    };
    return (
        <>
            <StyledRightHeader>
                <StyledRightHeaderTop>
                    <Image src="/history.svg" width={38} height={38} alt="전적 히스토리" />
                    전적 히스토리
                </StyledRightHeaderTop>
                <StyledRightHeaderBottom>
                    <GameResultChart gameResult={gameInfo.gameRecordInfo} />
                </StyledRightHeaderBottom>
            </StyledRightHeader>
            <StyledRightBody>
                {gameInfo.gameRecordInfo.map((game: any, index: number) => (
                    <StyledRecord key={index}>
                        <StyledRecordColor iswinner={game.winner} />
                        <StyledRecordMain>
                            <StyledRecordMainTop>
                                <p style={{ fontWeight: 'bold', color: game.winner ? '#218fff' : 'red' }}>
                                    {game.winner ? '승' : '패'}
                                </p>
                                <Image src="/spear.svg" width={10} height={10} alt="slash" />
                                {game.gameType === 'MULTI' ? '멀티' : '싱글'}
                                <Image src="/spear.svg" width={10} height={10} alt="slash" />
                                {game.gameTitle === 'SWIM'
                                    ? '수영 레이싱'
                                    : game.gameTitle === 'HOUSE'
                                    ? '내 집 마련'
                                    : '수박 깨기'}
                                <Image src="/spear.svg" width={10} height={10} alt="slash" />
                                {/* 어질어질 */}
                                <p>
                                    {(() => {
                                        const createdAt = new Date((game as any).createdAt);
                                        const now: Date = new Date();
                                        const timeDifference: number = (now as any) - (createdAt as any);
                                        const hoursDifference: number = Math.floor(timeDifference / (1000 * 60 * 60));
                                        const formattedDate: string = `${hoursDifference}시간 전`;

                                        return formattedDate;
                                    })()}
                                </p>
                            </StyledRecordMainTop>
                            <StyledRecordMainBottom>
                                <StyledRecordBottomLeft>
                                    <Image
                                        src={`/chr${game.characterId}.png`}
                                        width={65}
                                        height={65}
                                        alt="게임 내 초상화"
                                        style={{ borderRadius: '30px' }}
                                    />
                                </StyledRecordBottomLeft>
                                <StyledRecordBottomRight>
                                    <p style={{ color: '#218fff' }}>
                                        {game.score.toLocaleString()}점
                                        <Image
                                            src="/cuteline.svg"
                                            width={30}
                                            height={30}
                                            alt="내 점수"
                                            style={{ borderRadius: '20px' }}
                                        />
                                    </p>
                                    <p style={{ fontSize: '15px' }}>{game.characterId}번 캐릭터</p>
                                </StyledRecordBottomRight>
                            </StyledRecordMainBottom>
                        </StyledRecordMain>

                        <StyledRecordVS>
                            <StyledVsContainer>
                                {game.teamMember.map((team: any, index: any) => (
                                    <StyledTeamContainer key={index} style={{ gap: '7px' }}>
                                        <Image
                                            src={`/chr${team.characterId}.png`}
                                            width={20}
                                            height={20}
                                            alt="팀원 1"
                                            style={{ borderRadius: '20px' }}
                                        />
                                        {team.nickname}
                                    </StyledTeamContainer>
                                ))}
                            </StyledVsContainer>
                            <Image src="/versa.svg" width={35} height={35} alt="versa" />
                            <StyledVsContainer>
                                {game.enemy.length > 0 ? (
                                    game.enemy.map((user: any, index: any) => (
                                        <StyledTeamContainer key={index} style={{ gap: '7px' }}>
                                            <Image
                                                src={`/chr${user.characterId}.png`}
                                                width={20}
                                                height={20}
                                                alt="팀원 1"
                                                style={{ borderRadius: '20px' }}
                                            />
                                            {user.nickname}
                                        </StyledTeamContainer>
                                    ))
                                ) : (
                                    <StyledTeamContainer style={{ gap: '7px' }}>
                                        <Image
                                            src={`/chr${game.teamMember[0].characterId}.png`}
                                            width={20}
                                            height={20}
                                            alt="팀원 1"
                                            style={{ borderRadius: '20px' }}
                                        />
                                        {game.teamMember[0].nickname}
                                    </StyledTeamContainer>
                                )}
                            </StyledVsContainer>
                        </StyledRecordVS>
                    </StyledRecord>
                ))}
                <StyledPageContainer>
                    {Array.from({ length: gameInfo.totalPage }, (_, index) => index + 1).map((pageNumber) => (
                        <StyledPageContent onClick={() => handlePageClick(pageNumber)} key={pageNumber}>
                            {pageNumber}
                        </StyledPageContent>
                    ))}
                </StyledPageContainer>
            </StyledRightBody>
        </>
    );
};

export default Right;
