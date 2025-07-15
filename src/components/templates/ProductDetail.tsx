'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../atoms/Button';
import { useCartStore } from '@/lib/store';
import { useRouter } from 'next/navigation';

interface ProductDetailProps {
  productId?: number;
  productName?: string;
  description?: string;
  images?: string[];
  price?: number;
  sizes?: string[];
  details?: {
    care: string;
    delivery: string;
    occasion: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  productId = 1,
  productName = "寧靜花束",
  description = "一個寧靜的花藝作品，以柔和的粉彩色調和精緻的花朵為特色，完美表達平靜與欽佩之意。",
  images = [
    "/images/serene-bloom-1.svg",
    "/images/serene-bloom-2.svg",
    "/images/serene-bloom-3.svg"
  ],
  price = 1500,
  sizes = ['小', '中', '大'],
  details = {
    care: '建議每2-3天換水一次，剪短花莖約1公分',
    delivery: '當日下午2點前訂購，隔日送達',
    occasion: '日常驚喜、感謝表達'
  }
}) => {
  // 不同尺寸對應的價格
  const sizePrices = {
    '小': Math.round((price || 1500) * 0.8), // 小尺寸為基礎價格的80%
    '中': price || 1500, // 中尺寸為基礎價格
    '大': Math.round((price || 1500) * 1.3), // 大尺寸為基礎價格的130%
    '特大': Math.round((price || 1500) * 1.6) // 特大尺寸為基礎價格的160%
  };
  
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0] || '中');
  const [includeVase, setIncludeVase] = useState<boolean>(false);
  const [includeGiftMessage, setIncludeGiftMessage] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  
  const addToCart = useCartStore((state) => state.addToCart);
  const router = useRouter();

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    try {
      // 計算總價格（包含加購選項）
      const currentPrice = sizePrices[selectedSize as keyof typeof sizePrices] || 0;
      const totalPrice = currentPrice + (includeVase ? 200 : 0) + (includeGiftMessage ? 50 : 0);
      
      // 創建購物車商品物件
      const cartProduct = {
        id: productId?.toString() || '1',
        name: `${productName}${selectedSize ? ` (${selectedSize})` : ''}${includeVase ? ' + 花瓶' : ''}${includeGiftMessage ? ' + 客製化卡片' : ''}`,
        description: description || '',
        price: totalPrice,
        imageUrl: images[0] || '/placeholder.svg'
      };
      
      // 根據數量添加到購物車
      for (let i = 0; i < quantity; i++) {
        addToCart(cartProduct);
      }
      
      // 直接跳轉到購物車頁面
      router.push('/cart');
      
    } catch (error) {
      console.error('加入購物車失敗:', error);
      alert('加入購物車失敗，請稍後再試');
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center justify-center w-12 h-12">
          <Image
            src="/images/back-arrow.svg"
            alt="Back"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={() => window.history.back()}
          />
        </div>
        <h1 className="text-lg font-bold text-gray-900 text-center flex-1 pr-12">
          Petaloom
        </h1>
      </div>

      {/* Product Images */}
      <div className="px-4 mb-6">
        <div className="flex gap-3">
          {images.map((image, index) => (
            <div key={index} className="flex-1 aspect-square rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`${productName} ${index + 1}`}
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {productName}
        </h2>
        <p className="text-2xl font-bold text-primary-600 mb-3">
          NT$ {sizePrices[selectedSize as keyof typeof sizePrices]?.toLocaleString()}
        </p>
        <p className="text-base text-gray-700 leading-6">
          {description}
        </p>
      </div>

      {/* Size Options */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          尺寸選擇
        </h3>
        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-3 rounded-xl border ${
                selectedSize === size
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-300'
              }`}
            >
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900 mb-1">
                  {size}
                </div>
                <div className="text-xs text-gray-600">
                  NT$ {sizePrices[size as keyof typeof sizePrices]?.toLocaleString()}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          數量
        </h3>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <span className="text-lg font-medium text-gray-900">-</span>
          </button>
          <span className="text-lg font-medium text-gray-900 min-w-[2rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <span className="text-lg font-medium text-gray-900">+</span>
          </button>
        </div>
      </div>

      {/* Add-ons */}
      <div className="px-4 space-y-4 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          加購選項
        </h3>
        {/* Vase Option */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </div>
            <div>
              <h4 className="text-base font-semibold text-gray-900">
                花瓶 (+NT$ 200)
              </h4>
              <p className="text-sm text-gray-600">
                為您的花禮加上精美花瓶
              </p>
            </div>
          </div>
          <button
            onClick={() => setIncludeVase(!includeVase)}
            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
              includeVase
                ? 'border-gray-900 bg-gray-900'
                : 'border-gray-300'
            }`}
          >
            {includeVase && (
              <div className="w-4 h-4 bg-white rounded-full"></div>
            )}
          </button>
        </div>

        {/* Gift Message Option */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
              <Image
                src="/images/gift-message-icon.svg"
                alt="Gift Message"
                width={24}
                height={24}
              />
            </div>
            <div>
              <h4 className="text-base font-semibold text-gray-900">
                客製化卡片 (+NT$ 50)
              </h4>
              <p className="text-sm text-gray-600">
                附上您的專屬祝福訊息
              </p>
            </div>
          </div>
          <button
            onClick={() => setIncludeGiftMessage(!includeGiftMessage)}
            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
              includeGiftMessage
                ? 'border-gray-900 bg-gray-900'
                : 'border-gray-300'
            }`}
          >
            {includeGiftMessage && (
              <div className="w-4 h-4 bg-white rounded-full"></div>
            )}
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          商品詳情
        </h3>
        <div className="space-y-3 text-sm text-gray-700">
          <div>
            <span className="font-medium">照護說明：</span>
            <span>{details.care}</span>
          </div>
          <div>
            <span className="font-medium">配送資訊：</span>
            <span>{details.delivery}</span>
          </div>
          <div>
            <span className="font-medium">適用場合：</span>
            <span>{details.occasion}</span>
          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="px-4 pb-24">
        <div className="mb-4 p-4 bg-gray-50 rounded-xl">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">商品價格 ({selectedSize})：</span>
            <span className="font-medium">NT$ {sizePrices[selectedSize as keyof typeof sizePrices]?.toLocaleString()}</span>
          </div>
          {includeVase && (
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">花瓶：</span>
              <span className="font-medium">NT$ 200</span>
            </div>
          )}
          {includeGiftMessage && (
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">客製化卡片：</span>
              <span className="font-medium">NT$ 50</span>
            </div>
          )}
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">數量：</span>
            <span className="font-medium">× {quantity}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">總計：</span>
            <span className="text-lg font-bold text-primary-600">
              NT$ {((sizePrices[selectedSize as keyof typeof sizePrices] || 0) + (includeVase ? 200 : 0) + (includeGiftMessage ? 50 : 0)) * quantity}
            </span>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-base hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-3"
        >
          {isAdding ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>加入中...</span>
            </div>
          ) : (
            '加入購物車'
          )}
        </button>
        
        {/* 快速前往購物車按鈕 */}
        <button
          onClick={() => router.push('/cart')}
          className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-medium text-base hover:bg-gray-50 transition-colors bg-white"
        >
          查看購物車
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;