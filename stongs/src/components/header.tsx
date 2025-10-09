import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#8787af] text-white p-4 text-xl font-bold flex justify-between items-center">
      <span>🎶 プレイリストメーカー</span>
      <Link
        href="/omikuji"
        className="bg-white text-[#8787af] px-3 py-1 rounded hover:bg-gray-100 text-sm font-normal"
      >
        🎴 おみくじページへ！
      </Link>
    </header>
  );
}
