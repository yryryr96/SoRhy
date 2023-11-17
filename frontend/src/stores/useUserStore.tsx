import create from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
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
      setUserInformation: (data) =>
        set((state) => ({
          userInformation: data,
        })),
    }),
    {
      name: 'userStore', 
      getStorage: () => localStorage, 
    }
  )
);

export default useUserStore;