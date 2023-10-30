'use client'

import StyledComponentsRegistry from "./lib/registry";
import Navbar from "@/components/common/navbar";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/DefaultTheme";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html>

      <ThemeProvider theme={theme}>
        <body>
          <StyledComponentsRegistry>
            {/* <Navbar /> */}
            {children}
          </StyledComponentsRegistry>
        </body>
      </ThemeProvider>
    </html>
  );
}
