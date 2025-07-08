'use client';

import React, { useState } from 'react';
import Button from '../atoms/Button';

interface Question {
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    question: '您想送花的對象是誰？',
    options: ['情人', '朋友', '家人', '長輩', '自己'],
  },
  {
    question: '這次送花的場合是？',
    options: ['生日', '紀念日', '感謝', '探病', '日常驚喜'],
  },
  {
    question: '您偏好的花禮風格是？',
    options: ['浪漫優雅', '活潑可愛', '簡約自然', '奢華大氣'],
  },
  {
    question: '您的預算大約是多少？',
    options: ['$1000 以下', '$1000 - $2000', '$2000 - $3000', '$3000 以上'],
  },
];

export default function QuizForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
      setIsLoading(true);
      fetch('/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers: newAnswers }),
      })
        .then(res => res.json())
        .then(data => {
          setRecommendations(data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Failed to get recommendations:', error);
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {isFinished ? (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">感謝您的填寫！</h2>
          <p className="text-neutral-600 mb-6">正在為您尋找最適合的花禮...</p>
          
          {isLoading && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          )}
          
          {!isLoading && recommendations.length > 0 && (
            <div className="space-y-4 mt-6">
              <h3 className="text-lg font-semibold text-neutral-900">為您推薦</h3>
              <div className="grid grid-cols-1 gap-4">
                {recommendations.map(rec => (
                  <div key={rec.id} className="border border-neutral-200 rounded-lg p-4 flex items-center space-x-4">
                    <div className="w-20 h-20 bg-neutral-100 rounded-md flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-neutral-900">{rec.name}</h4>
                      <p className="text-neutral-600 text-sm">{rec.description}</p>
                      <p className="text-primary-600 font-medium mt-1">${rec.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">{questions[currentQuestion].question}</h2>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full bg-neutral-50 hover:bg-neutral-100 text-neutral-900 px-4 py-3 rounded-lg border border-neutral-200 text-left transition-colors duration-200"
              >
                {option}
              </button>
            ))}
          </div>
          
          <div className="mt-6 text-center text-sm text-neutral-500">
            <p>第 {currentQuestion + 1} / {questions.length} 題</p>
          </div>
        </div>
      )}
    </div>
  );
}