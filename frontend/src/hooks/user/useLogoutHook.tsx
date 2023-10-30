import { useRouter } from "next/navigation";
import useUserStore from "@/stores/useUserStore";
export const useLogoutHook = () => {
  const router = useRouter();
  const logout = useUserStore((state: any) => state.logout);

  const hanedleLogout = () => {
    router.push("/");
    localStorage.setItem("accessToken", "");
    localStorage.setItem("refreshToken", "");
    logout();
  };
  return { hanedleLogout };
};
