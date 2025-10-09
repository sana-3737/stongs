'use client';
import React from 'react';
import Omikujibutton from '@/components/omikujibutton';
import { Clover } from 'lucide-react';

export default function Omikuji (){
    return(
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fefefe]">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-x-2"> <Clover /> おみくじページ  <Clover /></h1>
      <Omikujibutton />
    </div> 
    );
}