'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Input from '@/components/input';
import { StyledMain, StyledMainSearchBox } from './MainPage.Styled';

const MainPage = () => {
    const router = useRouter();
    const [userNickname, setuserNickname] = useState('');

    const handleInputChange = (event: any) => {
        setuserNickname(event.target.value);
    };

    const handleLoupeClick = () => {
        router.push(`/recordsearch/${encodeURIComponent(userNickname)}`);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleLoupeClick();
        }
    };
    return (
        <StyledMain>
            <Image src="/Logo.png" priority={true} width={430} height={110} alt="Logo" />
            <hr />
            <StyledMainSearchBox>
                <Input
                    type="text"
                    name="userId"
                    onChange={handleInputChange}
                    width={30}
                    height={8}
                    onKeyDown={handleKeyDown}
                    font_size={22}
                    inputstate={'true'}
                />
                <div style={{ cursor: 'pointer' }}>
                    <Image
                        src="/Loupe.svg"
                        priority={true}
                        width={50}
                        height={50}
                        alt="GG"
                        onClick={handleLoupeClick}
                    />
                </div>
            </StyledMainSearchBox>

            {/* <Image src="/MainText.png" priority={true} width={860} height={120} alt="Logo" /> */}
        </StyledMain>
    );
};

export default MainPage;
