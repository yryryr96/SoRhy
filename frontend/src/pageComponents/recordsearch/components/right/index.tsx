'use client';

import {
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
} from './Right.Styled';
import Image from 'next/image';

const Right = (props: any) => {
    const { gameResult } = props;

    console.log(gameResult.characterId)
    return (
        <>
            <StyledRightHeader>
                <StyledRightHeaderTop>
                    <Image src="/history.svg" width={38} height={38} alt="전적 히스토리" />
                    전적 히스토리
                </StyledRightHeaderTop>
                <StyledRightHeaderBottom></StyledRightHeaderBottom>
            </StyledRightHeader>
            <StyledRightBody>
            {gameResult.map((game : any , index : number) => (
                <StyledRecord key={index}>
                    <StyledRecordColor background="#218fff" />
                    <StyledRecordMain>
                        <StyledRecordMainTop>{game.winner} truefalse| | {game.gameType} | {game.gameTitle} | {game.createdAt}</StyledRecordMainTop>
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
                                    {game.score}점
                                    <Image
                                        src="/cuteline.svg"
                                        width={30}
                                        height={30}
                                        alt="내 점수"
                                        style={{ borderRadius: '20px' }}
                                    />
                                </p>
                                <p style={{ fontSize: '16px' }}>{game.characterId}번 캐릭터</p>
                            </StyledRecordBottomRight>
                        </StyledRecordMainBottom>
                    </StyledRecordMain>
                    
                    <StyledRecordVS>
                    {game.enteredUsers.map((user : any, index : any) => (
                        <div key={index} >
                        <StyledVsContainer >
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />
                                팀원1
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />
                                팀원1
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />
                                팀원1
                            </StyledTeamContainer>
                        </StyledVsContainer>
                        <Image src="/versa.svg" width={35} height={35} alt="versa" />
                        <StyledVsContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr6.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />
                                팀원2
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr7.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />
                                팀원3
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr8.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />
                                팀원4
                            </StyledTeamContainer>
                        </StyledVsContainer>
                        </div>
                        ))}
                    </StyledRecordVS>
                </StyledRecord>

                ))}
            </StyledRightBody>
        </>
    );
};

export default Right;
