import React from 'react';
import BottomNavigation from '@/components/ui/BottomNavigation';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-20">
      <div className="px-4 py-8">
        <h1 className="text-2xl font-bold text-neutral-900 mb-6">個人資料</h1>
        
        <div className="space-y-6">
          {/* Profile Header */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 text-xl font-semibold">U</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">使用者</h2>
                <p className="text-neutral-600">user@example.com</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="divide-y divide-neutral-100">
              <div className="p-4 flex items-center justify-between">
                <span className="text-neutral-900">訂單記錄</span>
                <span className="text-neutral-400">›</span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-neutral-900">收藏清單</span>
                <span className="text-neutral-400">›</span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-neutral-900">地址管理</span>
                <span className="text-neutral-400">›</span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-neutral-900">設定</span>
                <span className="text-neutral-400">›</span>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <button className="w-full text-red-600 font-medium">
              登出
            </button>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </main>
  );
}