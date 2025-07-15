'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../atoms/Button';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  color: string;
}

const featuredFlowers: FeatureCard[] = [
  {
    id: 'lilies',
    title: '優雅百合',
    description: '象徵純潔與優雅',
    color: 'bg-purple-100'
  },
  {
    id: 'tulips',
    title: '繽紛鬱金香',
    description: '代表完美的愛情',
    color: 'bg-yellow-100'
  },
  {
    id: 'roses',
    title: '浪漫玫瑰',
    description: '愛情與美麗的經典象徵',
    color: 'bg-pink-100'
  }
];

export default function HeroSection() {
  return (
    <div className="bg-white px-4 py-8 space-y-6 relative z-10">
      {/* Header with Search */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center bg-neutral-100 rounded-xl px-4 py-2 w-full">
          <Image
            src="/icons/search-icon.svg"
            alt="Search"
            width={18}
            height={18}
            className="opacity-60 mr-2"
          />
          <input 
            type="text" 
            placeholder="搜尋花卉..." 
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* Featured Flowers Section */}
      <div className="space-y-4 mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-neutral-900">精選花卉</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mt-2">
          {featuredFlowers.map((flower) => (
            <Link 
              key={flower.id}
              href={`/shop/flower/${flower.id}`}
              className="relative rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105 h-40"
            >
              <div className="relative h-full w-full">
                <Image
                  src={flower.id === 'lilies' ? '/images/flower-lily.svg' : 
                       flower.id === 'tulips' ? '/images/flower-tulip.svg' : 
                       '/images/flower-rose.svg'}
                  alt={flower.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
                  <h5 className="font-semibold text-black text-lg">{flower.title}</h5>
                  <p className="text-sm text-black opacity-90">{flower.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}