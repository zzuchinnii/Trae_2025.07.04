import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FlowerButton from '../FlowerButton';
import { useRouter } from 'next/navigation';
import { getProductIdByFlower, isProductExists } from '@/lib/flowerProductMapping';

// 模擬 next/navigation 的 useRouter
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// 模擬 flowerProductMapping
jest.mock('@/lib/flowerProductMapping', () => ({
  getProductIdByFlower: jest.fn(),
  isProductExists: jest.fn(),
}));

describe('FlowerButton 元件', () => {
  const mockRouter = {
    push: jest.fn(),
  };
  
  beforeEach(() => {
    // 重置所有模擬函數
    jest.clearAllMocks();
    
    // 設置 useRouter 的返回值
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    
    // 設置 getProductIdByFlower 的返回值
    (getProductIdByFlower as jest.Mock).mockReturnValue('5');
    
    // 設置 isProductExists 的返回值
    (isProductExists as jest.Mock).mockReturnValue(true);
  });
  
  test('正確渲染花卉名稱', () => {
    render(<FlowerButton flowerName="紅玫瑰" index={0} />);
    
    // 檢查按鈕上的文字是否正確
    expect(screen.getByText('紅玫瑰')).toBeInTheDocument();
  });
  
  test('點擊按鈕時導向正確的產品頁面', () => {
    render(<FlowerButton flowerName="紅玫瑰" index={0} />);
    
    // 模擬點擊按鈕
    fireEvent.click(screen.getByText('紅玫瑰'));
    
    // 檢查是否調用了 getProductIdByFlower 函數
    expect(getProductIdByFlower).toHaveBeenCalledWith('紅玫瑰');
    
    // 檢查是否調用了 isProductExists 函數
    expect(isProductExists).toHaveBeenCalledWith('5');
    
    // 檢查是否導向了正確的產品頁面
    expect(mockRouter.push).toHaveBeenCalledWith('/product/5');
  });
  
  test('當產品不存在時導向產品列表頁面', () => {
    // 設置 isProductExists 返回 false
    (isProductExists as jest.Mock).mockReturnValue(false);
    
    render(<FlowerButton flowerName="不存在的花卉" index={0} />);
    
    // 模擬點擊按鈕
    fireEvent.click(screen.getByText('不存在的花卉'));
    
    // 檢查是否導向了產品列表頁面
    expect(mockRouter.push).toHaveBeenCalledWith('/products');
  });
});