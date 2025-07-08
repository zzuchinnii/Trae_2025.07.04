import React from 'react';
import BottomNavigation from '@/components/ui/BottomNavigation';
import QuizForm from '@/components/ui/QuizForm';

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-20">
      <div className="px-4 py-8">
        <h1 className="text-2xl font-bold text-neutral-900 mb-6">
          花卉推薦測驗
        </h1>
        <QuizForm />
      </div>
      <BottomNavigation />
    </main>
  );
}