# 📁 Project Structure

> โครงสร้างโปรเจค PIM Shop

**อัปเดตล่าสุด:** 2026-01-22

---

## 📋 สารบัญ

- [Directory Structure](#directory-structure)
- [Pages & Routes](#pages--routes)
- [API Endpoints](#api-endpoints)
- [Components](#components)
- [Styles](#styles)
- [Hooks & Store](#hooks--store)
- [Types](#types)

---

## Directory Structure

```
pim-shop/
├── app/                              # Next.js App Router
│   ├── api/                          # API Routes
│   │   ├── auth/                     # NextAuth
│   │   │   └── [...nextauth]/route.ts
│   │   ├── menu/route.ts             # Menu API
│   │   └── products/                 # Products API
│   │       ├── route.ts              # GET /api/products
│   │       └── [id]/route.ts         # GET /api/products/:id
│   ├── category/                     # Category Pages
│   │   ├── page.tsx                  # /category (all)
│   │   └── [slug]/page.tsx           # /category/:slug
│   ├── product/                      # Product Pages
│   │   └── [id]/page.tsx             # /product/:id
│   ├── admin/                        # Admin Dashboard
│   │   └── products/page.tsx         # Product Management
│   ├── layout.tsx                    # Root Layout
│   ├── page.tsx                      # Home Page
│   ├── providers.tsx                 # Providers (Query, Session, Styled)
│   └── globals.css                   # Global Styles
│
├── components/                       # React Components
│   └── storefront/                   # Storefront Components
│       ├── AuthModal.tsx             # Login/Register/Reset Modal
│       ├── Navbar.tsx                # Navigation + User Menu
│       ├── Hero.tsx                  # Hero Section
│       ├── ProductCard.tsx           # Product Card (linked)
│       ├── HorizontalCarousel.tsx    # Product Carousel
│       ├── CartDrawer.tsx            # Cart Sidebar
│       ├── OrderModal.tsx            # Checkout (protected)
│       ├── Footer.tsx                # Footer
│       └── FloatingNav.tsx           # Mobile Floating Nav
│
├── styles/                           # Styled Components
│   ├── storefront/
│   │   ├── AuthModal.styles.ts
│   │   ├── Navbar.styles.ts
│   │   ├── Hero.styles.ts
│   │   ├── ProductCard.styles.ts
│   │   ├── ProductDetail.styles.ts
│   │   ├── CategoryPage.styles.ts
│   │   ├── CartDrawer.styles.ts
│   │   ├── OrderModal.styles.ts
│   │   ├── Footer.styles.ts
│   │   └── FloatingNav.styles.ts
│   └── pages/
│       └── Home.styles.ts
│
├── lib/                              # Utilities & Hooks
│   ├── hooks/
│   │   └── useMenu.ts                # Menu API Hook
│   ├── mock-data.ts                  # Mock Products (44 items)
│   ├── store.ts                      # Zustand Store (Cart)
│   ├── registry.tsx                  # Styled Components Registry
│   └── utils.ts                      # Utility Functions
│
├── types/                            # TypeScript Types
│   ├── index.ts                      # Product, CartItem, Order
│   ├── menu.ts                       # MenuItem, MenuResponse
│   └── next-auth.d.ts                # NextAuth Type Extensions
│
├── docs/                             # Documentation
│   ├── api-documentation.md          # API Specs
│   ├── authentication.md             # Auth System
│   ├── project-structure.md          # This File
│   ├── prompt-patterns.md            # Prompt Templates
│   ├── theme.md                      # Design System
│   └── session-summary.md            # Session Summary
│
├── public/                           # Static Assets
│   ├── PROD_01-06.webp               # Product Images
│   ├── FEATURED_*.webp               # Featured Images
│   └── HERO_*.webp                   # Hero Images
│
├── .env.example                      # Environment Template
└── package.json
```

---

## Pages & Routes

### Storefront Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home (hero, categories, products) |
| `/category` | `app/category/page.tsx` | All products |
| `/category/women` | `app/category/[slug]/page.tsx` | Women's products |
| `/category/men` | `app/category/[slug]/page.tsx` | Men's products |
| `/category/kids` | `app/category/[slug]/page.tsx` | Kids' products |
| `/category/baby` | `app/category/[slug]/page.tsx` | Baby products |
| `/product/:id` | `app/product/[id]/page.tsx` | Product detail |

### Admin Routes

| Route | File | Description |
|-------|------|-------------|
| `/admin/products` | `app/admin/products/page.tsx` | Product management |

### Auth Routes (NextAuth)

| Route | Description |
|-------|-------------|
| `/api/auth/signin` | Sign in page |
| `/api/auth/signout` | Sign out |
| `/api/auth/session` | Get session |
| `/api/auth/callback/:provider` | OAuth callback |

---

## API Endpoints

### Menu API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/menu` | Get navigation menu items |

### Products API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products?category=women` | Filter by category |
| GET | `/api/products?search=เสื้อ` | Search products |
| GET | `/api/products?limit=10&offset=0` | Pagination |
| GET | `/api/products/:id` | Get product detail |

### Auth API (NextAuth)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET/POST | `/api/auth/[...nextauth]` | All NextAuth routes |

---

## Components

### Storefront Components

| Component | File | Description |
|-----------|------|-------------|
| `Navbar` | `Navbar.tsx` | Top nav + menu + user dropdown |
| `AuthModal` | `AuthModal.tsx` | Login/Register/Reset tabs |
| `Hero` | `Hero.tsx` | Hero section with image |
| `ProductCard` | `ProductCard.tsx` | Product card (linked to detail) |
| `HorizontalCarousel` | `HorizontalCarousel.tsx` | Product carousel |
| `CartDrawer` | `CartDrawer.tsx` | Cart sidebar |
| `OrderModal` | `OrderModal.tsx` | Checkout form (protected) |
| `Footer` | `Footer.tsx` | Footer section |
| `FloatingNav` | `FloatingNav.tsx` | Mobile floating navigation |

---

## Styles

### Pattern

All styles use **styled-components** in separate `.styles.ts` files:

```typescript
// Import with namespace
import * as S from "@/styles/storefront/Navbar.styles";

// Usage
<S.Nav $isScrolled={isScrolled}>
  <S.NavContainer>...</S.NavContainer>
</S.Nav>
```

### Design System

See `docs/theme.md` for full design system:
- **Colors:** Black (#09090b), White (#ffffff), Red (#E60012)
- **Typography:** Inter, Kanit, Bold 700-900
- **Corners:** Sharp (no border-radius)
- **Animations:** 0.3s-0.7s ease

---

## Hooks & Store

### Hooks

| Hook | File | Description |
|------|------|-------------|
| `useMenu` | `lib/hooks/useMenu.ts` | Fetch menu from API |
| `useSession` | `next-auth/react` | Get auth session |
| `useQuery` | `@tanstack/react-query` | Data fetching |

### Store (Zustand)

```typescript
import { useCart } from "@/lib/store";

// Usage
const items = useCart((state) => state.items);
const addItem = useCart((state) => state.addItem);
const removeItem = useCart((state) => state.removeItem);
const clearCart = useCart((state) => state.clearCart);
const total = useCart((state) => state.total);
```

---

## Types

### Product Types (`types/index.ts`)

```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface Order {
  id?: string;
  customerName: string;
  phone: string;
  address: string;
  items: { productId: string; quantity: number; price: number }[];
  total: number;
  status?: string;
  createdAt?: string;
}
```

### Menu Types (`types/menu.ts`)

```typescript
interface MenuItem {
  id: string;
  label: string;      // Thai name
  subLabel: string;   // English name
  href: string;       // URL (e.g., /category/women)
  isActive?: boolean;
  order: number;
}
```

### Auth Types (`types/next-auth.d.ts`)

```typescript
interface Session {
  user: {
    id: string;
    email: string;
    name: string;
    image?: string | null;
  };
}
```

---

## Mock Data

**File:** `lib/mock-data.ts`

| Category | Count | ID Prefix |
|----------|-------|-----------|
| Women | 12 | `w001` - `w012` |
| Men | 12 | `m001` - `m012` |
| Kids | 10 | `k001` - `k010` |
| Baby | 10 | `b001` - `b010` |
| **Total** | **44** | |

---

*Document Version: 1.1.0*
