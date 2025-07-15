'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import FlowerButton from './FlowerButton';

// 定義問題類型
interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    scores: {
      energy: number;      // 活力度 (內向 vs 外向)
      emotion: number;     // 情感度 (理性 vs 感性)
      social: number;      // 社交度 (獨立 vs 合群)
      adventure: number;   // 冒險度 (穩定 vs 冒險)
    };
  }[];
}

// 定義花卉個性類型
interface PersonalityType {
  id: string;
  name: string;
  description: string;
  traits: string[];
  flowers: string[];
  colors: string[];
  occasions: string[];
  careGuide: string;
}

// 心理測驗問題
const questions: Question[] = [
  {
    id: 1,
    text: "在聚會中，你通常會：",
    options: [
      { text: "主動與陌生人交談", scores: { energy: 3, emotion: 0, social: 3, adventure: 2 } },
      { text: "與熟悉的朋友聊天", scores: { energy: 1, emotion: 1, social: 1, adventure: 0 } },
      { text: "安靜地觀察周圍", scores: { energy: -2, emotion: 2, social: -2, adventure: -1 } },
      { text: "提早離開", scores: { energy: -3, emotion: 0, social: -3, adventure: -2 } }
    ]
  },
  {
    id: 2,
    text: "選擇度假方式時，你偏好：",
    options: [
      { text: "刺激的冒險旅行", scores: { energy: 2, emotion: -1, social: 1, adventure: 3 } },
      { text: "文化藝術之旅", scores: { energy: 0, emotion: 3, social: 0, adventure: 1 } },
      { text: "安靜的海邊度假", scores: { energy: -2, emotion: 2, social: -1, adventure: -2 } },
      { text: "在家休息放鬆", scores: { energy: -3, emotion: 1, social: -2, adventure: -3 } }
    ]
  },
  {
    id: 3,
    text: "面對困難時，你會：",
    options: [
      { text: "立即行動解決", scores: { energy: 3, emotion: -2, social: 0, adventure: 2 } },
      { text: "尋求朋友建議", scores: { energy: 1, emotion: 1, social: 3, adventure: 0 } },
      { text: "仔細思考分析", scores: { energy: -1, emotion: -1, social: -1, adventure: -1 } },
      { text: "先處理情緒再行動", scores: { energy: -2, emotion: 3, social: 0, adventure: -2 } }
    ]
  },
  {
    id: 4,
    text: "你的理想週末是：",
    options: [
      { text: "參加熱鬧的活動", scores: { energy: 3, emotion: 0, social: 3, adventure: 2 } },
      { text: "與親密朋友聚會", scores: { energy: 1, emotion: 2, social: 2, adventure: 0 } },
      { text: "獨自享受興趣愛好", scores: { energy: -2, emotion: 1, social: -3, adventure: 1 } },
      { text: "在家看書或電影", scores: { energy: -3, emotion: 2, social: -2, adventure: -2 } }
    ]
  },
  {
    id: 5,
    text: "在你的工作中，你更重視：",
    options: [
      { text: "團隊合作與溝通", scores: { energy: 2, emotion: 1, social: 3, adventure: 0 } },
      { text: "創新與挑戰", scores: { energy: 1, emotion: 0, social: 0, adventure: 3 } },
      { text: "穩定與安全感", scores: { energy: -2, emotion: 0, social: 0, adventure: -3 } },
      { text: "個人成長與學習", scores: { energy: 0, emotion: 2, social: -1, adventure: 1 } }
    ]
  },
  {
    id: 6,
    text: "選擇朋友時，你看重：",
    options: [
      { text: "有趣幽默的個性", scores: { energy: 3, emotion: 1, social: 2, adventure: 2 } },
      { text: "深度的情感連結", scores: { energy: -1, emotion: 3, social: 1, adventure: 0 } },
      { text: "可靠值得信賴", scores: { energy: 0, emotion: 0, social: 1, adventure: -2 } },
      { text: "獨立有主見", scores: { energy: 1, emotion: -1, social: -2, adventure: 1 } }
    ]
  },
  {
    id: 7,
    text: "面對新環境時，你會：",
    options: [
      { text: "興奮地探索一切", scores: { energy: 3, emotion: 0, social: 2, adventure: 3 } },
      { text: "謹慎地觀察適應", scores: { energy: -1, emotion: 1, social: 0, adventure: -1 } },
      { text: "尋找熟悉的元素", scores: { energy: -2, emotion: 2, social: 1, adventure: -2 } },
      { text: "感到不安想離開", scores: { energy: -3, emotion: 1, social: -2, adventure: -3 } }
    ]
  },
  {
    id: 8,
    text: "你的決策方式通常是：",
    options: [
      { text: "憑直覺快速決定", scores: { energy: 2, emotion: 2, social: 0, adventure: 2 } },
      { text: "分析利弊後決定", scores: { energy: 0, emotion: -2, social: 0, adventure: -1 } },
      { text: "徵詢他人意見", scores: { energy: 0, emotion: 1, social: 3, adventure: 0 } },
      { text: "避免做重大決定", scores: { energy: -3, emotion: 0, social: -1, adventure: -3 } }
    ]
  }
];



