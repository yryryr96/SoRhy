import { StyledMobileNavbar, StyleLogout, StyledEndComp, StyledNavLink } from "./Mobilenavbar.styled";
import Link from "next/link";
import Image from "next/image";
import { useLoginHook } from "@/Hooks/user/useUserInformationHook";
import { useLogoutHook } from "@/Hooks/user/useLogoutHook";
import useUserStore from "@/stores/useUserStore";
import { useState, useEffect } from "react";

const Mobilenavbar = () => {
  const [isLogin, userInformation] = useUserStore((state: any) => [state.isLogin, state.userInformation]);
  const { refreshUserInformation } = useLoginHook();
  const [mounted, setMounted] = useState<boolean>(false);
  const { hanedleLogout } = useLogoutHook();

  useEffect(() => {
    setMounted(true);
  }, [isLogin]);

  useEffect(() => {
    refreshUserInformation();
  }, []);

  return (
    <StyledMobileNavbar>
      <div>
        <Link href="/">
          <Image src="/Logo.svg" priority={true} width={21} height={21} alt="Logo"></Image>
          <Image src="/SSS.svg" priority={true} width={47} height={16} alt="SSS"></Image>
        </Link>
      </div>
      <StyledEndComp>
        {mounted && (
          <>
            {isLogin ? <StyleLogout onClick={hanedleLogout}>로그아웃</StyleLogout> : <StyledNavLink href="/login">로그인</StyledNavLink>}
            {isLogin && userInformation && <StyledNavLink href="/mypage">{userInformation.name}</StyledNavLink>}
          </>
        )}
      </StyledEndComp>
    </StyledMobileNavbar>
  );
};

export default Mobilenavbar;
