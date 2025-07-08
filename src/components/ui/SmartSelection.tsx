'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FeatureCardProps {
  title: string;
  description: string;
  backgroundImage: string;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, backgroundImage, onClick }) => {
  return (
    <div 
      className="relative rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-[201px] w-full">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-bold text-[#171212] mb-1">
          {title}
        </h3>
        <p className="text-base text-[#8A6170] leading-6">
          {description}
        </p>
      </div>
    </div>
  );
};

const SmartSelection: React.FC = () => {
  const router = useRouter();

  const features = [
    {
      title: "Quiz: Find Your Flower",
      description: "Take our fun quiz to discover the perfect flowers that match your personality or preferences.",
      backgroundImage: "/images/quiz-card-bg.png",
      onClick: () => router.push('/quiz')
    },
    {
      title: "Shop by Occasion",
      description: "Filter flower arrangements by specific events or occasions like birthdays, anniversaries, or celebrations.",
      backgroundImage: "/images/occasion-card-bg.png",
      onClick: () => router.push('/shop?filter=occasion')
    },
    {
      title: "Shop by Style",
      description: "Explore arrangements based on aesthetic preferences such as modern, romantic, or rustic styles.",
      backgroundImage: "/images/style-card-bg.png",
      onClick: () => router.push('/shop?filter=style')
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#171212"/>
            </svg>
          </div>
        </div>
        <div className="flex-1 text-center pr-12">
          <h2 className="text-lg font-bold text-[#171212]">
            Smart Selection
          </h2>
        </div>
      </div>

      {/* Subtitle */}
      <div className="px-4 py-5">
        <h3 className="text-[22px] font-bold text-[#171212] leading-7">
          Find your perfect flowers
        </h3>
      </div>

      {/* Feature Cards */}
      <div className="px-4 space-y-4 pb-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            backgroundImage={feature.backgroundImage}
            onClick={feature.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SmartSelection;