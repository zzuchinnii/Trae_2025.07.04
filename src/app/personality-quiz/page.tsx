import React from 'react';
import BottomNavigation from '@/components/ui/BottomNavigation';
import PersonalityQuiz from '@/components/ui/PersonalityQuiz';

export default function PersonalityQuizPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pb-20">
      <div className="px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">
            🌸 心理測驗：找到你的命定花卉
          </h1>
          <p className="text-neutral-600 text-lg">
            透過深度心理分析，發現最能代表你個性特質的花卉類型
          </p>
        </div>
        <PersonalityQuiz />
      </div>
      <BottomNavigation />
    </main>
  );
}
