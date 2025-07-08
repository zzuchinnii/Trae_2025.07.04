'use client';

import { useState } from 'react';
import Button from '../atoms/Button';

const questions = [
  {
    question: '這次送花的場合是？',
    options: ['生日', '紀念日', '感謝', '探病', '純粹想給個驚喜'],
  },
  {
    question: '收花的人喜歡什麼色系？',
    options: ['熱情的紅色系', '溫暖的黃色系', '浪漫的粉色系', '優雅的紫色系', '清新的藍白色系'],
  },
  {
    question: '你的預算大約是多少？',
    options: ['NT$1000 以下', 'NT$1000 - $1500', 'NT$1500 - $2000', 'NT$2000 以上', '預算無上限'],
  },
];

export default function QuizTemplate() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Last question, submit for analysis
      getFlowerSuggestion(newAnswers);
    }
  };

  const getFlowerSuggestion = async (finalAnswers: string[]) => {
    setLoading(true);
    setResult('');
    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers: finalAnswers }),
      });

      if (!response.ok) {
        throw new Error('Failed to get suggestion');
      }

      const data = await response.json();
      setResult(data.recommendation);

    } catch (error) {
      console.error(error);
      setResult('抱歉，分析時發生錯誤，請稍後再試。');
    } finally {
      setLoading(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult('');
    setLoading(false);
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">心意測驗找花</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          回答幾個簡單問題，讓我們為您找到最適合的花禮。
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        {result ? (
          <div className='text-center'>
            <h3 className='text-xl font-semibold text-gray-800'>為您推薦：</h3>
            <p className='mt-4 text-lg text-gray-700'>{result}</p>
            <Button onClick={resetQuiz} className='mt-8'>再測一次</Button>
          </div>
        ) : loading ? (
            <div className='text-center'>
                <p className='text-lg text-gray-700'>正在為您分析最適合的花禮...</p>
            </div>
        ) : (
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              問題 {currentQuestion + 1}/{questions.length}
            </h3>
            <p className="mt-1 text-lg text-gray-800">{questions[currentQuestion].question}</p>
            <div className="mt-8 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
              {questions[currentQuestion].options.map((option) => (
                <Button key={option} variant="accent" onClick={() => handleAnswer(option)}>
                  {option}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}