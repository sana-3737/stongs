import React from 'react';
import Playlist  from './playlist';
import Linkspace from '@/components/linkspace';'./components/linkspace.tsx';

 
export default function Home() {
  return (
   <main className="min-h-screen max-w-[900px] mx-auto rounded-lg bg-[#e6e6fa] p-6 shadow-md pb-24">
  <h1 className="text-xl font-bold mb-6 text-center">わくわく シャッフルプレイリスト🎶</h1>

  <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
    
    <div className="md:w-2/3">
      <Playlist />
    </div>
    
    <div className="md:w-1/3 max-h-[calc(100vh-200px)]">
      <Linkspace />
    </div>
  </div>
</main>
  );
}