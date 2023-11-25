import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
//constants
// ──────────────────────────────────────────────────── 🟩 ─
import Sidebar from '@/components/Sidebar';

// ──────────────────────────────────────────────────── 🟩 ─

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          (inter.className,
          'bg-dot  m-10 grid grid-cols-6 gap-4 items-center justify-center  font-opensans overflow-x-hidden ')
        }
      >
        <Sidebar />

        <div className="col-span-5 md:ml-32 mt-4 ml-10 lg:mx-20 col-start-2 ">
          {children}
        </div>
      </body>
    </html>
  );
}
