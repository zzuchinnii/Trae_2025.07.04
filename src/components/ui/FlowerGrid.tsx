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
      title: "Rose Romance",
      backgroundImage: "/images/rose-romance-bg.png",
      onClick: () => router.push('/product/rose-romance')
    },
    {
      title: "Tulip Elegance",
      backgroundImage: "/images/tulip-elegance-bg.png",
      onClick: () => router.push('/product/tulip-elegance')
    },
    {
      title: "Pastel Dreams",
      backgroundImage: "/images/pastel-dreams-bg.png",
      onClick: () => router.push('/product/pastel-dreams')
    },
    {
      title: "Vibrant Hues",
      backgroundImage: "/images/vibrant-hues-bg.png",
      onClick: () => router.push('/product/vibrant-hues')
    },
    {
      title: "Orchid Opulence",
      backgroundImage: "/images/orchid-opulence-bg.png",
      onClick: () => router.push('/product/orchid-opulence')
    },
    {
      title: "Sunflower Sunshine",
      backgroundImage: "/images/sunflower-sunshine-bg.png",
      onClick: () => router.push('/product/sunflower-sunshine')
    },
    {
      title: "Serene Bloom",
      backgroundImage: "/images/serene-bloom-1.png",
      onClick: () => router.push('/product/serene-bloom')
    },
    {
      title: "Carnation Charm",
      backgroundImage: "/images/carnation-charm-bg.png",
      onClick: () => router.push('/product/carnation-charm')
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