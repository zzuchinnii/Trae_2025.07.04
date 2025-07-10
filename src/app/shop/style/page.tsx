'use client';

import React, { useState } from 'react';
import StyleShopHeader from '@/components/ui/StyleShopHeader';
import StyleFlowerGrid from '@/components/ui/StyleFlowerGrid';
import BottomNavigation from '@/components/ui/BottomNavigation';

export default function StyleShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('現代簡約');

  return (
    <main className="min-h-screen bg-neutral-50 pb-20">
      <StyleShopHeader onCategoryChange={setSelectedCategory} />
      <StyleFlowerGrid selectedCategory={selectedCategory} />
      <BottomNavigation />
    </main>
  );
}