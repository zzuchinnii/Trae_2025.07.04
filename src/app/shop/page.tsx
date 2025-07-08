import React from 'react';
import ShopHeader from '@/components/ui/ShopHeader';
import FlowerGrid from '@/components/ui/FlowerGrid';
import BottomNavigation from '@/components/ui/BottomNavigation';

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-20">
      <ShopHeader />
      <FlowerGrid />
      <BottomNavigation />
    </main>
  );
}