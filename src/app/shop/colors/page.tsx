'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import BottomNavigation from '@/components/ui/BottomNavigation';
import Image from 'next/image';

const ColorsPage = () => {
  const router = useRouter();
  
  // 顏色分類數據
  const colors = [
    {
      id: 'red',
      title: '紅色系',
      description: '熱情、愛情、活力',
      color: '#E63946',
      textColor: 'text-white'
    },
    {
      id: 'pink',
      title: '粉色系',
      description: '溫柔、浪漫、甜美',
      color: '#FFB6C1',
      textColor: 'text-[#171212]'
    },
    {
      id: 'white',
      title: '白色系',
      description: '純潔、高雅、簡約',
      color: '#F8F9FA',
      textColor: 'text-[#171212]'
    },
    {
      id: 'yellow',
      title: '黃色系',
      description: '活力、友誼、陽光',
      color: '#FFD166',
      textColor: 'text-[#171212]'
    },
    {
      id: 'purple',
      title: '紫色系',
      description: '神秘、高貴、優雅',
      color: '#9D4EDD',
      textColor: 'text-white'
    },
    {
      id: 'blue',
      title: '藍色系',
      description: '寧靜、信任、和平',
      color: '#457B9D',
      textColor: 'text-white'
    },
    {
      id: 'orange',
      title: '橙色系',
      description: '活力、溫暖、歡樂',
      color: '#F77F00',
      textColor: 'text-white'
    },
    {
      id: 'green',
      title: '綠色系',
      description: '生機、希望、自然',
      color: '#2A9D8F',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <div className="flex items-center">
          <button 
            onClick={() => router.back()}
            className="w-6 h-6 mr-3"
          >
            <Image
              src="/images/back-arrow.svg"
              alt="Back"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="flex-1 text-center pr-9">
          <h1 className="text-lg font-bold text-[#171212]">
            依顏色分類
          </h1>
        </div>
      </div>

      {/* Colors Grid */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          {colors.map((color) => (
            <div 
              key={color.id}
              onClick={() => router.push(`/shop?color=${color.id}`)}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: color.color }}
            >
              <div className={`p-6 flex flex-col items-center justify-center ${color.textColor}`}>
                <h3 className="text-lg font-semibold">{color.title}</h3>
                <p className="text-sm mt-1 text-center">{color.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default ColorsPage;