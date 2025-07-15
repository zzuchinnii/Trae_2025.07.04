'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartPageProps {
  onBack?: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ onBack }) => {
  const router = useRouter();
  
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: '優雅玫瑰花束',
      price: 35,
      quantity: 1,
      image: '/images/elegant-roses-bouquet.svg'
    },
    {
      id: '2', 
      name: '鬱金香花藝',
      price: 25,
      quantity: 2,
      image: '/images/serene-bloom-1.svg'
    },
    {
      id: '3',
      name: '蘭花中心裝飾', 
      price: 45,
      quantity: 1,
      image: '/images/serene-bloom-2.svg'
    }
  ]);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    // 這裡可以添加結帳邏輯
    console.log('前往結帳，商品:', cartItems);
    alert('前往結帳...');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        <button 
          onClick={handleBack}
          className="w-12 h-12 flex items-center justify-center"
        >
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
        
        <h1 className="text-lg font-bold text-gray-800 text-center flex-1 pr-12">
          購物車
        </h1>
      </div>

      {/* Cart Items */}
      <div className="flex-1 px-4 py-2">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-50">
            <div className="flex items-center gap-4">
              {/* Product Image */}
              <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
              </div>
              
              {/* Product Info */}
              <div className="flex flex-col">
                <h3 className="font-medium text-gray-800 text-base leading-6">
                  {item.name}
                </h3>
                <p className="text-sm text-[#8A6170] leading-5">
                  數量: {item.quantity}
                </p>
              </div>
            </div>
            
            {/* Price and Quantity Controls */}
            <div className="flex flex-col items-end">
              <p className="text-base text-gray-800 leading-6 mb-2">
                ${item.price}
              </p>
              
              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="px-4 py-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          訂單摘要
        </h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#8A6170]">
              小計
            </span>
            <span className="text-base font-medium text-gray-800">
              ${subtotal}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#8A6170]">
              運費
            </span>
            <span className="text-base font-medium text-gray-800">
              ${shipping}
            </span>
          </div>
          
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <span className="text-sm text-[#8A6170]">
              總計
            </span>
            <span className="text-base font-medium text-gray-800">
              ${total}
            </span>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="px-4 pb-6">
        <button
          onClick={handleCheckout}
          className="w-full bg-[#8B5A3C] text-white py-4 rounded-xl font-medium text-base hover:bg-[#7A4A2C] transition-colors"
        >
          前往結帳
        </button>
      </div>
    </div>
  );
};

export default CartPage;