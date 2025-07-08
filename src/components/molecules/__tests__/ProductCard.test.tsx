import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard';
import { useCartStore } from '@/lib/store';
import { Product } from '@/lib/types';

// Mock the useCartStore hook
jest.mock('@/lib/store');

// Mock next/image and next/link
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));



jest.mock('../../atoms/Button', () => {
  const Button = ({ children, onClick, className }) => (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
  Button.displayName = 'Button';
  return {
    __esModule: true,
    default: Button,
  };
});

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => <a href={href}>{children}</a>,
}));

describe('ProductCard', () => {
  const mockProduct: Product = {
    id: '1',
    name: 'Test Flower',
    price: 10.99,
    imageUrl: '/test-flower.jpg',
    description: 'A beautiful test flower',
    stock: 10,
  };

  const mockAddToCart = jest.fn();

  beforeEach(() => {
        (useCartStore as jest.Mock).mockImplementation((selector) => {
      const state = {
        addToCart: mockAddToCart,
      };
      return selector(state);
    });
    mockAddToCart.mockClear();
  });

  it('renders product information correctly', () => {
    render(<ProductCard {...mockProduct} />);

    expect(screen.getByText('Test Flower')).toBeInTheDocument();
    expect(screen.getByText('NT$ 10.99')).toBeInTheDocument();
    const image = screen.getByAltText('Test Flower');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-flower.jpg');
  });

  it('calls addToCart when the button is clicked', () => {
    render(<ProductCard {...mockProduct} />);

        const button = screen.getByRole('button', { name: /加入購物車/i });
    fireEvent.click(button);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });

  it('links to the correct product page', () => {
    render(<ProductCard {...mockProduct} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/product/1');
  });
});