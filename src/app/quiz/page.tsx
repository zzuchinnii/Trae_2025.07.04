'use client';

import { useState } from 'react';

const questions = [
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

const QuizPage = () => {
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
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">心意測驗找花</h1>
      {isFinished ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">感謝您的填寫！</h2>
          <p className="text-gray-600 mb-8">正在為您尋找最適合的花禮...</p>
          {isLoading && <p>載入中...</p>}
          {!isLoading && recommendations.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {recommendations.map(rec => (
                <div key={rec.id} className="border rounded-lg p-4 shadow-lg">
                  <div className="w-full h-48 bg-gray-200 mb-4"></div> {/* Placeholder for image */}
                  <h3 className="text-lg font-semibold">{rec.name}</h3>
                  <p className="text-gray-600">${rec.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">{questions[currentQuestion].question}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full bg-pink-100 text-pink-800 px-4 py-3 rounded-md hover:bg-pink-200 transition-colors duration-300"
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>第 {currentQuestion + 1} / {questions.length} 題</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;