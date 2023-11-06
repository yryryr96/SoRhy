import { create } from 'zustand';

const useUserStore = create((set) => ({
    isLogin: false,
    userInformation: {
        nickname: 0,
        isAccessToken: false,
    },
    login: () =>
        set(() => ({
            isLogin: true,
            userInformation: {
                nickname: 0,
                isAccessToken: true,
            },
        })),
    logout: () => set(() => ({ isLogin: false })),
    setUserInformation: (data: any) =>
        set((state: any) => ({
            userInformation: data,
        })),
}));

export default useUserStore;
