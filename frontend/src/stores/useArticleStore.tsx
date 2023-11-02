import { create } from 'zustand';

export type ArticlePageType = {
    selectbtn: string;
    setselectbtn: (button: string) => void;
};

export const useArticleStore = create<ArticlePageType>((set) => ({
    selectbtn: '1',
    setselectbtn: (button) => set({ selectbtn: button }),
}));
