import { create } from 'zustand';

export type SearchBoardType = {
    searchOption: string;
    nowboard: string;
    searchKeyword: string;
    setSearchKeyword: (keyword: string) => void;
    setNowboard: (board: string) => void;
    setSearchOption: (option: string) => void;
};

export const useSearchBoardStore = create<SearchBoardType>((set) => ({
    searchOption: 'NONE',
    nowboard: '',
    searchKeyword: '',
    setSearchKeyword: (keyword) => set({ searchKeyword: keyword }),
    setNowboard: (board) => set({ nowboard: board }),
    setSearchOption: (option) => set({ searchOption: option }),
}));
