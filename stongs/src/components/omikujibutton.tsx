'use client' ;
import React from 'react';
import { Song, SongLogic,SongMeta } from '@/types/song';
export default function Omikujibutton () {

     const handleClick = async () => {
         try {
          const res = await fetch('/song.json');
          const songs: Song[] = await res.json();
         } catch (error) {
         }
        };

  return (
  <div>
       <button onClick={handleClick}
       className = "h-[40px] bg-[#8787af] text-white px-1 py-1.5 text-sm rounded-md  hover:bg-[#9a9ac2] transition"
       >おみくじを引く！</button>
 </div>
  );

}