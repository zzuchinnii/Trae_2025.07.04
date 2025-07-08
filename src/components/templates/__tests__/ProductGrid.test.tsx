import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductGrid from '../ProductGrid';
import getProducts from '@/lib/actions/get-products';

jest.mock('../../molecules/ProductCard', () => {
  return {
    __esModule: true,
    default: ({ product }) => <div data-testid="product-card">{product.name}</div>,
  };
});



jest.mock('@/lib/actions/get-products', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('ProductGrid', () => {
  it('renders a list of products', async () => {
    const mockProducts = [
      {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
        image: '/image1.jpg',
        category: 'Category 1',
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        name: 'Product 2',
        description: 'Description 2',
        price: 200,
        image: '/image2.jpg',
        category: 'Category 2',
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    (getProducts as jest.Mock).mockResolvedValue(mockProducts);

    const resolvedJsx = await ProductGrid();
    render(resolvedJsx);

    const productCards = screen.getAllByTestId('product-card');
    expect(productCards).toHaveLength(mockProducts.length);
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });
});