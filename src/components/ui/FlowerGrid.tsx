'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FlowerCardProps {
  title: string;
  backgroundImage: string;
  onClick: () => void;
}

const FlowerCard: React.FC<FlowerCardProps> = ({ title, backgroundImage, onClick }) => {
  return (
    <div 
      className="relative cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-24 w-full rounded-xl overflow-hidden">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3 className="text-sm font-semibold text-white drop-shadow-lg">
          {title}
        </h3>
      </div>
    </div>
  );
};

const FlowerGrid: React.FC = () => {
  const router = useRouter();

  const flowerCollections = [
    {
      title: "玫瑰浪漫",
      backgroundImage: "/images/rose-romance-bg.png",
      onClick: () => router.push('/product/5')
    },
    {
      title: "鬱金香雅致",
      backgroundImage: "/images/tulip-elegance-bg.png",
      onClick: () => router.push('/product/12')
    },
    {
      title: "粉彩夢境",
      backgroundImage: "/images/pastel-dreams-bg.png",
      onClick: () => router.push('/product/11')
    },
    {
      title: "繽紛色彩",
      backgroundImage: "/images/vibrant-hues-bg.png",
      onClick: () => router.push('/product/11')
    },
    {
      title: "蘭花華麗",
      backgroundImage: "/images/orchid-opulence-bg.png",
      onClick: () => router.push('/product/13')
    },
    {
      title: "向日葵陽光",
      backgroundImage: "/images/sunflower-sunshine-bg.png",
      onClick: () => router.push('/product/4')
    },
    {
      title: "寧靜花束",
      backgroundImage: "/images/serene-bloom-1.png",
      onClick: () => router.push('/product/1')
    },
    {
      title: "康乃馨魅力",
      backgroundImage: "/images/carnation-charm-bg.png",
      onClick: () => router.push('/product/2')
    }
  ];

  return (
    <div className="bg-white px-4 pb-6">
      <div className="grid grid-cols-2 gap-4">
        {flowerCollections.map((collection, index) => (
          <FlowerCard
            key={index}
            title={collection.title}
            backgroundImage={collection.backgroundImage}
            onClick={collection.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default FlowerGrid;