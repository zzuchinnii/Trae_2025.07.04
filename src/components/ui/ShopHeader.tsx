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

const ShopHeader: React.FC = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('主題系列');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    '主題系列',
    '依主花分類', 
    '依顏色分類',
    '客製工作室'
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    
    // 根據不同分類導航到相應頁面
    switch(category) {
      case '主題系列':
        router.push('/shop/themes');
        break;
      case '依主花分類':
        router.push('/shop/flower-types');
        break;
      case '依顏色分類':
        router.push('/shop/colors');
        break;
      case '客製工作室':
        router.push('/shop/custom');
        break;
      default:
        router.push('/shop');
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
        <div className="flex items-center">
          <button 
            onClick={() => router.back()}
            className="w-6 h-6 mr-3"
          >
            <Image
              src="/images/home-icon-alt.svg"
              alt="Back"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="flex-1 text-center pr-9">
          <h1 className="text-lg font-bold text-[#171212]">
            全部商品
          </h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-4">
        <div className="flex bg-[#F5E6D3] rounded-xl overflow-hidden">
          <div className="flex items-center justify-center w-12 h-12 bg-[#F5E6D3]">
            <Image
              src="/images/search-icon-white.svg"
              alt="Search"
              width={20}
              height={20}
            />
          </div>
          <input
            type="text"
            placeholder="搜尋"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-[#F5E6D3] text-[#8A6170] placeholder-[#8A6170] px-4 py-3 text-sm font-medium focus:outline-none"
          />
        </div>
      </div>

      {/* Category Buttons */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              title={category}
              isActive={activeCategory === category}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;