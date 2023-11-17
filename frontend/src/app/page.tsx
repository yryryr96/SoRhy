import { Metadata } from "next";
import MainPage from "@/pageComponents/mainPage";

export const metadata: Metadata = {
  title: "SoRhy",
};

export default function Home() {
  return (
    <>
      <MainPage></MainPage>
    </>
  )
}
