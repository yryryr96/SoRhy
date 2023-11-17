import { create } from 'zustand';

export type RankPageType = {
    selectedbtn: string;
    setselectedbtn: (button: string) => void;
};

export const useRankStore = create<RankPageType>((set) => ({
    selectedbtn: '1',
    setselectedbtn: (button) => set({ selectedbtn: button }),
}));
