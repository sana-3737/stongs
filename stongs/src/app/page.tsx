import React from 'react';
import Playlist  from './playlist';
import Link from 'next/link';
 
export default function Home() {
  return (
   
    <main>  
    <h1>わくわく  シャッフルプレイリスト🎶</h1>

      <Playlist />
    </main>
  );
}