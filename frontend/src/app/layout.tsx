'use client';

import StyledComponentsRegistry from './lib/registry';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/DefaultTheme';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/navbar';
export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <html>
            <ThemeProvider theme={theme}>
                <body>
                    <StyledComponentsRegistry>
                        <Navbar />
                        {children}
                    </StyledComponentsRegistry>
                </body>
            </ThemeProvider>
        </html>
    );
}
