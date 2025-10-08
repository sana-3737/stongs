import './globals.css'; // Tailwindが効くように
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プレイリストメーカー',
  description: '動画付きプレイリストを作成するアプリ',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-100 text-gray-900 min-h-screen">
        {/* ヘッダー */}
        <header className="bg-[#8787af] text-white p-4 text-xl font-bold">
          🎶 プレイリストメーカー
        </header>

        {/* メインコンテンツ */}
        <main className="p-6 max-w-5xl mx-auto">{children}</main>

        {/* フッター（必要なら） */}
        {<footer className="bg-gray-200 text-center p-4 text-sm text-gray-600">
          © {'Sana\'s'} playlistApp
        </footer> }
      </body>
    </html>
  );
}