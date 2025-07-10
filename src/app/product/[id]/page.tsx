'use client';

import React, { useState, useEffect } from 'react';
import ProductDetail from '../../../components/templates/ProductDetail';
import BottomNavigation from '../../../components/ui/BottomNavigation';

interface ProductPageProps {
  params: {
    id: string;
  };
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  details: {
    care: string;
    delivery: string;
    occasion: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`);
        if (!response.ok) {
          throw new Error('商品不存在');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (err) {
        setError(err instanceof Error ? err.message : '載入失敗');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">商品不存在</h2>
          <p className="text-gray-600">{error || '找不到指定的商品'}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <ProductDetail 
        productId={product.id}
        productName={product.name}
        description={product.description}
        images={product.images}
        price={product.price}
        sizes={product.sizes}
        details={product.details}
      />
      <BottomNavigation />
    </div>
  );
};

export default ProductPage;