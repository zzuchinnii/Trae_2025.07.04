'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FlowerCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  style: string;
  description: string;
  onClick: () => void;
}

const FlowerCard: React.FC<FlowerCardProps> = ({ name, price, image, style, description, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-[200px] w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded-lg">
          <span className="text-xs font-medium text-[#8A6170]">{style}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#171212] mb-1">
          {name}
        </h3>
        <p className="text-sm text-[#8A6170] mb-2 line-clamp-2">
          {description}
        </p>
        <p className="text-lg font-bold text-[#D4A574]">
          {price}
        </p>
      </div>
    </div>
  );
};

interface StyleFlowerGridProps {
  selectedCategory?: string;
}

const StyleFlowerGrid: React.FC<StyleFlowerGridProps> = ({ selectedCategory = '現代簡約' }) => {
  const router = useRouter();

  const styleFlowers = [
    {
      id: 'modern-minimalist-1',
      name: '純淨線條',
      price: 'NT$ 2,200',
      image: '/images/serene-bloom-1.svg',
      style: '現代簡約',
      description: '簡潔線條與純淨色彩的完美結合，展現現代都市的優雅品味',
      onClick: () => router.push('/product/1')
    },
    {
      id: 'romantic-classic-1',
      name: '玫瑰浪漫',
      price: 'NT$ 3,500',
      image: '/images/rose-romance-bg.svg',
      style: '浪漫經典',
      description: '經典玫瑰花束，傳遞永恆的愛意與浪漫情懷',
      onClick: () => router.push('/product/5')
    },
    {
      id: 'rustic-country-1',
      name: '向日葵陽光',
      price: 'NT$ 1,800',
      image: '/images/sunflower-sunshine-bg.svg',
      style: '鄉村田園',
      description: '溫暖向日葵搭配田園風格包裝，帶來自然純樸的美好',
      onClick: () => router.push('/product/4')
    },
    {
      id: 'luxury-elegant-1',
      name: '蘭花華麗',
      price: 'NT$ 4,200',
      image: '/images/orchid-opulence-bg.svg',
      style: '奢華典雅',
      description: '珍貴蘭花組合，彰顯高貴典雅的品味與地位',
      onClick: () => router.push('/product/13')
    },
    {
      id: 'modern-minimalist-2',
      name: '鬱金香優雅',
      price: 'NT$ 2,800',
      image: '/images/tulip-elegance-bg.svg',
      style: '現代簡約',
      description: '優雅鬱金香的簡約設計，完美詮釋現代美學',
      onClick: () => router.push('/product/12')
    },
    {
      id: 'natural-wild-1',
      name: '繽紛色彩',
      price: 'NT$ 2,500',
      image: '/images/vibrant-hues-bg.svg',
      style: '自然野趣',
      description: '繽紛野花組合，展現大自然的生命力與活力',
      onClick: () => router.push('/product/11')
    },
    {
      id: 'romantic-classic-2',
      name: '粉彩夢境',
      price: 'NT$ 3,200',
      image: '/images/pastel-dreams-bg.svg',
      style: '浪漫經典',
      description: '柔美粉色調花束，營造夢幻浪漫的氛圍',
      onClick: () => router.push('/product/6')
    },
    {
      id: 'luxury-elegant-2',
      name: '康乃馨魅力',
      price: 'NT$ 3,800',
      image: '/images/carnation-charm-bg.svg',
      style: '奢華典雅',
      description: '精緻康乃馨搭配奢華包裝，展現優雅魅力',
      onClick: () => router.push('/product/2')
    },
    {
      id: 'natural-wild-2',
      name: '百合寧靜',
      price: 'NT$ 2,900',
      image: '/images/lily-serenity-bg.svg',
      style: '自然野趣',
      description: '清雅百合花束，帶來寧靜自然的美好感受',
      onClick: () => router.push('/product/10')
    }
  ];

  // 根據選中的分類篩選商品
  const filteredFlowers = selectedCategory === '全部' 
    ? styleFlowers 
    : styleFlowers.filter(flower => flower.style === selectedCategory);

  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-2 gap-4">
        {filteredFlowers.map((flower) => (
          <FlowerCard
            key={flower.id}
            id={flower.id}
            name={flower.name}
            price={flower.price}
            image={flower.image}
            style={flower.style}
            description={flower.description}
            onClick={flower.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default StyleFlowerGrid;