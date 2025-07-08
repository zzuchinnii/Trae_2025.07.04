'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '../atoms/Button';
import { useCartStore, Product } from '@/lib/store';

const ProductCard: React.FC<Product> = (product) => {
  const { id, name, price, imageUrl } = product;
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="aspect-w-3 aspect-h-4 bg-neutral-100 sm:aspect-none sm:h-60 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={400}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-neutral-900 hover:text-primary-600 transition-colors duration-200">
          <Link href={`/product/${id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </Link>
        </h3>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-base font-semibold text-primary-600">NT$ {price}</p>
        </div>
      </div>
      <div className="p-4 pt-0">
        <Button 
          variant="primary" 
          onClick={() => addToCart(product)} 
          className="w-full hover:bg-primary-600 focus:ring-primary-500"
          size="md"
        >
          加入購物車
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;