import { NextResponse } from 'next/server';

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

// 花卉個性類型數據
const personalityTypes: PersonalityType[] = [
  {
    id: 'passionate',
    name: '熱情奔放型',
    description: '如向日葵般充滿活力，總是散發著正能量',
    traits: ['外向活潑', '樂觀積極', '富有感染力', '喜歡冒險'],
    flowers: ['向日葵', '紅玫瑰', '橙色鬱金香', '火鶴花'],
    colors: ['橙色', '紅色', '黃色'],
    occasions: ['慶祝活動', '聚會派對', '鼓勵祝福'],
    careGuide: '需要充足陽光和定期澆水，就像你需要社交和新鮮體驗一樣。'
  },
  {
    id: 'gentle',
    name: '溫柔療癒型',
    description: '如薰衣草般寧靜溫和，帶給人心靈的平靜',
    traits: ['溫和體貼', '善於傾聽', '內心平靜', '富有同理心'],
    flowers: ['薰衣草', '白玫瑰', '滿天星', '洋甘菊'],
    colors: ['淡紫色', '白色', '淡藍色'],
    occasions: ['安慰慰問', '療癒空間', '冥想放鬆'],
    careGuide: '喜歡溫和的環境，避免強烈刺激，需要耐心細心的照料。'
  },
  {
    id: 'romantic',
    name: '浪漫優雅型',
    description: '如粉玫瑰般優雅迷人，充滿浪漫情懷',
    traits: ['優雅迷人', '浪漫感性', '注重美感', '情感豐富'],
    flowers: ['粉玫瑰', '牡丹', '櫻花', '康乃馨'],
    colors: ['粉色', '淡紫色', '珊瑚色'],
    occasions: ['浪漫約會', '紀念日', '表達愛意'],
    careGuide: '需要精心呵護和美麗的環境，就像你對生活品質的追求。'
  },
  {
    id: 'innocent',
    name: '純真可愛型',
    description: '如雛菊般純真可愛，保持著童心未泯',
    traits: ['純真可愛', '樂觀開朗', '好奇心強', '真誠直率'],
    flowers: ['雛菊', '小蒼蘭', '風信子', '鈴蘭'],
    colors: ['白色', '淡黃色', '淡粉色'],
    occasions: ['日常裝飾', '友誼表達', '清新空間'],
    careGuide: '容易照料，適應性強，就像你樂觀的天性一樣。'
  },
  {
    id: 'mysterious',
    name: '神秘內斂型',
    description: '如深紫色鳶尾花般神秘優雅，內心世界豐富',
    traits: ['神秘深沉', '獨立思考', '內心豐富', '有藝術氣質'],
    flowers: ['鳶尾花', '紫玫瑰', '紫色鬱金香', '薊花'],
    colors: ['深紫色', '深藍色', '酒紅色'],
    occasions: ['藝術空間', '個人收藏', '深度思考'],
    careGuide: '需要獨特的生長環境，不喜歡被過度打擾，需要理解和尊重。'
  },
  {
    id: 'warm',
    name: '溫暖關懷型',
    description: '如黃玫瑰般溫暖親切，總是關心他人',
    traits: ['溫暖親切', '樂於助人', '責任感強', '值得信賴'],
    flowers: ['黃玫瑰', '向日葵', '金盞花', '萬壽菊'],
    colors: ['黃色', '橙黃色', '金色'],
    occasions: ['感謝表達', '友誼慶祝', '溫馨聚會'],
    careGuide: '需要穩定的照料和關注，會回報以持久的美麗和陪伴。'
  }
];

// POST 請求處理：根據測驗分數計算個性類型
export async function POST(request: Request) {
  try {
    const { scores, answers } = await request.json();

    if (!scores || !answers) {
      return NextResponse.json({ error: '缺少分數或答案數據' }, { status: 400 });
    }

    // 根據得分判斷個性類型
    let personalityId = 'gentle'; // 預設

    if (scores.energy > 8 && scores.social > 6) {
      personalityId = 'passionate'; // 熱情奔放
    } else if (scores.emotion > 8 && scores.energy < 0) {
      personalityId = 'gentle'; // 溫柔療癒
    } else if (scores.emotion > 6 && scores.adventure > 2) {
      personalityId = 'romantic'; // 浪漫優雅
    } else if (scores.energy > 2 && scores.social > 2 && scores.adventure < 4) {
      personalityId = 'innocent'; // 純真可愛
    } else if (scores.energy < 0 && scores.social < 0) {
      personalityId = 'mysterious'; // 神秘內斂
    } else if (scores.social > 4 && scores.emotion > 2) {
      personalityId = 'warm'; // 溫暖關懷
    }

    const personalityType = personalityTypes.find(type => type.id === personalityId);

    if (!personalityType) {
      return NextResponse.json({ error: '無法確定個性類型' }, { status: 500 });
    }

    // 根據個性類型和答案提供額外推薦
    const recommendations = {
      occasions: [...personalityType.occasions],
      careGuide: personalityType.careGuide,
    };

    // 簡單的推薦邏輯範例
    if (answers[1] === 0) { // 喜歡冒險
      if (!recommendations.occasions.includes('戶外探險')) {
        recommendations.occasions.push('戶外探險');
      }
    } else if (answers[1] === 2) { // 喜歡安靜
      if (!recommendations.occasions.includes('個人閱讀時光')) {
        recommendations.occasions.push('個人閱讀時光');
      }
    }

    return NextResponse.json({ 
      success: true, 
      result: { 
        personalityType, 
        recommendations 
      }
    });

  } catch (error) {
    console.error('個性分析 API 錯誤:', error);
    return NextResponse.json({ error: '伺服器內部錯誤' }, { status: 500 });
  }
}

// GET 請求處理：獲取所有個性類型
export async function GET() {
  return NextResponse.json(personalityTypes);
}