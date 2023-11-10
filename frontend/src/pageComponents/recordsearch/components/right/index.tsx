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
    const { userId } = props;

    return (
        <>
            <StyledRightHeader>
                <StyledRightHeaderTop>
                    <Image src="/history.svg" width={38} height={38} alt="전적 히스토리" />
                    전적 히스토리
                </StyledRightHeaderTop>
                <StyledRightHeaderBottom>//여기 그래프랑 chart</StyledRightHeaderBottom>
            </StyledRightHeader>
            <StyledRightBody>
                <StyledRecord>
                    <StyledRecordColor background="#218fff" />
                    <StyledRecordMain>
                        <StyledRecordMainTop>승 | 풍선 터트리기 | 23:33 | 2일전</StyledRecordMainTop>
                        <StyledRecordMainBottom>
                            <StyledRecordBottomLeft>
                                <Image
                                    src="/chr3.png"
                                    width={65}
                                    height={65}
                                    alt="게임 내 초상화"
                                    style={{ borderRadius: '30px' }}
                                />
                            </StyledRecordBottomLeft>
                            <StyledRecordBottomRight>
                                <p style={{ color: '#218fff' }}>
                                    45 Point
                                    <Image
                                        src="/cuteline.svg"
                                        width={30}
                                        height={30}
                                        alt="팀원 1"
                                        style={{ borderRadius: '20px' }}
                                    />
                                </p>
                                <p style={{ fontSize: '16px' }}>강아지</p>
                            </StyledRecordBottomRight>
                        </StyledRecordMainBottom>
                    </StyledRecordMain>
                    <StyledRecordVS>
                        <StyledVsContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원1
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원1
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
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
                                />{' '}
                                팀원2
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr7.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원3
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr8.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원4
                            </StyledTeamContainer>
                        </StyledVsContainer>
                    </StyledRecordVS>
                </StyledRecord>
                <StyledRecord>
                    <StyledRecordColor background="red" />
                    <StyledRecordMain>
                        <StyledRecordMainTop>승 | 풍선 터트리기 | 23:33 | 2일전</StyledRecordMainTop>
                        <StyledRecordMainBottom>
                            <StyledRecordBottomLeft>
                                <Image
                                    src="/chr8.png"
                                    width={65}
                                    height={65}
                                    alt="게임 내 초상화"
                                    style={{ borderRadius: '30px' }}
                                />
                            </StyledRecordBottomLeft>
                            <StyledRecordBottomRight>
                                <p style={{ color: '#218fff' }}>
                                    45 Point
                                    <Image src="/cuteline.svg" width={30} height={30} alt="팀원 1" />
                                </p>
                                <p style={{ fontSize: '17px' }}>강아지</p>
                            </StyledRecordBottomRight>
                        </StyledRecordMainBottom>
                    </StyledRecordMain>
                    <StyledRecordVS>
                        <StyledVsContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원1
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원1
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
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
                                />{' '}
                                팀원2
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr7.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원3
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr8.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원4
                            </StyledTeamContainer>
                        </StyledVsContainer>
                    </StyledRecordVS>
                </StyledRecord>
                <StyledRecord>
                    <StyledRecordColor background="#218fff" />
                    <StyledRecordMain>
                        <StyledRecordMainTop>승 | 풍선 터트리기 | 23:33 | 2일전</StyledRecordMainTop>
                        <StyledRecordMainBottom>
                            <StyledRecordBottomLeft>
                                <Image
                                    src="/chr9.png"
                                    width={65}
                                    height={65}
                                    alt="게임 내 초상화"
                                    style={{ borderRadius: '30px' }}
                                />
                            </StyledRecordBottomLeft>
                            <StyledRecordBottomRight>
                                <p style={{ color: '#218fff' }}>
                                    45 Point
                                    <Image
                                        src="/cuteline.svg"
                                        width={30}
                                        height={30}
                                        alt="팀원 1"
                                        style={{ borderRadius: '20px' }}
                                    />
                                </p>
                                <p style={{ fontSize: '17px' }}>강아지</p>
                            </StyledRecordBottomRight>
                        </StyledRecordMainBottom>
                    </StyledRecordMain>
                    <StyledRecordVS>
                        <StyledVsContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원1
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원1
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
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
                                />{' '}
                                팀원2
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr7.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원3
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr8.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원4
                            </StyledTeamContainer>
                        </StyledVsContainer>
                    </StyledRecordVS>
                </StyledRecord>
                <StyledRecord>
                    <StyledRecordColor background="red" />
                    <StyledRecordMain>
                        <StyledRecordMainTop>승 | 풍선 터트리기 | 23:33 | 2일전</StyledRecordMainTop>
                        <StyledRecordMainBottom>
                            <StyledRecordBottomLeft>
                                <Image
                                    src="/chr10.png"
                                    width={65}
                                    height={65}
                                    alt="게임 내 초상화"
                                    style={{ borderRadius: '30px' }}
                                />
                            </StyledRecordBottomLeft>
                            <StyledRecordBottomRight>
                                <p style={{ color: '#218fff' }}>
                                    45 Point
                                    <Image
                                        src="/cuteline.svg"
                                        width={30}
                                        height={30}
                                        alt="팀원 1"
                                        style={{ borderRadius: '20px' }}
                                    />
                                </p>
                                <p style={{ fontSize: '17px' }}>강아지</p>
                            </StyledRecordBottomRight>
                        </StyledRecordMainBottom>
                    </StyledRecordMain>
                    <StyledRecordVS>
                        <StyledVsContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원1
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원1
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
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
                                />{' '}
                                팀원2
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr7.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원3
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr8.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원4
                            </StyledTeamContainer>
                        </StyledVsContainer>
                    </StyledRecordVS>
                </StyledRecord>
                <StyledRecord>
                    <StyledRecordColor background="#218fff" />
                    <StyledRecordMain>
                        <StyledRecordMainTop>승 | 풍선 터트리기 | 23:33 | 2일전</StyledRecordMainTop>
                        <StyledRecordMainBottom>
                            <StyledRecordBottomLeft>
                                <Image
                                    src="/chr7.png"
                                    width={65}
                                    height={65}
                                    alt="게임 내 초상화"
                                    style={{ borderRadius: '30px' }}
                                />
                            </StyledRecordBottomLeft>
                            <StyledRecordBottomRight>
                                <p style={{ color: '#218fff' }}>
                                    45 Point
                                    <Image
                                        src="/cuteline.svg"
                                        width={30}
                                        height={30}
                                        alt="팀원 1"
                                        style={{ borderRadius: '20px' }}
                                    />
                                </p>
                                <p style={{ fontSize: '17px' }}>강아지</p>
                            </StyledRecordBottomRight>
                        </StyledRecordMainBottom>
                    </StyledRecordMain>
                    <StyledRecordVS>
                        <StyledVsContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원1
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원1
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr5.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
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
                                />{' '}
                                팀원2
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr7.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원3
                            </StyledTeamContainer>
                            <StyledTeamContainer style={{ gap: '7px' }}>
                                <Image
                                    src="/chr8.png"
                                    width={20}
                                    height={20}
                                    alt="팀원 1"
                                    style={{ borderRadius: '20px' }}
                                />{' '}
                                팀원4
                            </StyledTeamContainer>
                        </StyledVsContainer>
                    </StyledRecordVS>
                </StyledRecord>
            </StyledRightBody>
        </>
    );
};

export default Right;
