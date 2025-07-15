/**
 * 花卉與圖片路徑的映射關係
 * 集中管理所有花卉與對應圖片的關聯
 */

// 花卉名稱與圖片路徑的映射表
export const flowerToImageMap: Record<string, string> = {
  // 熱情奔放型花卉
  '向日葵': '/images/sunflower-sunshine-bg.png',
  '紅玫瑰': '/images/rose-romance-bg.png',
  '橙色鬱金香': '/images/tulip-elegance-bg.png',
  '火鶴花': '/images/vibrant-hues-bg.png',
  
  // 溫柔療癒型花卉
  '薰衣草': '/images/pastel-dreams-bg.png',
  '白玫瑰': '/images/elegant-roses-bouquet.png',
  '滿天星': '/images/serene-bloom-1.png',
  '洋甘菊': '/images/serene-bloom-2.png',
  
  // 浪漫優雅型花卉
  '粉玫瑰': '/images/rose-romance-bg.png',
  '牡丹': '/images/elegant-roses-bouquet.png',
  '櫻花': '/images/pastel-dreams-bg.png',
  '康乃馨': '/images/carnation-charm-bg.png',
  
  // 純真可愛型花卉
  '雛菊': '/images/serene-bloom-3.png',
  '小蒼蘭': '/images/lily-serenity-bg.png',
  '風信子': '/images/pastel-dreams-bg.png',
  '鈴蘭': '/images/serene-bloom-2.png',
  
  // 神秘內斂型花卉
  '鳶尾花': '/images/orchid-opulence-bg.png',
  '紫玫瑰': '/images/rose-romance-bg.png',
  '紫色鬱金香': '/images/tulip-elegance-bg.png',
  '薊花': '/images/vibrant-hues-bg.png',
  
  // 溫暖關懷型花卉
  '黃玫瑰': '/images/rose-romance-bg.png',
  '金盞花': '/images/sunflower-sunshine-bg.png',
  '萬壽菊': '/images/vibrant-hues-bg.png',
};

// 確保所有花卉都有對應的圖片
const allFlowers = [
  '向日葵', '紅玫瑰', '橙色鬱金香', '火鶴花',
  '薰衣草', '白玫瑰', '滿天星', '洋甘菊',
  '粉玫瑰', '牡丹', '櫻花', '康乃馨',
  '雛菊', '小蒼蘭', '風信子', '鈴蘭',
  '鳶尾花', '紫玫瑰', '紫色鬱金香', '薊花',
  '黃玫瑰', '金盞花', '萬壽菊'
];

// 檢查是否所有花卉都有對應的圖片
allFlowers.forEach(flower => {
  if (!flowerToImageMap[flower]) {
    console.warn(`警告: ${flower} 沒有對應的圖片路徑`);
  }
});

/**
 * 根據花卉名稱獲取對應的圖片路徑
 * @param flowerName 花卉名稱
 * @returns 圖片路徑，如果找不到對應關係則返回預設圖片
 */
export const getImageByFlower = (flowerName: string): string => {
  const imagePath = flowerToImageMap[flowerName];
  if (!imagePath) {
    console.warn(`警告: 找不到 ${flowerName} 的圖片路徑，使用預設圖片`);
    return '/placeholder.svg'; // 預設為佔位圖
  }
  
  // 確保路徑格式正確
  console.log(`花卉 ${flowerName} 的圖片路徑: ${imagePath}`);
  
  // 檢查圖片路徑是否存在於 public 目錄中
  // 這裡只是記錄日誌，實際檢查需要在伺服器端進行
  const expectedPaths = [
    '/images/sunflower-sunshine-bg.png',
    '/images/rose-romance-bg.png',
    '/images/tulip-elegance-bg.png',
    '/images/vibrant-hues-bg.png',
    '/images/pastel-dreams-bg.png',
    '/images/elegant-roses-bouquet.png',
    '/images/serene-bloom-1.png',
    '/images/serene-bloom-2.png',
    '/images/serene-bloom-3.png',
    '/images/carnation-charm-bg.png',
    '/images/lily-serenity-bg.png',
    '/images/orchid-opulence-bg.png'
  ];
  
  if (!expectedPaths.includes(imagePath)) {
    console.warn(`警告: 圖片路徑 ${imagePath} 可能不存在於 public 目錄中`);
  }
  
  return imagePath;
};