import Link from 'next/link';
import { FileMusic } from 'lucide-react';

export default function Header() {
  return (
    <div>
    <header className="bg-[#8787af] text-white p-4 text-xl font-bold flex justify-between items-center">
     <Link
        href="/"
        className="text-white px-3 py-1  font-normal hover:underline hover:decoration-[#f3f3fa] text-lg"
     > <FileMusic />
       🎶 プレイリストメーカー
     </Link>
      <Link
        href="/omikuji"
        className="bg-white text-[#8787af] px-3 py-1 rounded hover:bg-gray-100 text-sm font-normal"
      >
        🎴 おみくじページへ！
      </Link>
    </header>
    </div>
  );
}
