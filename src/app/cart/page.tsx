import React from 'react';
import CartTemplate from '@/components/templates/CartTemplate';
import BottomNavigation from '@/components/ui/BottomNavigation';

const Cart: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <CartTemplate />
      <BottomNavigation />
    </div>
  );
};

export default Cart;