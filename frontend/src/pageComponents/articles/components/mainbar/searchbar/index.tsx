'use client';
import React, { useState } from 'react';
import { StyledSearchBar, TopContainer, BottomContainer,ClickBox } from './Searchbar.Styled';
import DropBox from '@/components/dropbox';
import Image from 'next/image';

const SearchBar = () => {
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const [selectedOption, setSelectedOption] = useState<String>('');
    return (
        <StyledSearchBar>
            <TopContainer>
                검색 옵션
                <Image src="/pencil_icon2.svg" width={35} height={35} alt="Pencil_Icon"/>
            </TopContainer>
            <BottomContainer>

            <ClickBox>
            <Image src="/recenticon.svg" width={40} height={40} alt="Recent"/>
                Recent
            </ClickBox>
            <ClickBox color="red">
                <Image src="/hoticon.svg" width={40} height={40} alt="Hot"/>
                Hot
            </ClickBox>
            <DropBox
                options={options}
                onSelect={(selectedValue: String) => {
                    setSelectedOption(selectedValue);
                }}
            />
            {selectedOption}

            </BottomContainer>
        </StyledSearchBar>
    );
};

export default SearchBar;
