import React from 'react';

export default function Linkspace (){
    return(
         <div className="bg-[#f3f3fa] p-4 rounded-lg shadow-md mt-6">
      <h2 className="text-[#8787af] font-bold mb-2 text-lg">公式リンク</h2>
      <ul className="space-y-2 text-sm">
        <li>
          <a href="https://www.sixtones.jp/" target='_blank' className="text-black hover:underline hover:text-[#8787af]">
            公式サイト
          </a>
        </li>
        <li>
          <a href="https://x.com/SixTONES_SME" target='_blank' className="text-black hover:underline hover:text-[#8787af]">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://youtube.com/@sixtones_official?si=afwjxA-IPvp1i57n" target='_blank' className="text-black hover:underline hover:text-[#8787af]">
            YouTube
          </a>
        </li>
      </ul>
    </div>
    );
}