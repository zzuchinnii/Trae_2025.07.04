'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import BottomNavigation from '@/components/ui/BottomNavigation';
import Image from 'next/image';

const FlowerTypesPage = () => {
  const router = useRouter();
  
  // 主花分類數據
  const flowerTypes = [
    {
      id: 'rose',
      title: '玫瑰',
      description: '象徵愛情與熱情的經典花卉',
      image: '/images/flower-rose.svg'
    },
    {
      id: 'lily',
      title: '百合',
      description: '優雅純潔的象徵',
      image: '/images/flower-lily.svg'
    },
    {
      id: 'tulip',
      title: '鬱金香',
      description: '春天的使者，象徵完美的愛',
      image: '/images/flower-tulip.svg'
    },
    {
      id: 'sunflower',
      title: '向日葵',
      description: '象徵陽光、忠誠與長壽',
      image: '/images/flower-sunflower.svg'
    },
    {
      id: 'hydrangea',
      title: '繡球花',
      description: '象徵感謝、真摯的情感',
      image: '/images/flower-hydrangea.svg'
    },
    {
      id: 'carnation',
      title: '康乃馨',
      description: '象徵母愛與感激',
      image: '/images/flower-carnation.svg'
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
            依主花分類
          </h1>
        </div>
      </div>

      {/* Flower Types Grid */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          {flowerTypes.map((flowerType) => (
            <div 
              key={flowerType.id}
              onClick={() => router.push(`/shop?flower=${flowerType.id}`)}
              className="bg-[#F9F5F0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-32 w-full">
                <Image
                  src={flowerType.image}
                  alt={flowerType.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="text-base font-semibold text-[#171212]">{flowerType.title}</h3>
                <p className="text-xs text-[#8A6170] mt-1">{flowerType.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default FlowerTypesPage;