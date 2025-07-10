import { NextResponse } from 'next/server';

// Mock data for flower recommendations
const allRecommendations = [
  // 1000元以下
  { id: 1, name: '清新小花束', price: 680, image: '/placeholder.svg', description: '簡約清新，適合日常表達心意' },
  { id: 2, name: '溫馨康乃馨', price: 850, image: '/placeholder.svg', description: '溫暖的母愛象徵，表達感謝之情' },
  { id: 3, name: '可愛迷你花盒', price: 950, image: '/placeholder.svg', description: '精緻小巧，適合送給朋友' },
  
  // 1000-2000元
  { id: 4, name: '陽光滿溢', price: 1500, image: '/placeholder.svg', description: '明亮向日葵，帶來正能量' },
  { id: 5, name: '浪漫玫瑰花束', price: 1800, image: '/placeholder.svg', description: '經典紅玫瑰，表達深情愛意' },
  { id: 10, name: '優雅百合花束', price: 1200, image: '/placeholder.svg', description: '純潔百合，象徵高雅品味' },
  { id: 11, name: '繽紛混合花束', price: 1600, image: '/placeholder.svg', description: '多彩花材組合，充滿活力' },
  { id: 12, name: '典雅鬱金香', price: 1400, image: '/placeholder.svg', description: '荷蘭進口鬱金香，展現優雅' },
  
  // 2000-3000元
  { id: 6, name: '永恆愛戀', price: 2200, image: '/placeholder.svg', description: '精選花材，象徵永恆的愛' },
  { id: 7, name: '奢華花籃', price: 2800, image: '/placeholder.svg', description: '豪華花籃，適合重要場合' },
  { id: 13, name: '精緻蘭花組合', price: 2500, image: '/placeholder.svg', description: '高貴蘭花，彰顯品味' },
  { id: 14, name: '季節限定花束', price: 2300, image: '/placeholder.svg', description: '當季最美花材精選' },
  
  // 3000元以上
  { id: 8, name: '頂級花藝作品', price: 3500, image: '/placeholder.svg', description: '大師級花藝，展現尊貴品味' },
  { id: 9, name: '豪華慶典花束', price: 4200, image: '/placeholder.svg', description: '盛大場合的完美選擇' },
  { id: 15, name: '尊榮花禮盒', price: 3800, image: '/placeholder.svg', description: '頂級包裝，尊貴體驗' },
];

function filterByBudget(budget: string) {
  switch (budget) {
    case '$1000 以下':
      return allRecommendations.filter(item => item.price < 1000);
    case '$1000 - $2000':
      return allRecommendations.filter(item => item.price >= 1000 && item.price <= 2000);
    case '$2000 - $3000':
      return allRecommendations.filter(item => item.price > 2000 && item.price <= 3000);
    case '$3000 以上':
      return allRecommendations.filter(item => item.price > 3000);
    default:
      return allRecommendations.slice(0, 3); // 預設返回前3個
  }
}

export async function POST(request: Request) {
  try {
    const { answers } = await request.json();

    console.log('Received answers for recommendation:', answers);

    // 獲取預算答案（第4題，索引為3）
    const budgetAnswer = answers[3] || '$1000 - $2000'; // 預設值
    
    // 根據預算篩選推薦
    const filteredRecommendations = filterByBudget(budgetAnswer);
    
    // 嚴格按照預算範圍推薦，最多返回3個
    const result = filteredRecommendations.slice(0, 3);

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(result);
  } catch (error) {
    console.error('Recommendation API error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}