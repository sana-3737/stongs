'use client' ;
import React, {useState} from 'react';
export default function Playlistbutton () {
    const [message, setMessage] = useState('');

    const handleClick =  () => {
        setMessage('プレイリストが作成されました！');
    };

  return (
    <div>
      <button onClick={handleClick}>プレイリストを作成！</button>
      {message && <p>{message}</p>}
    </div>
  );
}