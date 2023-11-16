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
import { useSearchBoardStore } from '@/stores/useSearchBoardStore';
import { useArticleStore } from '@/stores/useArticleStore';
const SearchBar = () => {
    // const [selectedOption, setSelectedOption] = useState<String>('');
    const { searchOption, setSearchOption, searchKeyword, setSearchKeyword, setNowboard } = useSearchBoardStore();
    const { selectbtn, setselectbtn } = useArticleStore();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');
    const openModal = () => {
        setModalVisible(true);
        setModalText('여러분의 이야기를 들려주세요 !');
    };
    const handleKeywordChange = (event: any) => {
        setSearchKeyword(event.target.value);
    };
    const handleSearch = (event: any) => {
        event.preventDefault();
        console.log(selectbtn);
        switch (selectbtn) {
            case '1':
                setNowboard('FREE');
                break;
            case '2':
                setNowboard('COMPANY');
                break;
            case '3':
                setNowboard('TIP');
                break;
            default:
                setNowboard('FREE');
        }
        setselectbtn('4');
    };
    const handleSelectChange = (event: any) => {
        console.log(event.target.value)
        setSearchOption(event.target.value);
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
                <form onSubmit={handleSearch} style={{ display: 'flex' }}>
                    <SelectBox onChange={handleSelectChange}>
                        <option value="NONE">전체</option>
                        <option value="NICKNAME">닉네임</option>
                        <option value="TITLE">제목</option>
                        <option value="CONTENT">내용</option>
                    </SelectBox>
                    <SearchInput
                        type="text"
                        placeholder="키워드를 입력하세요"
                        value={searchKeyword}
                        onChange={handleKeywordChange}
                    />
                    <SearchButton type="submit">검색</SearchButton>
                </form>
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
