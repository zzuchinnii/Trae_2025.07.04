'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Heart } from 'lucide-react';

interface FlowerItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  occasions: string[];
  description: string;
}

interface OccasionFlowerGridProps {
  activeCategory: string;
}

const OccasionFlowerGrid: React.FC<OccasionFlowerGridProps> = ({ activeCategory }) => {
  const router = useRouter();

  const occasionFlowers: FlowerItem[] = [
    {
      id: 1,
      name: '生日驚喜花束',
      price: 45,
      originalPrice: 55,
      image: '/images/serene-bloom-1.png',
      occasions: ['生日慶祝', '節日祝福'],
      description: '繽紛色彩，為生日增添歡樂氣氛'
    },
    {
      id: 2,
      name: '浪漫紀念花束',
      price: 65,
      image: '/images/serene-bloom-2.png',
      occasions: ['紀念日', '婚禮慶典'],
      description: '經典紅玫瑰，見證愛情的美好時刻'
    },
    {
      id: 3,
      name: '感謝心意花籃',
      price: 38,
      image: '/images/serene-bloom-3.png',
      occasions: ['感謝致意', '開業祝賀'],
      description: '溫馨花籃，表達最真摯的謝意'
    },
    {
      id: 4,
      name: '康復祝福花束',
      price: 42,
      image: '/images/serene-bloom-4.png',
      occasions: ['探病慰問'],
      description: '清雅淡香，送上溫暖的關懷'
    },
    {
      id: 5,
      name: '節慶喜悅花籃',
      price: 58,
      image: '/images/serene-bloom-5.png',
      occasions: ['節日祝福', '開業祝賀'],
      description: '豐盛花籃，慶祝每個重要節日'
    },
    {
      id: 6,
      name: '開業大吉花籃',
      price: 88,
      image: '/images/serene-bloom-6.png',
      occasions: ['開業祝賀'],
      description: '氣派花籃，祝賀事業蒸蒸日上'
    },
    {
      id: 7,
      name: '畢業榮耀花束',
      price: 48,
      image: '/images/serene-bloom-7.png',
      occasions: ['畢業典禮'],
      description: '向日葵花束，象徵前程似錦'
    },
    {
      id: 8,
      name: '婚禮祝福花束',
      price: 78,
      image: '/images/serene-bloom-8.png',
      occasions: ['婚禮慶典'],
      description: '純白花束，見證愛情的神聖時刻'
    }
  ];

  const filteredFlowers = occasionFlowers.filter(flower => 
    flower.occasions.includes(activeCategory)
  );

  const handleFlowerClick = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="px-4 py-6">
      {/* Results count */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          為「{activeCategory}」找到 {filteredFlowers.length} 個商品
        </p>
      </div>

      {/* Flower Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredFlowers.map((flower) => (
          <div
            key={flower.id}
            onClick={() => handleFlowerClick(flower.id)}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <Image
                src={flower.image}
                alt={flower.name}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
              
              {/* Discount Badge */}
              {flower.originalPrice && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  省 ${flower.originalPrice - flower.price}
                </div>
              )}
              
              {/* Heart Icon */}
              <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            {/* Product Info */}
            <div className="p-3">
              <h3 className="font-medium text-gray-800 text-sm mb-1 line-clamp-2">
                {flower.name}
              </h3>
              
              <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                {flower.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-800">
                    ${flower.price}
                  </span>
                  {flower.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${flower.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Occasion Tags */}
              <div className="mt-2 flex flex-wrap gap-1">
                {flower.occasions.slice(0, 2).map((occasion) => (
                  <span
                    key={occasion}
                    className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded"
                  >
                    {occasion}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredFlowers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-2">
            <Heart className="w-12 h-12 mx-auto" />
          </div>
          <p className="text-gray-500 text-sm">
            暫時沒有適合「{activeCategory}」的花卉商品
          </p>
          <p className="text-gray-400 text-xs mt-1">
            請嘗試其他場合分類
          </p>
        </div>
      )}
    </div>
  );
};

export default OccasionFlowerGrid;