import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/header';
import Main from '@/components/main';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'プレイリストメーカー',
  description: '動画付きプレイリストを作成するアプリ',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}