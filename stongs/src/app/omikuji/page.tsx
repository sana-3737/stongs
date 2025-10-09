'use client';
import React from 'react';
import Omikujibutton from '@/components/omikujibutton';
import { Clover } from 'lucide-react';

export default function Omikuji() {
  return (
    <main className="sm:w-[500px] mx-auto rounded-lg bg-[#e6e6fa] p-6 shadow-md pb-24 w-full sm:max-w-[900px]">
      <div className="flex flex-col items-center justify-center   rounded-md p-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-x-2 text-black">
          <Clover /> SixTONES おみくじ <Clover />
        </h1>
        <Omikujibutton />
      </div>
    </main>
  );
}