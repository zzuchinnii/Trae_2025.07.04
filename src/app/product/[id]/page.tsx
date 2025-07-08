import React from 'react';
import ProductDetail from '../../../components/templates/ProductDetail';
import BottomNavigation from '../../../components/ui/BottomNavigation';

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  // In a real app, you would fetch product data based on params.id
  // For now, we'll use default data from the ProductDetail component
  
  return (
    <div className="min-h-screen bg-white">
      <ProductDetail />
      <BottomNavigation />
    </div>
  );
};

export default ProductPage;