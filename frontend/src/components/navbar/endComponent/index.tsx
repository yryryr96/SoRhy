import useUserStore from '@/stores/useUserStore';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { StyledEndComp, StyleLogout, StyledNavLink, StyledPropfileLink, StyledProfileName } from '../Navbar.styled';
import { useLogoutHook } from '@/hooks/user/useLogoutHook';
import { useRouter, usePathname } from 'next/navigation';

const EndComponent = () => {
    const [isLogin, userInformation] = useUserStore((state: any) => [state.isLogin, state.userInformation]);
    const { hanedleLogout } = useLogoutHook();
    const [mounted, setMounted] = useState<boolean>(false);
    const [profileImg, setProfileImg] = useState<string>('');
    const router = useRouter();
    const pathname: string = usePathname();

    useEffect(() => {
        setMounted(true);
        if (isLogin && userInformation) {
            setProfileImg('/profile_lovely.svg');
        }
    }, [isLogin]);

    return (
        <StyledEndComp>
            {mounted && (
                <>
                    {isLogin ? (
                        <StyleLogout onClick={hanedleLogout}>로그아웃</StyleLogout>
                    ) : (
                        <StyledNavLink href="/login">로그인</StyledNavLink>
                    )}
                    {!isLogin && <StyledNavLink href="/signup">회원가입</StyledNavLink>}
                </>
            )}
        </StyledEndComp>
    );
};

export default EndComponent;
