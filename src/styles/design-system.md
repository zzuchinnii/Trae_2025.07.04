# Petaloom 設計系統

## 顏色系統

基於 Figma 設計，我們的顏色系統包含以下調色板：

### 主要顏色 (Primary Colors)
主要顏色用於關鍵的互動元素，引導用戶操作並錨定品牌視覺識別。

```css
primary-100: #e8bcf0  /* 最淺的主色調 */
primary-200: #d88de5  /* 淺主色調 */
primary-300: #c85edb  /* 中淺主色調 */
primary-400: #b82fd0  /* 中主色調 */
primary-500: #8e24a2  /* 標準主色調 */
primary-600: #651a73  /* 深主色調 */
```

**使用場景：**
- 主要按鈕
- 連結
- 重要的互動元素
- 品牌標誌

### 中性顏色 (Neutral Colors)
中性顏色是 UI 設計的基礎，用於文字、表單欄位、背景和分隔線。

```css
neutral-100: #f5f5f5  /* 最淺灰 */
neutral-200: #e5e5e5  /* 淺灰 */
neutral-300: #d4d4d4  /* 中淺灰 */
neutral-400: #a3a3a3  /* 中灰 */
neutral-500: #737373  /* 標準灰 */
neutral-600: #525252  /* 深灰 */
neutral-700: #404040  /* 更深灰 */
neutral-800: #262626  /* 很深灰 */
neutral-900: #171717  /* 最深灰 */
```

**使用場景：**
- 主要文字內容
- 次要文字內容
- 邊框
- 背景
- 分隔線

### 強調顏色 (Accent Colors)
次於主要顏色，這些顏色用於吸引注意力並支持品牌識別。

```css
accent-yellow: #fde047  /* 黃色強調 */
accent-green: #86efac   /* 綠色強調 */
```

**使用場景：**
- 標籤
- 徽章
- 特殊促銷
- 裝飾元素

### 反饋顏色 (Feedback Colors)
突出語義狀態，在介面使用期間提供視覺反饋和警告。

```css
feedback-success: #4ade80  /* 成功狀態 */
feedback-warning: #facc15  /* 警告狀態 */
feedback-error: #f87171   /* 錯誤狀態 */
feedback-info: #60a5fa    /* 資訊狀態 */
```

**使用場景：**
- 成功訊息
- 警告提示
- 錯誤訊息
- 資訊提示
- 表單驗證狀態

## 元件使用指南

### Button 元件

```tsx
// 主要按鈕
<Button variant="primary">主要操作</Button>

// 次要按鈕
<Button variant="secondary">次要操作</Button>

// 成功按鈕
<Button variant="success">確認</Button>

// 警告按鈕
<Button variant="warning">警告</Button>

// 錯誤按鈕
<Button variant="error">刪除</Button>

// 資訊按鈕
<Button variant="info">了解更多</Button>

// 外框按鈕
<Button variant="primary" outline>外框按鈕</Button>

// 不同尺寸
<Button size="sm">小按鈕</Button>
<Button size="md">中按鈕</Button>
<Button size="lg">大按鈕</Button>
```

### Input 元件

```tsx
// 基本輸入框
<Input placeholder="請輸入..." />

// 帶標籤的輸入框
<Input label="姓名" placeholder="請輸入姓名" />

// 不同狀態的輸入框
<Input variant="success" helperText="輸入正確" />
<Input variant="warning" helperText="請注意" />
<Input variant="error" helperText="輸入錯誤" />

// 不同尺寸
<Input size="sm" placeholder="小輸入框" />
<Input size="md" placeholder="中輸入框" />
<Input size="lg" placeholder="大輸入框" />
```

## 最佳實踐

1. **一致性**：在整個應用程式中保持顏色使用的一致性
2. **對比度**：確保文字和背景之間有足夠的對比度以提高可讀性
3. **可訪問性**：遵循 WCAG 指南，確保顏色不是傳達資訊的唯一方式
4. **語義化**：使用語義化的顏色名稱，而不是具體的顏色值
5. **漸進增強**：從基本的黑白設計開始，然後添加顏色

## Tailwind CSS 配置

這些顏色已經配置在 `tailwind.config.ts` 中，可以直接使用：

```tsx
// 使用主要顏色
<div className="bg-primary-500 text-white">
  主要顏色背景
</div>

// 使用中性顏色
<p className="text-neutral-700">
  中性顏色文字
</p>

// 使用反饋顏色
<div className="border-feedback-success text-feedback-success">
  成功狀態
</div>
```