'use client' ;
import React,{useState} from 'react';
import { Song, SongLogic,SongMeta } from '@/types/song';
export default function Omikujibutton () {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  const handleClick = async () => {
    try {
          const res = await fetch('/song.json');
          const songs: Song[] = await res.json();

          const randomIndex = Math.floor(Math.random()*songs.length);
          const song = songs[randomIndex];
          setSelectedSong(song);
         } catch (error) {
         }
        };

        return (
    <div className="text-center mt-6">
      <button
        onClick={handleClick}
        className="h-[40px] bg-[#8787af] text-white px-3 py-1.5 text-sm rounded-md hover:bg-[#9a9ac2] transition"
      >
        おみくじを引く！
      </button>

      {selectedSong && (
        <div className="mt-6 p-4 bg-[#f4f4fa] rounded-lg shadow-md animate-fade-in">
          <h2 className="text-lg font-bold mb-2">🎵 今日の一曲 🎵</h2>
          <p className="text-md">{selectedSong.title} </p>
          <a
            href={selectedSong.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8787af] hover:underline mt-2 inline-block"
          >
            動画を見る
          </a>
        </div>
      )}
    </div>
  );
}