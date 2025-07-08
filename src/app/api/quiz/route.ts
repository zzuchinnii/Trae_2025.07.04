import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Dummy product data - in a real app, this would come from a database
const products = [
  { id: '1', name: '經典紅玫瑰花束', description: '象徵熱情、浪漫與愛，適合用於情人節、紀念日、求婚等場合。' },
  { id: '2', name: '清新向日葵花籃', description: '代表陽光、開朗與忠誠，適合畢業典禮、開幕誌慶或給朋友打氣。' },
  { id: '3', name: '優雅百合花瓶', description: '純潔、高雅的象徵，常用於婚禮、探病或表達敬意。' },
  { id: '4', name: '浪漫鬱金香花盒', description: '愛的告白、永恆的祝福，適合送給戀人或摯友。' },
  { id: '5', name: '溫馨康乃馨花束', description: '代表母愛、溫情與祝福，是母親節或感謝長輩的首選。' },
];

export async function POST(request: Request) {
  try {
    const { answers } = await request.json();

    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return NextResponse.json({ error: 'Answers are required' }, { status: 400 });
    }

    const prompt = `
      你是一位專業的花藝設計師和送禮顧問。請根據以下客戶的回答，從提供的產品列表中推薦一款最適合的花禮，並說明推薦理由。

      客戶回答：
      1. 送花場合：${answers[0]}
      2. 喜歡色系：${answers[1]}
      3. 預算：${answers[2]}

      可選產品列表：
      ${products.map(p => `- ${p.name}: ${p.description}`).join('\n')}

      你的任務：
      1. 分析客戶的需求。
      2. 從列表中選擇一款最匹配的產品。
      3. 以 JSON 格式回傳結果，包含推薦產品的 id、name 和一段個人化的推薦語 (recommendation)。推薦語請以溫暖、專業的口吻撰寫，直接告訴客戶推薦哪款花，並解釋原因。

      JSON 格式範例：
      {
        "id": "1",
        "name": "經典紅玫瑰花束",
        "recommendation": "根據您的選擇，我們真誠推薦您『經典紅玫瑰花束』。它不僅完美契合您對熱情色系的偏好，更是紀念日表達愛意的最佳選擇，完全在您的預算之內。"
      }
    `;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'system', content: prompt }],
      response_format: { type: 'json_object' },
    });

    const result = completion.choices[0].message.content;

    if (!result) {
        return NextResponse.json({ error: 'Failed to get recommendation from OpenAI' }, { status: 500 });
    }

    return NextResponse.json(JSON.parse(result));

  } catch (error) {
    console.error('Error in quiz API:', error);
    return NextResponse.json({ error: 'An internal server error occurred' }, { status: 500 });
  }
}