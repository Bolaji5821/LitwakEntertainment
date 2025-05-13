'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    return (<html lang="en" suppressHydrationWarning>
        <body className={ inter.className } >
        <ThemeProvider attribute = "class"
        defaultTheme = "dark"
        enableSystem >
        <div className = "flex min-h-screen flex-col">
        <Navbar/>
        <main className="flex-grow" > { children } 
        </main> 
        <Footer/>
        </div>
         </ThemeProvider>
        </body>
        </html>
    );
}