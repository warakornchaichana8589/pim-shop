# 🎨 PIM Shop Theme & Design System

> เอกสารสรุป Design System และ Style Guide ของโปรเจค PIM Shop

**อัปเดตล่าสุด:** 2026-01-22

---

## 📋 สารบัญ

- [Design Reference](#design-reference)
- [Mood & Emotion](#mood--emotion)
- [Design Style](#design-style)
- [Brand Identity](#brand-identity)
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Spacing System](#spacing-system)
- [Components Style](#components-style)
- [Animation & Transitions](#animation--transitions)
- [Responsive Breakpoints](#responsive-breakpoints)

---

## Design Reference

### 🌐 Primary Inspiration

| Source | URL | Description |
|--------|-----|-------------|
| **UNIQLO** | https://www.uniqlo.com/ | Japanese fast-fashion retail |
| **MUJI** | https://www.muji.com/ | Minimalist lifestyle brand |

### 🇯🇵 UNIQLO Design DNA

UNIQLO เป็นแบรนด์เสื้อผ้าจากญี่ปุ่นที่เน้นความเรียบง่าย คุณภาพ และราคาที่เข้าถึงได้ เว็บไซต์สะท้อนปรัชญา "LifeWear" ที่เน้น:

**Philosophy:**
- **Simplicity** - ความเรียบง่ายที่ทรงพลัง
- **Quality** - คุณภาพที่จับต้องได้
- **Innovation** - นวัตกรรมที่ไม่โอ้อวด
- **Timeless** - ไม่ตามกระแส แต่คลาสสิค

**Visual Elements ที่โดดเด่น:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    UNIQLO VISUAL IDENTITY                        │
│                                                                  │
│   🔴 Logo สี่เหลี่ยมสีแดง        ⬛ Monochrome + Red accent      │
│   📐 Grid-based layout          📸 High-quality photography     │
│   ✂️ Sharp edges (no radius)    🔤 Bold uppercase typography    │
│   ⚪ Generous white space       🎬 Subtle micro-animations      │
└─────────────────────────────────────────────────────────────────┘
```

**Key Design Patterns:**

1. **Hero Section** - รูปใหญ่เต็มจอ พร้อม text overlay
2. **Product Grid** - ตาราง 4-5 columns, สม่ำเสมอ
3. **Category Navigation** - เมนูแบบ mega menu ที่ clean
4. **Product Cards** - รูปสินค้าพื้นหลังสีอ่อน, ไม่มีเงา
5. **CTA Buttons** - สี่เหลี่ยม, ดำ-ขาว, ไม่มีมน

---

## Mood & Emotion

### 🎭 อารมณ์หลักของเว็บไซต์

| Emotion | Description | How to Achieve |
|---------|-------------|----------------|
| **Calm (สงบ)** | รู้สึกผ่อนคลาย ไม่วุ่นวาย | White space มาก, สีน้อย |
| **Confident (มั่นใจ)** | น่าเชื่อถือ มืออาชีพ | Typography หนา, Layout เป็นระเบียบ |
| **Modern (ทันสมัย)** | ไม่ล้าสมัย เรียบง่าย | Design ไม่ฟุ่มเฟือย, Animations ที่ลื่นไหล |
| **Premium (พรีเมียม)** | คุณภาพดี คุ้มค่า | รูปภาพคุณภาพสูง, Detail ที่พิถีพิถัน |
| **Inviting (เชิญชวน)** | อยากสำรวจต่อ | Navigation ชัดเจน, CTA ที่ชัด |

### 💫 Emotional Journey ของผู้ใช้

```
เข้าเว็บ ──▶ รู้สึก "สะอาดตา" ──▶ สำรวจ "ง่ายและน่าสนใจ"
    │                                      │
    ▼                                      ▼
ดูสินค้า ◀── รู้สึก "มั่นใจ" ◀── เลือกหมวด "ไม่งง"
    │
    ▼
สั่งซื้อ ──▶ รู้สึก "รวดเร็ว & ปลอดภัย" ──▶ กลับมาใหม่ ✨
```

### 🌸 Japanese Aesthetic Concepts

| Concept | Meaning | Application |
|---------|---------|-------------|
| **簡素 (Kanso)** | ความเรียบง่าย | ลด element ที่ไม่จำเป็น |
| **自然 (Shizen)** | ความเป็นธรรมชาติ | ไม่ฝืน, ไม่ over-design |
| **脱俗 (Datsuzoku)** | หลุดจากกระแส | ไม่ตามเทรนด์ที่เปลี่ยนเร็ว |
| **静寂 (Seijaku)** | ความสงบ | White space, animations ที่นุ่มนวล |
| **均整 (Kinsei)** | ความสมดุล | Grid ที่สม่ำเสมอ, Hierarchy ชัดเจน |

### 🎯 Target Audience Feeling

**ผู้ใช้ควรรู้สึกว่า:**

> "เว็บนี้ดูน่าเชื่อถือ สินค้าดูดี ไม่ต้องคิดมาก ใช้งานง่าย
> ราคาเหมาะสม อยากซื้อเลย"

**Keywords ที่อธิบายอารมณ์:**

```
🤍 สะอาด (Clean)           🖤 มีสไตล์ (Stylish)
⚪ เรียบง่าย (Simple)       ⬛ น่าเชื่อถือ (Trustworthy)
🔳 มืออาชีพ (Professional)  🔲 ใช้งานง่าย (Easy-to-use)
```

---

## Design Style

### 🏷️ Style Classification

| Attribute | Value |
|-----------|-------|
| **Design Style** | Minimalist / Japanese Retail |
| **Inspiration** | UNIQLO, MUJI |
| **Tone** | Clean, Modern, Premium |
| **Character** | เรียบง่าย, มีระเบียบ, สะอาดตา |

### 🎯 Design Principles

1. **Minimalism First** - ใช้องค์ประกอบน้อย แต่มีประสิทธิภาพ
2. **White Space** - เน้น negative space เพื่อความโปร่งสบายตา
3. **Functional Beauty** - ความสวยงามต้องมาพร้อมกับ usability
4. **Consistent Grid** - ใช้ grid system อย่างเคร่งครัด
5. **Subtle Animations** - แอนิเมชันเบาๆ ไม่โฉบเฉี่ยวเกินไป

### ✨ Visual Characteristics

```
┌─────────────────────────────────────────────────────────────┐
│                      PIM SHOP STYLE                          │
│                                                              │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│   │  Sharp      │  │  Clean      │  │  Monochrome │        │
│   │  Edges      │  │  Lines      │  │  + Red      │        │
│   │  (No radius)│  │  (1px)      │  │  Accent     │        │
│   └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                              │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│   │  Bold       │  │  Uppercase  │  │  Glass      │        │
│   │  Typography │  │  Labels     │  │  Effect     │        │
│   │  (700-900)  │  │  (Tracking) │  │  (Blur)     │        │
│   └─────────────┘  └─────────────┘  └─────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

### 🔄 UX Principles

| Principle | Description |
|-----------|-------------|
| **Clarity** | ทุกอย่างต้องชัดเจน ไม่คลุมเครือ |
| **Efficiency** | ทำ task ได้เร็ว ขั้นตอนน้อย |
| **Consistency** | สม่ำเสมอทั้งเว็บ |
| **Feedback** | ตอบสนองทุก action ของ user |
| **Accessibility** | ใช้งานได้ทุกอุปกรณ์ ทุกคน |

---

## Brand Identity

### Logo Style

```css
/* Logo: สี่เหลี่ยมจัตุรัส พื้นดำ ตัวหนังสือขาว */
.logo {
  background-color: #09090b;  /* เกือบดำ */
  color: #ffffff;
  padding: 0.5rem;
  aspect-ratio: 1;
  font-weight: 700;
  letter-spacing: -0.05em;
}

.logo:hover {
  background-color: #E60012;  /* แดง UNIQLO */
}
```

### Brand Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Brand Red** | `#E60012` | Logo hover, accent, badges |
| **Primary Black** | `#09090b` | Text, buttons, logo |
| **Pure White** | `#ffffff` | Background |

---

## Color Palette

### Primary Colors

```css
:root {
  /* Core Colors */
  --color-black: #09090b;      /* Primary text, buttons */
  --color-white: #ffffff;      /* Background */
  --color-red: #E60012;        /* Brand accent */
  
  /* Gray Scale */
  --color-gray-50: #fafafa;    /* Light backgrounds */
  --color-gray-100: #f4f4f5;   /* Borders, dividers */
  --color-gray-400: #a1a1aa;   /* Secondary text, labels */
  --color-gray-500: #71717a;   /* Muted text */
  --color-gray-600: #888888;   /* Disabled states */
}
```

### Color Usage Matrix

| Element | Color | Hex |
|---------|-------|-----|
| Primary Text | Black | `#09090b` |
| Secondary Text | Gray 400 | `#a1a1aa` |
| Muted Text | Gray 500 | `#71717a` |
| Background | White | `#ffffff` |
| Card Background | Gray 50 | `#fafafa` |
| Borders | Gray 100 | `#f4f4f5` |
| Accent/CTA | Red | `#E60012` |
| Buttons | Black | `#09090b` |
| Button Text | White | `#ffffff` |

### Opacity Variants

```css
/* Glass Effect */
background-color: rgba(255, 255, 255, 0.8);
backdrop-filter: blur(12px);

/* Overlays */
background-color: rgba(255, 255, 255, 0.6);  /* Product overlay */
background-color: rgba(255, 255, 255, 0.1);  /* Hero overlay */
```

---

## Typography

### Font Families

```css
:root {
  --font-sans: 'Inter', ui-sans-serif, system-ui;
  --font-display: 'Kanit', 'Inter', ui-sans-serif;
}
```

### Font Scale

| Name | Size | Weight | Letter Spacing | Usage |
|------|------|--------|----------------|-------|
| Display | 60px-96px | 900 | -0.05em | Hero titles |
| Heading | 14px-18px | 700-900 | normal | Product names, prices |
| Label | 10px-12px | 700 | 0.1em - 0.4em | Categories, buttons |
| Body | 14px | 500-600 | 0.1em | Descriptions |
| Small | 8px-10px | 700 | 0.2em | Sub-labels, badges |

### Typography Characteristics

```css
/* Uppercase Labels - ลักษณะเด่น */
.label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Sub Labels */
.sub-label {
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #a1a1aa;
}

/* Main Title */
.title {
  font-size: 3.75rem;  /* 60px */
  font-weight: 900;
  letter-spacing: -0.05em;
  color: #09090b;
}
```

---

## Spacing System

### Base Unit: 4px

```css
:root {
  --spacing-xs: 4px;    /* 0.25rem */
  --spacing-sm: 8px;    /* 0.5rem */
  --spacing-md: 16px;   /* 1rem */
  --spacing-lg: 24px;   /* 1.5rem */
  --spacing-xl: 32px;   /* 2rem */
  --spacing-2xl: 48px;  /* 3rem */
  --spacing-3xl: 80px;  /* 5rem */
}
```

### Common Spacing Patterns

| Element | Padding/Gap |
|---------|-------------|
| Button | 1rem 2.5rem |
| Card | 1.25rem 0.25rem |
| Container (mobile) | 0 2.5rem |
| Container (desktop) | 0 5rem |
| Section gap | 3rem |
| Nav links gap | 2.5rem |

---

## Components Style

### Buttons

```css
/* Primary Button */
.btn-primary {
  border: 1px solid #09090b;
  background-color: #09090b;
  padding: 1rem 2.5rem;
  font-size: 10px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #ffffff;
  color: #09090b;
}

.btn-primary:active {
  transform: scale(0.95);
}
```

### Cards

```css
/* Product Card */
.card {
  background-color: #ffffff;
  border-radius: 0;  /* Sharp edges */
  transition: all 0.5s ease;
  cursor: pointer;
}

.card:hover img {
  transform: scale(1.05);
}
```

### Navigation

```css
/* Glass Nav on Scroll */
.nav-scrolled {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #f4f4f5;
}

/* Nav Links */
.nav-link {
  opacity: 0.4;
  transition: opacity 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  opacity: 1;
}
```

### Badges

```css
.badge {
  background-color: #E60012;
  color: #ffffff;
  font-size: 9px;
  font-weight: 700;
  border-radius: 9999px;
  padding: 0.25rem 0.5rem;
}
```

---

## Animation & Transitions

### Standard Durations

| Type | Duration | Easing |
|------|----------|--------|
| Fast (hover) | 0.3s | ease |
| Medium (state) | 0.5s | ease |
| Slow (image) | 0.7s | ease |
| Shimmer | 1.5s | infinite |

### Common Animations

```css
/* Hover Scale */
transition: transform 0.7s ease;
&:hover { transform: scale(1.05); }

/* Fade In Up */
opacity: 0;
transform: translateY(0.5rem);
transition: all 0.3s ease;

/* Active State */
&:active { transform: scale(0.95); }

/* Shimmer Loading */
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Glass/Blur Effects

```css
/* Navbar Glass */
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);

/* Quick Add Button */
background-color: rgba(255, 255, 255, 0.95);
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
```

---

## Responsive Breakpoints

### Breakpoint Values

```css
/* Mobile First */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
```

### Usage Examples

```css
/* Mobile */
padding: 0 2.5rem;

/* Desktop (md+) */
@media (min-width: 768px) {
  padding: 0 5rem;
}

/* Desktop navigation (lg+) */
@media (min-width: 1024px) {
  .desktop-links { display: flex; }
}
```

---

## 📝 Design Dos & Don'ts

### ✅ DO

- ใช้ uppercase + letter-spacing สำหรับ labels
- ใช้สีดำเป็นหลัก สีแดงเป็น accent
- ใช้ sharp corners (ไม่ต้อง border-radius)
- เน้น white space
- Animation ที่ subtle ไม่ฉูดฉาด
- ใช้ font-weight 700-900

### ❌ DON'T

- ใช้ rounded corners มากเกินไป
- ใช้สีฉูดฉาดหลายสี
- ใช้ animation ที่ flashy/bouncy
- ใช้ shadows มากเกินไป
- ใช้ gradients หลากสี
- ใช้ font-weight บางเกินไป

---

## 🎯 Quick Reference

```
Style:       Minimalist Japanese Retail (UNIQLO-inspired)
Colors:      Black (#09090b) + White (#ffffff) + Red (#E60012)
Typography:  Inter/Kanit, Bold (700-900), Uppercase Labels
Corners:     Sharp (no border-radius)
Effects:     Glass blur, Subtle hover scale
Animations:  0.3s-0.7s ease transitions
Spacing:     4px base unit, generous padding
```

---

*Document Version: 1.0.0*
