"use client";
import Image from "next/image";
import { StyledNavbar, StyledStartComp } from "./Navbar.styled";
import { usePathname } from "next/navigation";
import MidComponent from "./midComponent";
import { useSurveylistStore } from "@/stores/surveylist/useSurveylistStore";
import EndComponent from "./endComponent";
import Link from "next/link";
import useIsMobileHook from "@/Hooks/useIsMobileHook";
import Mobilenavbar from "./mobilenavbar";

const NavbarComponent = () => {
  const pathname = usePathname();
  const selectbtn = useSurveylistStore((state) => state.selectbtn);

  const isMobile = useIsMobileHook();

  return (
    <header>
      {isMobile ? (
        <Mobilenavbar />
      ) : (
        <StyledNavbar pathname={pathname} selectbtn={selectbtn}>
          <StyledStartComp pathname={pathname}>
            <Link href="/">
              <Image src="/Logo.svg" priority={true} width={21} height={21} alt="Logo"></Image>
              <Image src="/SSS.svg" priority={true} width={47} height={16} alt="SSS"></Image>
            </Link>
          </StyledStartComp>

          <MidComponent pathname={pathname} />

          <EndComponent />
        </StyledNavbar>
      )}
    </header>
  );
};

export default NavbarComponent;
