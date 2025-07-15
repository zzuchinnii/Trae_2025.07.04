import { NextResponse } from 'next/server';

// Mock product database
const products = {
  '1': {
    id: 1,
    name: '清新小花束',
    price: 680,
    description: '簡約清新，適合日常表達心意。精選當季花材，以淡雅色調為主，營造自然清新的氛圍。',
    images: ['/images/elegant-roses-bouquet.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'bouquet',
    sizes: ['小', '中', '大'],
    details: {
      care: '建議每2-3天換水一次，剪短花莖約1公分',
      delivery: '當日下午2點前訂購，隔日送達',
      occasion: '日常驚喜、感謝表達'
    }
  },
  '2': {
    id: 2,
    name: '溫馨康乃馨',
    price: 850,
    description: '溫暖的母愛象徵，表達感謝之情。選用優質康乃馨，搭配綠葉點綴，傳遞溫暖關懷。',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'bouquet',
    sizes: ['小', '中', '大'],
    details: {
      care: '康乃馨較耐久，建議每3-4天換水',
      delivery: '當日下午2點前訂購，隔日送達',
      occasion: '母親節、感謝長輩、探病慰問'
    }
  },
  '3': {
    id: 3,
    name: '可愛迷你花盒',
    price: 950,
    description: '精緻小巧，適合送給朋友。迷你花盒設計，方便攜帶，是表達心意的完美選擇。',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'box',
    sizes: ['小', '中'],
    details: {
      care: '花盒設計便於保養，每日噴水即可',
      delivery: '當日下午2點前訂購，隔日送達',
      occasion: '朋友生日、小驚喜、辦公室裝飾'
    }
  },
  '4': {
    id: 4,
    name: '陽光滿溢',
    price: 1500,
    description: '明亮向日葵，帶來正能量。大朵向日葵搭配季節性配花，象徵希望與活力。',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'bouquet',
    sizes: ['中', '大'],
    details: {
      care: '向日葵需充足水分，建議每日換水',
      delivery: '當日下午2點前訂購，隔日送達',
      occasion: '開業慶祝、鼓勵打氣、生日祝福'
    }
  },
  '5': {
    id: 5,
    name: '浪漫玫瑰花束',
    price: 1800,
    description: '經典紅玫瑰，表達深情愛意。精選進口玫瑰，搭配滿天星點綴，營造浪漫氛圍。',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'bouquet',
    sizes: ['中', '大', '特大'],
    details: {
      care: '玫瑰需細心照料，建議每日換水並修剪花莖',
      delivery: '當日下午2點前訂購，隔日送達',
      occasion: '情人節、求婚、週年紀念'
    }
  },
  '6': {
    id: 6,
    name: '永恆愛戀',
    price: 2200,
    description: '精選花材，象徵永恆的愛。混合多種高級花材，層次豐富，寓意深遠。',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'premium',
    sizes: ['大', '特大'],
    details: {
      care: '高級花材需專業照護，建議每日換水',
      delivery: '需提前1天預訂，專人配送',
      occasion: '婚禮、重要紀念日、求婚'
    }
  },
  '7': {
    id: 7,
    name: '奢華花籃',
    price: 2800,
    description: '豪華花籃，適合重要場合。精心設計的花籃造型，展現尊貴品味。',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'basket',
    sizes: ['大', '特大'],
    details: {
      care: '花籃設計便於長期展示，每2日補水',
      delivery: '需提前1天預訂，專人配送',
      occasion: '開業慶典、重要會議、VIP贈禮'
    }
  },
  '8': {
    id: 8,
    name: '頂級花藝作品',
    price: 3500,
    description: '大師級花藝，展現尊貴品味。由資深花藝師精心設計，每件都是獨一無二的藝術品。',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'premium',
    sizes: ['特大'],
    details: {
      care: '藝術級作品，建議專業維護',
      delivery: '需提前2天預訂，大師親自配送',
      occasion: '高端宴會、藝術展覽、收藏紀念'
    }
  },
  '9': {
    id: 9,
    name: '豪華慶典花束',
    price: 4200,
    description: '盛大場合的完美選擇。超大型花束設計，氣勢磅礴，適合最重要的慶典時刻。',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'premium',
    sizes: ['特大'],
    details: {
      care: '大型花束需專業照護，建議每日換水',
      delivery: '需提前3天預訂，專業團隊配送',
      occasion: '盛大開業、重要慶典、國際會議'
    }
  },
  '10': {
    id: 10,
    name: '優雅百合花束',
    price: 1200,
    description: '純潔百合，象徵高雅品味。精選白色百合搭配綠葉，展現純淨優雅的美感。',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'bouquet',
    sizes: ['中', '大'],
    details: {
      care: '百合花需充足水分，建議每2天換水',
      delivery: '當日下午2點前訂購，隔日送達',
      occasion: '慶祝、祝福、典雅場合'
    }
  },
  '11': {
    id: 11,
    name: '繽紛混合花束',
    price: 1600,
    description: '多彩花材組合，充滿活力。混合多種季節花材，色彩豐富，充滿生命力。',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'bouquet',
    sizes: ['中', '大'],
    details: {
      care: '混合花材需細心照料，建議每日換水',
      delivery: '當日下午2點前訂購，隔日送達',
      occasion: '生日慶祝、活動裝飾、心情調劑'
    }
  },
  '12': {
    id: 12,
    name: '典雅鬱金香',
    price: 1400,
    description: '荷蘭進口鬱金香，展現優雅。精選進口鬱金香，色彩純正，形態優美。',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'bouquet',
    sizes: ['小', '中', '大'],
    details: {
      care: '鬱金香較為嬌嫩，建議每日換水並保持涼爽',
      delivery: '當日下午2點前訂購，隔日送達',
      occasion: '春季慶典、優雅聚會、藝術欣賞'
    }
  },
  '13': {
    id: 13,
    name: '精緻蘭花組合',
    price: 2500,
    description: '高貴蘭花，彰顯品味。精選多種蘭花品種，搭配精美花器，展現高雅品味。',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'premium',
    sizes: ['中', '大'],
    details: {
      care: '蘭花需專業照護，建議每週換水一次',
      delivery: '需提前1天預訂，專人配送',
      occasion: '商務贈禮、高端聚會、收藏欣賞'
    }
  },
  '14': {
    id: 14,
    name: '季節限定花束',
    price: 2300,
    description: '當季最美花材精選。根據季節變化精選最佳花材，每個季節都有不同的驚喜。',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'premium',
    sizes: ['中', '大'],
    details: {
      care: '季節花材需適當照護，建議每2天換水',
      delivery: '需提前1天預訂，專人配送',
      occasion: '季節慶典、特殊紀念、限量收藏'
    }
  },
  '15': {
    id: 15,
    name: '尊榮花禮盒',
    price: 3800,
    description: '頂級包裝，尊貴體驗。精美禮盒包裝，內含精選花材，是贈禮的完美選擇。',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'premium',
    sizes: ['Large', 'Extra Large'],
    details: {
      care: '禮盒設計便於保存，建議每2-3天補水',
      delivery: '需提前2天預訂，專業包裝配送',
      occasion: 'VIP贈禮、重要慶典、尊貴表達'
    }
  }
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;
    const product = products[productId as keyof typeof products];

    if (!product) {
      return new NextResponse('Product not found', { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Product API error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}