'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import BottomNavigation from '@/components/ui/BottomNavigation';
import Image from 'next/image';

const ThemesPage = () => {
  const router = useRouter();
  
  // 主題系列數據
  const themes = [
    {
      id: 'romantic',
      title: '浪漫系列',
      description: '為特別的時刻增添浪漫氛圍',
      image: '/images/theme-romantic.svg'
    },
    {
      id: 'seasonal',
      title: '季節限定',
      description: '當季最新鮮的花卉組合',
      image: '/images/theme-seasonal.svg'
    },
    {
      id: 'celebration',
      title: '慶祝系列',
      description: '為各種慶祝場合設計的花禮',
      image: '/images/theme-celebration.svg'
    },
    {
      id: 'sympathy',
      title: '關懷系列',
      description: '表達關心與支持的溫馨花禮',
      image: '/images/theme-sympathy.svg'
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
            主題系列
          </h1>
        </div>
      </div>

      {/* Theme Grid */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-1 gap-4">
          {themes.map((theme) => (
            <div 
              key={theme.id}
              onClick={() => router.push(`/shop?theme=${theme.id}`)}
              className="bg-[#F9F5F0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#171212]">{theme.title}</h3>
                <p className="text-sm text-[#8A6170] mt-1">{theme.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default ThemesPage;