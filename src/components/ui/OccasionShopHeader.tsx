'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Search } from 'lucide-react';

interface OccasionShopHeaderProps {
  onCategoryChange?: (category: string) => void;
}

const OccasionShopHeader: React.FC<OccasionShopHeaderProps> = ({ onCategoryChange }) => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('生日慶祝');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const occasionCategories = [
    '生日慶祝',
    '紀念日', 
    '感謝致意',
    '探病慰問',
    '節日祝福',
    '開業祝賀',
    '畢業典禮',
    '婚禮慶典'
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/shop/occasion?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="bg-white border-b border-gray-100">
      {/* Header with back button and title */}
      <div className="flex items-center justify-between px-4 py-4">
        <button 
          onClick={handleBack}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        
        <h1 className="text-lg font-semibold text-gray-800">
          依場合選購
        </h1>
        
        <div className="w-10 h-10" /> {/* Spacer for centering */}
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="搜尋適合的花卉..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {occasionCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? 'bg-pink-500 text-black'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-600">
          為每個特殊時刻挑選最合適的花卉，讓您的心意完美傳達
        </p>
      </div>
    </div>
  );
};

export default OccasionShopHeader;