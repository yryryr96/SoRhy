import { Metadata } from "next";
import Login from "@/pageComponents/login";

export const metadata: Metadata = {
  title: "Login",
};

export default function LogIn() {
  return (
    <>
      <Login></Login>
    </>
  )
}
