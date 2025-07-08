'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../atoms/Button';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  color: string;
}

const featuredFlowers: FeatureCard[] = [
  {
    id: 'lilies',
    title: 'Elegant Lilies',
    description: 'Symbolizing purity and grace',
    color: 'bg-purple-100'
  },
  {
    id: 'tulips',
    title: 'Vibrant Tulips',
    description: 'Representing perfect love',
    color: 'bg-yellow-100'
  },
  {
    id: 'roses',
    title: 'Romantic Roses',
    description: 'Classic symbol of love and beauty',
    color: 'bg-pink-100'
  }
];

export default function HeroSection() {
  return (
    <div className="bg-white px-4 py-8 space-y-8">
      {/* Header with Search */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-900">Petaloom</h1>
        <div className="flex items-center bg-neutral-100 rounded-xl px-4 py-2">
          <Image
            src="/icons/search-icon.svg"
            alt="Search"
            width={18}
            height={18}
            className="opacity-60"
          />
        </div>
      </div>

      {/* Spring Blooms Banner */}
      <div className="bg-accent-500 text-white rounded-xl px-6 py-4">
        <h2 className="text-lg font-semibold">Spring Blooms</h2>
      </div>



      {/* Featured Flowers Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-neutral-900">Featured Flowers</h3>
        
        <div className="grid grid-cols-1 gap-4">
          {featuredFlowers.map((flower) => (
            <div 
              key={flower.id}
              className="bg-white border border-neutral-200 rounded-lg p-4 space-y-3"
            >
              <div className={`${flower.color} rounded-xl h-32 w-full`}></div>
              <div className="space-y-1">
                <h5 className="font-semibold text-neutral-900">{flower.title}</h5>
                <p className="text-sm text-neutral-600">{flower.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}