import { HeaderComponent as Header } from '@/components/Header/Header';
import type { Metadata } from 'next';
import './globals.css';

import { Noto_Sans } from 'next/font/google';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  title: 'foundit',
  description: 'Advanced Job Search Portal',
};

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const getHeader = async () => {
  const headerList = headers();

  const host = headerList.get('host'); //qa1.foundit.in
  const res = await fetch(`http://${host}/home/api/header`, {
    method: 'GET',
  });

  const response = await res.json();
  return response;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerData = await getHeader();

  return (
    <html lang="en" className={`${notoSans.className}`}>
      <body className="flex flex-col gap-6">
        <Header headerData={headerData} />
        <section className="px-4">{children}</section>
      </body>
    </html>
  );
}
