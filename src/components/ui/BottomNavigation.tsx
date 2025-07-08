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
    label: 'Home',
    href: '/',
    icon: '/icons/home-icon.svg'
  },
  {
    id: 'shop',
    label: 'Shop',
    href: '/shop',
    icon: '/icons/shop-icon.svg'
  },
  {
    id: 'quiz',
    label: 'Quiz',
    href: '/quiz',
    icon: '/icons/quiz-icon.svg'
  },
  {
    id: 'profile',
    label: 'Profile',
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
                  className={`transition-all duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-70'
                  }`}
                  style={{
                    filter: isActive 
                      ? 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' 
                      : 'brightness(0) saturate(100%) invert(60%) sepia(8%) saturate(872%) hue-rotate(169deg) brightness(99%) contrast(86%)'
                  }}
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