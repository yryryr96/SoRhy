import { useRouter } from 'next/navigation';
import useUserStore from '@/stores/useUserStore';

export const useLogoutHook = () => {
    const router = useRouter();
    const logout = useUserStore((state: any) => state.logout);

    const hanedleLogout = () => {
        console.log('아으');
        router.push('/');
        localStorage.setItem('accessToken', '');

        logout();
    };
    return { hanedleLogout };
};
