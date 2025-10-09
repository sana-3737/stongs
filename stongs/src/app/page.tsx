import React from 'react';
import Playlist  from './playlist';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
     <header className="justify-center px-4 py-8 space-y-6 bg-[#fefefe]">
      <Link
        href="/omikuji"
        className="bg-[#8787af] text-white px-4 py-2 rounded-md hover:bg-[#9a9ac2] transition"
      >
        🎴 おみくじページへ！
      </Link>
    </header>
    <main>  
    <h1>わくわく  シャッフルプレイリスト🎶</h1>

      <Playlist />
    </main>
  </div>
  );
}