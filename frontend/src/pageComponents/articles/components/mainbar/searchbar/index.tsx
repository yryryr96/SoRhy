'use client';
import React, { useState } from 'react';
import {
    StyledSearchBar,
    TopContainer,
    BottomContainer,
    ClickBox,
    SelectBox,
    SearchInput,
    SearchButton,
} from './Searchbar.Styled';
import HR from '@/components/hr';
import Image from 'next/image';
import Modal from '@/components/modal';

const SearchBar = () => {
    const [selectedOption, setSelectedOption] = useState<String>('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');
    const openModal = () => {
        setModalVisible(true);
        setModalText('여러분의 이야기를 들려주세요 !');
    };

    return (
        <StyledSearchBar>
            <TopContainer>
                검색 옵션
                <Image
                    src="/pencil_icon2.svg"
                    width={30}
                    height={30}
                    alt="Pencil_Icon"
                    onClick={openModal}
                    style={{ cursor: 'pointer' }}
                />
            </TopContainer>
            <HR />
            <BottomContainer>
                <ClickBox>
                    <Image src="/recenticon.svg" width={35} height={35} alt="Recent" />
                    Recent
                </ClickBox>
                <ClickBox color="red">
                    <Image src="/hoticon.svg" width={35} height={35} alt="Hot" />
                    Hot
                </ClickBox>
                <SelectBox>
                    <option value="option1">자유 게시판</option>
                    <option value="option2">회사 게시판</option>
                    <option value="option3">Tips</option>
                </SelectBox>
                <SearchInput type="text" placeholder="키워드를 입력하세요" />
                <SearchButton type="submit">검색</SearchButton>
                {modalVisible && (
                    <Modal
                        isOpen={modalVisible}
                        bigtext={modalText}
                        confirm="작성하기"
                        cancel="취소"
                        onConfirmClick={() => setModalVisible(false)}
                        onClose={() => setModalVisible(false)}
                    />
                )}
            </BottomContainer>
        </StyledSearchBar>
    );
};

export default SearchBar;
