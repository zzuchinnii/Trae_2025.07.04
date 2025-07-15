'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getProductIdByFlower, isProductExists } from '@/lib/flowerProductMapping';
import { getImageByFlower } from '@/lib/flowerImageMapping';

interface FlowerButtonProps {
  flowerName: string;
  index: number;
}

/**
 * 花卉按鈕元件
 * 顯示花卉名稱並在點擊時導向對應的產品頁面
 */
const FlowerButton: React.FC<FlowerButtonProps> = ({ flowerName, index }) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const colors = ['bg-green-50', 'bg-pink-50', 'bg-purple-50', 'bg-blue-50'];
  const colorClass = colors[index % colors.length];
  
  /**
   * 處理按鈕點擊事件
   * 獲取對應的產品 ID 並導向產品頁面
   */
  const handleClick = () => {
    try {
      const productId = getProductIdByFlower(flowerName);
      
      // 檢查產品是否存在
      if (isProductExists(productId)) {
        router.push(`/product/${productId}`);
      } else {
        // 如果產品不存在，顯示錯誤訊息
        console.warn(`產品 ID ${productId} 不存在，導向產品列表頁面`);
        setError(`找不到 ${flowerName} 的產品資訊`);
        setTimeout(() => setError(null), 3000); // 3秒後清除錯誤訊息
        router.push('/products');
      }
    } catch (err) {
      console.error('導向產品頁面時發生錯誤:', err);
      setError('發生錯誤，請稍後再試');
      setTimeout(() => setError(null), 3000); // 3秒後清除錯誤訊息
    }
  };
  
  // 獲取花卉對應的圖片路徑
  const imagePath = getImageByFlower(flowerName);
  console.log(`花卉 ${flowerName} 的圖片路徑:`, imagePath); // 用於調試
  
  // 確保圖片路徑是絕對路徑
  const absoluteImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  
  // 構建完整的 URL
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullImageUrl = `${baseUrl}${absoluteImagePath}`;
  console.log(`花卉 ${flowerName} 的完整圖片 URL:`, fullImageUrl); // 用於調試

  // 使用 useEffect 檢查圖片是否存在
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      console.log(`花卉 ${flowerName} 的圖片載入成功`);
    };
    img.onerror = () => {
      setImageLoaded(false);
      console.error(`花卉 ${flowerName} 的圖片載入失敗:`, fullImageUrl);
    };
    img.src = fullImageUrl;
  }, [flowerName, fullImageUrl]);

  return (
    <div className="relative">
      <button 
        className={`${colorClass} p-3 hover:brightness-95 rounded-lg text-center transition-all hover:shadow-md overflow-hidden`}
        onClick={handleClick}
        aria-label={`查看${flowerName}相關產品`}
      >
        <div className="flex flex-col items-center space-y-2">
          <div 
            className="relative w-full h-24 rounded-md overflow-hidden bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(${fullImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <span className="text-xs text-gray-500">圖片載入中...</span>
              </div>
            )}
          </div>
          <span className="text-green-800 font-medium z-10">{flowerName}</span>
        </div>
      </button>
      {error && (
        <div className="absolute top-full left-0 right-0 mt-1 p-2 bg-red-100 text-red-700 text-xs rounded shadow-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default FlowerButton;