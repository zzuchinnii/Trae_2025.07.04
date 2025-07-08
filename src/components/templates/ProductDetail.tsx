'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../atoms/Button';

interface ProductDetailProps {
  productName?: string;
  description?: string;
  images?: string[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  productName = "Serene Bloom",
  description = "A tranquil arrangement featuring soft pastel hues and delicate blooms, perfect for expressing peace and admiration.",
  images = [
    "/images/serene-bloom-1.png",
    "/images/serene-bloom-2.png",
    "/images/serene-bloom-3.png"
  ]
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('Medium');
  const [includeVase, setIncludeVase] = useState<boolean>(false);
  const [includeGiftMessage, setIncludeGiftMessage] = useState<boolean>(false);

  const sizes = ['Small', 'Medium', 'Large'];

  const handleAddToCart = () => {
    console.log('Adding to cart:', {
      product: productName,
      size: selectedSize,
      vase: includeVase,
      giftMessage: includeGiftMessage
    });
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
      <div className="px-4 mb-3">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {productName}
        </h2>
        <p className="text-base text-gray-900 leading-6">
          {description}
        </p>
      </div>

      {/* Size Options */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Options
        </h3>
        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-xl border ${
                selectedSize === size
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-300'
              }`}
            >
              <span className="text-sm font-medium text-gray-900">
                {size}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      <div className="px-4 space-y-4 mb-8">
        {/* Vase Option */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </div>
            <div>
              <h4 className="text-base font-semibold text-gray-900">
                Vase
              </h4>
              <p className="text-sm text-gray-600">
                Add a vase to your order
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
                Gift Message
              </h4>
              <p className="text-sm text-gray-600">
                Include a personalized message
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

      {/* Add to Cart Button */}
      <div className="px-4 pb-8">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-base"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;