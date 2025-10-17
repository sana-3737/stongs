import React from 'react';
import { Star } from 'lucide-react';

export default function Linkspace (){
    return(
         <div className="bg-[#f3f3fa] p-4 rounded-lg shadow-md mt-6">
      <h2 className="text-[#8787af] font-bold mb-2 text-lg flex items-center gap-x-2">
         <Star />LINK <Star /></h2>
      <ul className="space-y-2 text-sm">
        <li>
          <a href="https://www.sixtones.jp/" target='_blank' className="text-black hover:underline hover:text-[#8787af]">
            SixTONES 
          </a>
        </li>
        <li>
          <a href="https://x.com/SixTONES_SME" target='_blank' className="text-black hover:underline hover:text-[#8787af]">
            SixTONES Twitter
          </a>
        </li>
        <li>
          <a href="https://youtube.com/@sixtones_official?si=afwjxA-IPvp1i57n" target='_blank' className="text-black hover:underline hover:text-[#8787af]">
           SixTONES YouTube
          </a>
        </li>
        <li>
          <a href="https://music.apple.com/jp/artist/sixtones/1808322699" target='_blank' className="text-black hover:underline hover:text-[#8787af]">
           SixTONES AppleMusic
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/intl-ja/artist/7dhueqtbx2NVq1leXyqaNl" target='_blank' className="text-black hover:underline hover:text-[#8787af]">
           SixTONES Spotify
          </a>
        </li>
      </ul>
    </div>
    );
}