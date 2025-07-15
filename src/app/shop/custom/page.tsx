'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import BottomNavigation from '@/components/ui/BottomNavigation';
import Image from 'next/image';

const CustomPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    occasion: '',
    budget: '',
    style: '',
    colors: [],
    message: '',
    contact: ''
  });

  // 場合選項
  const occasions = [
    '生日慶祝', '週年紀念', '求婚告白', '婚禮佈置',
    '開幕祝賀', '喪禮悼念', '感謝致意', '其他'
  ];

  // 預算選項
  const budgets = [
    '1000元以下', '1000-2000元', '2000-3000元', '3000元以上'
  ];

  // 風格選項
  const styles = [
    '浪漫典雅', '現代簡約', '鄉村自然', '奢華大器', '可愛溫馨'
  ];

  // 顏色選項
  const colorOptions = [
    { id: 'red', name: '紅色系', color: '#E63946' },
    { id: 'pink', name: '粉色系', color: '#FFB6C1' },
    { id: 'white', name: '白色系', color: '#F8F9FA' },
    { id: 'yellow', name: '黃色系', color: '#FFD166' },
    { id: 'purple', name: '紫色系', color: '#9D4EDD' },
    { id: 'blue', name: '藍色系', color: '#457B9D' },
    { id: 'orange', name: '橙色系', color: '#F77F00' },
    { id: 'green', name: '綠色系', color: '#2A9D8F' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleColorToggle = (colorId: string) => {
    setFormData(prev => {
      const colors = [...prev.colors] as string[];
      if (colors.includes(colorId)) {
        return {
          ...prev,
          colors: colors.filter(id => id !== colorId)
        };
      } else {
        return {
          ...prev,
          colors: [...colors, colorId]
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 這裡可以處理表單提交，例如發送到後端API
    alert('您的客製花禮需求已提交，我們將盡快與您聯繫！');
    router.push('/shop');
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <div className="flex items-center">
          <button 
            onClick={() => router.back()}
            className="w-6 h-6 mr-3"
          >
            <Image
              src="/images/back-arrow.svg"
              alt="Back"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="flex-1 text-center pr-9">
          <h1 className="text-lg font-bold text-[#171212]">
            客製工作室
          </h1>
        </div>
      </div>

      {/* Custom Form */}
      <div className="px-4 py-4">
        <div className="bg-[#F9F5F0] rounded-xl p-4 mb-4">
          <h2 className="text-lg font-semibold text-[#8A6170] mb-2">打造您的專屬花禮</h2>
          <p className="text-sm text-[#8A6170] mb-4">填寫以下表單，我們的花藝師將為您量身打造獨一無二的花禮</p>
          
          <form onSubmit={handleSubmit}>
            {/* 場合選擇 */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#171212] mb-2">送花場合</label>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A6170]"
                required
              >
                <option value="">請選擇場合</option>
                {occasions.map(occasion => (
                  <option key={occasion} value={occasion}>{occasion}</option>
                ))}
              </select>
            </div>

            {/* 預算選擇 */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#171212] mb-2">預算範圍</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A6170]"
                required
              >
                <option value="">請選擇預算</option>
                {budgets.map(budget => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </select>
            </div>

            {/* 風格選擇 */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#171212] mb-2">花禮風格</label>
              <select
                name="style"
                value={formData.style}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A6170]"
                required
              >
                <option value="">請選擇風格</option>
                {styles.map(style => (
                  <option key={style} value={style}>{style}</option>
                ))}
              </select>
            </div>

            {/* 顏色選擇 */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#171212] mb-2">偏好顏色（可多選）</label>
              <div className="grid grid-cols-4 gap-2">
                {colorOptions.map(color => (
                  <div 
                    key={color.id}
                    onClick={() => handleColorToggle(color.id)}
                    className={`flex flex-col items-center p-2 rounded-lg cursor-pointer transition-all ${(formData.colors as string[]).includes(color.id) ? 'ring-2 ring-[#8A6170]' : ''}`}
                  >
                    <div 
                      className="w-8 h-8 rounded-full mb-1"
                      style={{ backgroundColor: color.color }}
                    ></div>
                    <span className="text-xs">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 特殊需求 */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#171212] mb-2">特殊需求或留言</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A6170]"
                placeholder="請描述您的特殊需求或想法..."
              ></textarea>
            </div>

            {/* 聯絡方式 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#171212] mb-2">聯絡方式</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A6170]"
                placeholder="電話或Email"
                required
              />
            </div>

            {/* 提交按鈕 */}
            <button
              type="submit"
              className="w-full bg-[#8A6170] text-white py-3 rounded-lg font-medium hover:bg-[#7D5463] transition-colors"
            >
              提交客製需求
            </button>
          </form>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default CustomPage;