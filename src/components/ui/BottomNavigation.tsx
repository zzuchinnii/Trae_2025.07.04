'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  {
    id: 'home',
    label: '首頁',
    href: '/',
    icon: '/icons/home-icon.svg'
  },
  {
    id: 'shop',
    label: '商店',
    href: '/shop',
    icon: '/icons/shop-icon.svg'
  },
  {
    id: 'cart',
    label: '購物車',
    href: '/cart',
    icon: '/icons/cart-icon.svg'
  },
  {
    id: 'profile',
    label: '個人',
    href: '/profile',
    icon: '/icons/profile-icon.svg'
  }
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center p-2 rounded-3xl transition-all duration-200 ${
                isActive 
                  ? 'bg-primary-50 text-primary-600' 
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <div className="w-6 h-6 mb-1 relative">
                <Image
                  src={item.icon}
                  alt={`${item.label} icon`}
                  width={24}
                  height={24}
                  className={`transition-all duration-200 ${isActive ? 'text-primary-600' : 'text-neutral-500'}`}
                />
              </div>
              <span className={`text-xs font-medium transition-all duration-200 ${
                isActive ? 'text-primary-600' : 'text-neutral-500'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}