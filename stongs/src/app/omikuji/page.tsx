'use client';
import React from 'react';
import Omikujibutton from '@/components/omikujibutton';

export default function Omikuji (){
    return(
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fefefe]">
      <h1 className="text-2xl font-bold mb-6">🎴 おみくじページ 🎴</h1>
      <Omikujibutton />
    </div> 
    );
}