import useUserStore from '@/stores/useUserStore';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { StyledEndComp, StyleLogout, StyledNavLink, StyledPropfileLink, StyledProfileName } from '../Navbar.styled';

import { useRouter, usePathname } from 'next/navigation';

const EndComponent = () => {
    const [isLogin, userInformation] = useUserStore((state: any) => [state.isLogin, state.userInformation]);
    const [mounted, setMounted] = useState<boolean>(false);
    const [profileImg, setProfileImg] = useState<string>('');
    const router = useRouter();
    const pathname: string = usePathname();

    useEffect(() => {
        setMounted(true);
        if (isLogin && userInformation) {
            setProfileImg(userInformation.gender === 'MAN' ? '/manIcon.png' : '/womanIcon.png');
        }
    }, [isLogin]);

    return (
        <StyledEndComp>
            {mounted && (
                <>
                    {isLogin ? (
                        <StyleLogout>로그아웃</StyleLogout>
                    ) : (
                        <StyledNavLink href="/login">로그인</StyledNavLink>
                    )}
                    {!isLogin && <StyledNavLink href="/agreement">회원가입</StyledNavLink>}

                    {isLogin && userInformation && (
                        <StyledPropfileLink href="/mypage">
                            {profileImg && (
                                <Image
                                    src={profileImg}
                                    alt="man"
                                    width={20}
                                    height={20}
                                    style={{ border: '1px solid black', borderRadius: '50%' }}
                                ></Image>
                            )}
                            <StyledProfileName>{userInformation.name}</StyledProfileName>
                        </StyledPropfileLink>
                    )}
                </>
            )}
        </StyledEndComp>
    );
};

export default EndComponent;
