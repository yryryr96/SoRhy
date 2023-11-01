'use client';

import Image from 'next/image';
import Input from '@/components/input';
import { StyledMain, StyledMainSearchBox } from './MainPage.Styled';

const MainPage = () => {
    return (
        <StyledMain>
            <Image src="/Logo.png" priority={true} width={430} height={110} alt="Logo" />
            <hr />
            <StyledMainSearchBox>
                <Input width={30} height={8} />
                <Image src="/Loupe.svg" priority={true} width={50} height={50} alt="GG" />
            </StyledMainSearchBox>

            {/* <Image src="/MainText.png" priority={true} width={860} height={120} alt="Logo" /> */}
        </StyledMain>
    );
};

export default MainPage;