export default function PersonalityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [scores, setScores] = useState({ energy: 0, emotion: 0, social: 0, adventure: 0 });
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // 處理答案選擇
  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers.slice(0, currentQuestion), optionIndex];
    setAnswers(newAnswers);

    // 根據目前所有答案重新計算分數
    const newScores = newAnswers.reduce((acc, answerIndex, questionIndex) => {
      const question = questions[questionIndex];
      const option = question.options[answerIndex];
      acc.energy += option.scores.energy;
      acc.emotion += option.scores.emotion;
      acc.social += option.scores.social;
      acc.adventure += option.scores.adventure;
      return acc;
    }, { energy: 0, emotion: 0, social: 0, adventure: 0 });

    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      submitQuiz(newScores, newAnswers);
    }
  };

  // 提交測驗並獲取結果
  const submitQuiz = async (finalScores: typeof scores, finalAnswers: number[]) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/personality-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ scores: finalScores, answers: finalAnswers }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '無法獲取分析結果');
      }

      const data = await response.json();
      if (data.success) {
        setResult(data.result);
        setIsCompleted(true);
      } else {
        throw new Error(data.error || '分析時發生未知錯誤');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 重新開始測驗
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setScores({ energy: 0, emotion: 0, social: 0, adventure: 0 });
    setIsCompleted(false);
    setResult(null);
    setError(null);
  };

  // 顯示結果頁面
  if (isCompleted && result) {
    const { personalityType, recommendations } = result;
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🌸</div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-2">
            你的花卉個性：{personalityType?.name}
          </h2>
          <p className="text-lg text-neutral-600">
            {personalityType?.description}
          </p>
        </div>

        <div className="space-y-6">
          {/* 個性特質 */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">🎭 個性特質</h3>
            <div className="flex flex-wrap gap-2">
              {personalityType?.traits?.map((trait: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* 推薦花卉 */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">🌺 推薦花卉</h3>
            <div className="grid grid-cols-2 gap-2">
              {personalityType?.flowers?.map((flower: string, index: number) => (
                <FlowerButton 
                  key={index} 
                  flowerName={flower} 
                  index={index} 
                />
              ))}
            </div>
          </div>

          {/* 色彩搭配 */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">🎨 色彩搭配</h3>
            <div className="flex gap-2">
              {personalityType?.colors?.map((color: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* 適合場合 */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">✨ 適合場合</h3>
            <div className="flex flex-wrap gap-2">
              {recommendations?.occasions?.map((occasion: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  {occasion}
                </span>
              ))}
            </div>
          </div>

          {/* 照護指南 */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">🌱 照護指南</h3>
            <p className="text-neutral-600 bg-blue-50 p-4 rounded-lg">
              {personalityType?.careGuide}
            </p>
          </div>
        </div>

        {/* 操作按鈕 */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => {
              // 根據花卉個性類型選擇對應的產品ID
              let productId = '1'; // 預設產品ID
              
              // 根據個性類型選擇對應的產品
              switch(personalityType?.id) {
                case 'passionate': // 熱情奔放型
                  productId = '4'; // 陽光滿溢 (向日葵)
                  break;
                case 'gentle': // 溫柔療癒型
                  productId = '10'; // 優雅百合花束
                  break;
                case 'romantic': // 浪漫優雅型
                  productId = '5'; // 浪漫玫瑰花束
                  break;
                case 'innocent': // 純真可愛型
                  productId = '3'; // 可愛迷你花盒
                  break;
                case 'mysterious': // 神秘內斂型
                  productId = '13'; // 精緻蘭花組合
                  break;
                case 'warm': // 溫暖關懷型
                  productId = '2'; // 溫馨康乃馨
                  break;
                default:
                  productId = '1'; // 清新小花束
              }
              
              // 導向特定產品頁面
              router.push(`/product/${productId}`);
            }}
            className="flex-1 bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            🛒 購買推薦花卉
          </button>
          <button
            onClick={resetQuiz}
            className="flex-1 bg-neutral-200 text-neutral-800 py-3 px-6 rounded-lg font-semibold hover:bg-neutral-300 transition-colors"
          >
            🔄 重新測驗
          </button>
        </div>
      </div>
    );
  }

  // 顯示測驗問題
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      {/* 進度條 */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-neutral-600">
            問題 {currentQuestion + 1} / {questions.length}
          </span>
          <span className="text-sm text-neutral-600">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-neutral-200 rounded-full h-2">
          <div 
            className="bg-pink-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* 問題 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">
          {questions[currentQuestion].text}
        </h2>
        
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full p-4 text-left bg-neutral-50 hover:bg-pink-50 border border-neutral-200 hover:border-pink-300 rounded-lg transition-all duration-200 hover:shadow-md"
            >
              <span className="text-neutral-800 font-medium">{option.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 返回按鈕 */}
      <div className="flex justify-between items-center mt-8">
        {currentQuestion > 0 ? (
          <button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="text-neutral-600 hover:text-neutral-800 transition-colors"
          >
            ← 上一題
          </button>
        ) : (
          <div></div> // 佔位符，確保 "下一題" 按鈕在右邊
        )}

        {currentQuestion < questions.length - 1 && answers[currentQuestion] !== undefined && (
           <button
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            className="bg-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            下一題 →
          </button>
        )}
      </div>
    </div>
  );
}