'use client';
import React, { useState } from 'react';
import { StyledSearchBar, TopContainer, BottomContainer } from './Searchbar.Styled';
import DropBox from '@/components/dropbox';

const SearchBar = () => {
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const [selectedOption, setSelectedOption] = useState<String>('');
    return (
        <StyledSearchBar>
            <TopContainer>검색 옵션</TopContainer>
            <BottomContainer>
                <DropBox
                    options={options}
                    onSelect={(selectedValue: String) => {
                        setSelectedOption(selectedValue);
                    }}
                />
                {selectedOption && <p>Selected Option: {selectedOption}</p>}
                <DropBox
                    options={options}
                    onSelect={(selectedValue: String) => {
                        setSelectedOption(selectedValue);
                    }}
                />
                {selectedOption && <p>반갑습니다: {selectedOption}</p>}
                <DropBox
                    options={options}
                    onSelect={(selectedValue: String) => {
                        setSelectedOption(selectedValue);
                    }}
                />
                {selectedOption && <p>Selected Option: {selectedOption}</p>}
                <DropBox
                    options={options}
                    onSelect={(selectedValue: String) => {
                        setSelectedOption(selectedValue);
                    }}
                />
                {selectedOption && <p>반갑습니다: {selectedOption}</p>}
            </BottomContainer>
        </StyledSearchBar>
    );
};

export default SearchBar;
