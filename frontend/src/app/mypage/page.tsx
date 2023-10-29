import { Metadata } from "next";
import Mypage from "@/pageComponents/mypage";

export const metadata: Metadata = {
  title: "Mypage",
};

export default function MyPage() {
  return (
    <>
      <Mypage></Mypage>
    </>
  )
}
