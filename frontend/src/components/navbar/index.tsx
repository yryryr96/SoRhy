'use client';
import Image from 'next/image';
import { StyledNavbar, StyledStartComp } from './Navbar.styled';
import { usePathname } from 'next/navigation';
import MidComponent from './midComponent';
import EndComponent from './endComponent';
import Link from 'next/link';

const NavbarComponent = () => {
    const pathname = usePathname();

    return (
        <header>
            <StyledNavbar pathname={pathname}>
                <StyledStartComp pathname={pathname}>
                    <Link href="/">
                        <Image src="/Logo.png" priority={true} width={21} height={21} alt="Logo"></Image>
                    </Link>
                </StyledStartComp>

                <MidComponent pathname={pathname} />

                <EndComponent />
            </StyledNavbar>
        </header>
    );
};

export default NavbarComponent;
