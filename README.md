# Petaloom - 現代化花卉電商應用程式

一個基於 Next.js 14 開發的現代化花卉電商平台，完整整合了 Figma 設計系統，提供優雅的用戶體驗和完整的購物流程。

## ✨ 功能特色

### 🎨 完整的設計系統整合
- **四個 Figma 介面完整實現**：首頁、智能選擇、商店展示、產品詳情
- **統一的視覺語言**：遵循 Figma 設計規範的色彩系統和佈局
- **響應式設計**：適配各種螢幕尺寸的完美體驗

### 🏠 首頁體驗
- **Hero Section**：品牌展示和搜尋功能
- **Smart Selection**：三大功能卡片（Quiz、Shop by Occasion、Shop by Style）
- **底部導航**：直觀的頁面切換體驗

### 🛍️ 購物功能
- **花卉網格展示**：8種精選花卉系列
- **智能搜尋**：快速找到心儀的花卉
- **分類瀏覽**：按場合和風格分類
- **產品詳情**：完整的產品資訊和配置選項

### 🎯 產品詳情頁
- **多圖展示**：產品的多角度展示
- **尺寸選擇**：Small、Medium、Large 三種規格
- **增值服務**：花瓶選項和禮品訊息
- **一鍵加購**：流暢的購物車體驗

### 📱 移動優先設計
- **底部導航欄**：Home、Shop、Quiz、Profile 四大功能區
- **觸控友好**：針對移動設備優化的交互體驗
- **快速載入**：Next.js 14 的效能優化

## 🛠️ 技術架構

### 前端技術棧
- **Next.js 14** - React 全端框架
- **TypeScript** - 型別安全的開發體驗
- **Tailwind CSS** - 實用優先的 CSS 框架
- **Prisma** - 現代化的資料庫 ORM
- **Zustand** - 輕量級狀態管理

### 開發工具
- **ESLint** - 程式碼品質檢查
- **Prettier** - 程式碼格式化
- **Husky** - Git hooks 管理
- **Jest** - 單元測試框架

### 資料庫
- **SQLite** - 開發環境資料庫
- **Prisma Schema** - 資料模型定義

## 🚀 快速開始

### 環境要求
- Node.js 18.0 或更高版本
- npm 或 yarn 套件管理器

### 安裝步驟

1. **複製專案**
```bash
git clone <repository-url>
cd petaloom-app
```

2. **安裝依賴**
```bash
npm install
```

3. **環境設定**
```bash
cp .env.local.example .env.local
```

4. **資料庫設定**
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

5. **啟動開發伺服器**
```bash
npm run dev
```

6. **開啟瀏覽器**
訪問 [http://localhost:3000](http://localhost:3000)

## 📁 專案結構

```
petaloom-app/
├── src/
│   ├── app/                 # Next.js 13+ App Router
│   │   ├── page.tsx         # 首頁
│   │   ├── shop/            # 商店頁面
│   │   ├── product/[id]/    # 產品詳情頁
│   │   ├── quiz/            # 測驗頁面
│   │   └── profile/         # 個人資料頁
│   ├── components/          # React 元件
│   │   ├── atoms/           # 基礎元件
│   │   ├── molecules/       # 組合元件
│   │   ├── organisms/       # 複雜元件
│   │   ├── templates/       # 頁面模板
│   │   └── ui/              # UI 元件
│   ├── lib/                 # 工具函數和配置
│   └── styles/              # 樣式檔案
├── public/                  # 靜態資源
│   ├── images/              # 圖片資源
│   └── icons/               # 圖示資源
├── prisma/                  # 資料庫配置
└── tailwind.config.ts       # Tailwind 配置
```

## 🎨 設計系統

### 色彩系統
- **主色調**：現代化的中性色系
- **強調色**：品牌識別色彩
- **語義色彩**：成功、警告、錯誤狀態色彩

### 字體系統
- **主字體**：Plus Jakarta Sans
- **字重**：400 (Regular)、600 (Semibold)、700 (Bold)
- **字級**：響應式字體大小系統

### 間距系統
- **基礎單位**：4px
- **標準間距**：8px、12px、16px、24px、32px
- **容器間距**：響應式內外邊距

## 🧪 測試

```bash
# 執行所有測試
npm test

# 執行測試並監聽變化
npm run test:watch

# 生成測試覆蓋率報告
npm run test:coverage
```

## 📦 部署

### Vercel 部署（推薦）
1. 將專案推送到 GitHub
2. 連接 Vercel 帳戶
3. 匯入專案並部署

### 手動部署
```bash
# 建置專案
npm run build

# 啟動生產伺服器
npm start
```

## 🤝 貢獻指南

1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權條款

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案

## 🙏 致謝

- [Next.js](https://nextjs.org/) - 強大的 React 框架
- [Tailwind CSS](https://tailwindcss.com/) - 實用優先的 CSS 框架
- [Prisma](https://prisma.io/) - 現代化的資料庫工具
- [Figma](https://figma.com/) - 設計系統來源

---

**Petaloom** - 讓每一朵花都綻放最美的時刻 🌸