'use client' ;
import React, {useState} from 'react';
import { Song, SongLogic,SongMeta } from '@/types/song';

export default function Playlistbutton () {
    const [targetMinutes,setTargetMinutes] = useState(60);
    const [playlistMeta, setPlaylistMeta] = useState<SongMeta[]>([]);
    const [message, setMessage] = useState('');

    const handleClick = async () => {
     try {
      const res = await fetch('/song.json');
      const songs: Song[] = await res.json();

      const shuffled:SongLogic[] = [...songs].map (({id,length})=>({id,length}));
       for (let i = shuffled.length - 1 ; i > 0 ; i--){
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
       }
      const targetSeconds = targetMinutes * 60;
        const maxSeconds = targetSeconds + 180;  
      const selectedIds : number[] = [];
      let totalSeconds = 0;

      for (const { id, length } of shuffled) {
        if (totalSeconds + length <= maxSeconds) {
            selectedIds.push(id);
            totalSeconds += length;
          }
      }

      const selectedMeta : SongMeta[] = songs
      .filter((song)=> selectedIds.includes(song.id))
      .map(({id,title,cd,url})=>({id,title,cd,url}));

      setPlaylistMeta(selectedMeta);
      setMessage(`プレイリストが作成されました！`);
      setMessage(prev => prev + `\n曲数: ${selectedMeta.length} 曲`);
      setMessage(prev => prev + `\n合計時間: ${Math.floor(totalSeconds / 60)} 分 ${totalSeconds % 60} 秒`);
     } catch (error) {
      setMessage('曲データの取得に失敗しました。');
     }
};

  return (
    <div>
      <label>
        今日は何分のプレイリストを作る？ :
        <select
            value={targetMinutes}
            onChange={(e) => setTargetMinutes(Number(e.target.value))}
          >
           {[...Array(24)].map((_, i) => {
              const minutes = (i + 1) * 5;
              return (
                <option key={minutes} value={minutes}>
                  {minutes} 分
                </option>
              );
            })}   
        </select>
      </label>
      <button onClick={handleClick}>プレイリストを作成！</button>

      <ul>
        {playlistMeta.map((song) => (
          <li key={song.id}>
            <strong>{song.title}</strong> - {song.cd}
            <br />
            <a href={song.url} target="_blank" rel="noopener noreferrer">
              ▶動画を見る            </a>
          </li>
        ))}
      </ul>
      {message && message.split('\n').map((line, i) => <p key={i}>{line}</p>)}

    </div>
  );
}