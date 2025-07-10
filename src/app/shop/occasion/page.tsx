'use client';

import React, { useState } from 'react';
import OccasionShopHeader from '@/components/ui/OccasionShopHeader';
import OccasionFlowerGrid from '@/components/ui/OccasionFlowerGrid';
import BottomNavigation from '@/components/ui/BottomNavigation';

const OccasionShopPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('生日慶祝');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <OccasionShopHeader onCategoryChange={handleCategoryChange} />
      <OccasionFlowerGrid activeCategory={activeCategory} />
      <BottomNavigation />
    </div>
  );
};

export default OccasionShopPage;