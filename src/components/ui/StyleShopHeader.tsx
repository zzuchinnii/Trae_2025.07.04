'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CategoryButtonProps {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ title, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
        isActive 
          ? 'bg-[#F5E6D3] text-[#171212]' 
          : 'bg-[#F5E6D3] text-[#171212] hover:bg-[#F0DCC7]'
      }`}
    >
      {title}
    </button>
  );
};

interface StyleShopHeaderProps {
  onCategoryChange?: (category: string) => void;
}

const StyleShopHeader: React.FC<StyleShopHeaderProps> = ({ onCategoryChange }) => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('現代簡約');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const styleCategories = [
    '現代簡約',
    '浪漫經典', 
    '鄉村田園',
    '奢華典雅',
    '自然野趣'
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/shop/style?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-white">
      {/* Header with Back Button and Title */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <button 
          onClick={() => router.back()}
          className="w-6 h-6 flex items-center justify-center"
        >
          <Image
            src="/icons/arrow-left.svg"
            alt="Back"
            width={24}
            height={24}
          />
        </button>
        <div className="flex-1 text-center pr-6">
          <h1 className="text-lg font-bold text-[#171212]">
            依風格選購
          </h1>
        </div>
      </div>

      {/* Subtitle */}
      <div className="px-4 py-5">
        <h2 className="text-[22px] font-bold text-[#171212] leading-7">
          根據美學偏好探索花藝設計，包括現代、浪漫或鄉村風格。
        </h2>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="搜尋風格..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-10 pr-4 py-3 bg-[#F5E6D3] rounded-xl text-[#171212] placeholder-[#8A6170] focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Image
              src="/icons/search.svg"
              alt="Search"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>

      {/* Style Categories */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {styleCategories.map((category) => (
            <CategoryButton
              key={category}
              title={category}
              isActive={activeCategory === category}
              onClick={() => handleCategoryChange(category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleShopHeader;