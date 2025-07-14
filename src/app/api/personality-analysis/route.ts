import { NextRequest, NextResponse } from 'next/server';

// 定義個性類型介面
interface PersonalityType {
  id: string;
  name: string;
  description: string;
  traits: string[];
  flowers: string[];
  colors: string[];
  occasions: string[];
  careGuide: string;
  flowerRecommendations: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  }[];
}

// 花卉個性類型定義（與前端保持一致）
const personalityTypes: PersonalityType[] = [
  {
    id: 'passionate',
    name: '熱情奔放型',
    description: '如向日葵般充滿活力，總是散發著正能量',
    traits: ['外向活潑', '樂觀積極', '富有感染力', '喜歡冒險'],
    flowers: ['向日葵', '紅玫瑰', '橙色鬱金香', '火鶴花'],
    colors: ['橙色', '紅色', '黃色'],
    occasions: ['慶祝活動', '聚會派對', '鼓勵祝福'],
    careGuide: '需要充足陽光和定期澆水，就像你需要社交和新鮮體驗一樣。',
    flowerRecommendations: [
      {
        id: 1,
        name: '向日葵花束',
        price: 1200,
        image: '/images/sunflower-bouquet.jpg',
        description: '充滿活力的向日葵，象徵著熱情與正能量'
      },
      {
        id: 2,
        name: '紅玫瑰花束',
        price: 1800,
        image: '/images/red-rose-bouquet.jpg',
        description: '經典紅玫瑰，展現你的熱情與魅力'
      }
    ]
  },
  {
    id: 'gentle',
    name: '溫柔療癒型',
    description: '如薰衣草般寧靜溫和，帶給人心靈的平靜',
    traits: ['溫和體貼', '善於傾聽', '內心平靜', '富有同理心'],
    flowers: ['薰衣草', '白玫瑰', '滿天星', '洋甘菊'],
    colors: ['淡紫色', '白色', '淡藍色'],
    occasions: ['安慰慰問', '療癒空間', '冥想放鬆'],
    careGuide: '喜歡溫和的環境，避免強烈刺激，需要耐心細心的照料。',
    flowerRecommendations: [
      {
        id: 3,
        name: '薰衣草花束',
        price: 900,
        image: '/images/lavender-bouquet.jpg',
        description: '寧靜的薰衣草，帶來心靈的平靜與療癒'
      },
      {
        id: 4,
        name: '白玫瑰花束',
        price: 1500,
        image: '/images/white-rose-bouquet.jpg',
        description: '純潔的白玫瑰，象徵著溫柔與純真'
      }
    ]
  },
  {
    id: 'romantic',
    name: '浪漫優雅型',
    description: '如粉玫瑰般優雅迷人，充滿浪漫情懷',
    traits: ['優雅迷人', '浪漫感性', '注重美感', '情感豐富'],
    flowers: ['粉玫瑰', '牡丹', '櫻花', '康乃馨'],
    colors: ['粉色', '淡紫色', '珊瑚色'],
    occasions: ['浪漫約會', '紀念日', '表達愛意'],
    careGuide: '需要精心呵護和美麗的環境，就像你對生活品質的追求。',
    flowerRecommendations: [
      {
        id: 5,
        name: '粉玫瑰花束',
        price: 1600,
        image: '/images/pink-rose-bouquet.jpg',
        description: '浪漫的粉玫瑰，完美詮釋你的優雅氣質'
      },
      {
        id: 6,
        name: '牡丹花束',
        price: 2200,
        image: '/images/peony-bouquet.jpg',
        description: '華麗的牡丹，展現你的高貴與浪漫'
      }
    ]
  },
  {
    id: 'innocent',
    name: '純真可愛型',
    description: '如雛菊般純真可愛，保持著童心未泯',
    traits: ['純真可愛', '樂觀開朗', '好奇心強', '真誠直率'],
    flowers: ['雛菊', '小蒼蘭', '風信子', '鈴蘭'],
    colors: ['白色', '淡黃色', '淡粉色'],
    occasions: ['日常裝飾', '友誼表達', '清新空間'],
    careGuide: '容易照料，適應性強，就像你樂觀的天性一樣。',
    flowerRecommendations: [
      {
        id: 7,
        name: '雛菊花束',
        price: 800,
        image: '/images/daisy-bouquet.jpg',
        description: '可愛的雛菊，象徵著純真與快樂'
      },
      {
        id: 8,
        name: '小蒼蘭花束',
        price: 1100,
        image: '/images/freesia-bouquet.jpg',
        description: '清香的小蒼蘭，展現你的純真魅力'
      }
    ]
  },
  {
    id: 'mysterious',
    name: '神秘內斂型',
    description: '如深紫色鳶尾花般神秘優雅，內心世界豐富',
    traits: ['神秘深沉', '獨立思考', '內心豐富', '有藝術氣質'],
    flowers: ['鳶尾花', '紫玫瑰', '紫色鬱金香', '薊花'],
    colors: ['深紫色', '深藍色', '酒紅色'],
    occasions: ['藝術空間', '個人收藏', '深度思考'],
    careGuide: '需要獨特的生長環境，不喜歡被過度打擾，需要理解和尊重。',
    flowerRecommendations: [
      {
        id: 9,
        name: '鳶尾花束',
        price: 1400,
        image: '/images/iris-bouquet.jpg',
        description: '神秘的鳶尾花，展現你的獨特氣質'
      },
      {
        id: 10,
        name: '紫玫瑰花束',
        price: 1900,
        image: '/images/purple-rose-bouquet.jpg',
        description: '高貴的紫玫瑰，象徵著神秘與優雅'
      }
    ]
  },
  {
    id: 'warm',
    name: '溫暖關懷型',
    description: '如黃玫瑰般溫暖親切，總是關心他人',
    traits: ['溫暖親切', '樂於助人', '責任感強', '值得信賴'],
    flowers: ['黃玫瑰', '向日葵', '金盞花', '萬壽菊'],
    colors: ['黃色', '橙黃色', '金色'],
    occasions: ['感謝表達', '友誼慶祝', '溫馨聚會'],
    careGuide: '需要穩定的照料和關注，會回報以持久的美麗和陪伴。',
    flowerRecommendations: [
      {
        id: 11,
        name: '黃玫瑰花束',
        price: 1300,
        image: '/images/yellow-rose-bouquet.jpg',
        description: '溫暖的黃玫瑰，象徵著友誼與關懷'
      },
      {
        id: 12,
        name: '金盞花花束',
        price: 700,
        image: '/images/marigold-bouquet.jpg',
        description: '明亮的金盞花，展現你的溫暖個性'
      }
    ]
  }
];

// POST 請求處理函數
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { scores, answers } = body;

    // 驗證輸入資料
    if (!scores || typeof scores !== 'object') {
      return NextResponse.json(
        { error: '缺少有效的分數資料' },
        { status: 400 }
      );
    }

    const { energy, emotion, social, adventure } = scores;

    // 驗證分數格式
    if (typeof energy !== 'number' || typeof emotion !== 'number' || 
        typeof social !== 'number' || typeof adventure !== 'number') {
      return NextResponse.json(
        { error: '分數資料格式不正確' },
        { status: 400 }
      );
    }

    // 根據得分計算個性類型
    let personalityId = 'gentle'; // 預設值

    if (energy > 8 && social > 6) {
      personalityId = 'passionate'; // 熱情奔放
    } else if (emotion > 8 && energy < 0) {
      personalityId = 'gentle'; // 溫柔療癒
    } else if (emotion > 6 && adventure > 2) {
      personalityId = 'romantic'; // 浪漫優雅
    } else if (energy > 2 && social > 2 && adventure < 4) {
      personalityId = 'innocent'; // 純真可愛
    } else if (energy < 0 && social < 0) {
      personalityId = 'mysterious'; // 神秘內斂
    } else if (social > 4 && emotion > 2) {
      personalityId = 'warm'; // 溫暖關懷
    }

    // 找到對應的個性類型
    const personalityResult = personalityTypes.find(type => type.id === personalityId);
    
    if (!personalityResult) {
      return NextResponse.json(
        { error: '無法確定個性類型' },
        { status: 500 }
      );
    }

    // 回傳結果
    return NextResponse.json({
      success: true,
      result: {
        personalityType: personalityResult,
        scores: {
          energy,
          emotion,
          social,
          adventure
        },
        timestamp: new Date().toISOString(),
        recommendations: {
          flowers: personalityResult.flowerRecommendations,
          careGuide: personalityResult.careGuide,
          occasions: personalityResult.occasions
        }
      }
    });

  } catch (error) {
    console.error('個性分析 API 錯誤:', error);
    return NextResponse.json(
      { error: '伺服器內部錯誤' },
      { status: 500 }
    );
  }
}

// GET 請求處理函數（獲取所有個性類型）
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      personalityTypes: personalityTypes.map(type => ({
        id: type.id,
        name: type.name,
        description: type.description,
        traits: type.traits,
        flowers: type.flowers,
        colors: type.colors
      }))
    });
  } catch (error) {
    console.error('獲取個性類型錯誤:', error);
    return NextResponse.json(
      { error: '伺服器內部錯誤' },
      { status: 500 }
    );
  }
}