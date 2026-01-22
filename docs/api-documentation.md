# 📡 API Documentation for Backend

> เอกสาร API ที่ Frontend ต้องการให้ Backend พัฒนา

**เวอร์ชัน:** 1.1.0  
**อัปเดตล่าสุด:** 2026-01-22

---

## 📋 สารบัญ

- [Overview](#overview)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
  - [Menu API](#1-menu-api)
  - [Products API](#2-products-api)
  - [Categories API](#3-categories-api)
  - [Orders API](#4-orders-api)

---

## Overview

### Base URL

```
Production:  https://api.pim-shop.com/v1
Staging:     https://staging-api.pim-shop.com/v1
Development: http://localhost:3000/api
```

### Response Format

ทุก API ต้องส่ง response ในรูปแบบนี้:

```json
{
  "success": true,
  "data": { ... },
  "message": "Optional message",
  "error": null
}
```

**Error Response:**

```json
{
  "success": false,
  "data": null,
  "message": "Error description",
  "error": {
    "code": "ERROR_CODE",
    "details": "Detailed error message"
  }
}
```

### HTTP Status Codes

| Status | Description |
|--------|-------------|
| 200    | Success |
| 201    | Created |
| 400    | Bad Request |
| 401    | Unauthorized |
| 404    | Not Found |
| 500    | Internal Server Error |

---

## Authentication

> หมายเหตุ: สำหรับ Phase 1 ยังไม่ต้องใช้ authentication สำหรับ public APIs

```
Authorization: Bearer <token>
```

---

## API Endpoints

---

## 1. Menu API

### GET /menu

ดึงรายการเมนู Navigation สำหรับ Navbar

**Endpoint:** `GET /v1/menu`

**Headers:**

```
Content-Type: application/json
```

**Request:** ไม่มี body

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "label": "ผู้หญิง",
      "subLabel": "WOMEN",
      "href": "/category/women",
      "isActive": true,
      "order": 1
    },
    {
      "id": "2",
      "label": "ผู้ชาย",
      "subLabel": "MEN",
      "href": "/category/men",
      "isActive": false,
      "order": 2
    },
    {
      "id": "3",
      "label": "เด็ก",
      "subLabel": "KIDS",
      "href": "/category/kids",
      "isActive": false,
      "order": 3
    },
    {
      "id": "4",
      "label": "เด็กอ่อน",
      "subLabel": "BABY",
      "href": "/category/baby",
      "isActive": false,
      "order": 4
    }
  ]
}
```

**TypeScript Interface:**

```typescript
interface MenuItem {
  id: string;
  label: string;      // ชื่อภาษาไทย
  subLabel: string;   // ชื่อภาษาอังกฤษ
  href: string;       // URL path
  isActive?: boolean; // แสดง active state เริ่มต้น
  order: number;      // ลำดับการแสดงผล
}

interface MenuResponse {
  success: boolean;
  data: MenuItem[];
}
```

**Notes:**
- ข้อมูลควร sort ตาม `order` ascending
- `isActive` ใช้สำหรับกำหนด default active menu
- Frontend จะ cache ข้อมูล 5 นาที

---

## 2. Products API

### GET /products

ดึงรายการสินค้าทั้งหมด

**Endpoint:** `GET /v1/products`

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | number | No | หน้าที่ต้องการ (default: 1) |
| limit | number | No | จำนวนต่อหน้า (default: 20) |
| search | string | No | คำค้นหา |
| category | string | No | filter ตาม category ID |
| sort | string | No | เรียงตาม: price_asc, price_desc, newest |

**Response:**

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "prod_001",
        "name": "เสื้อยืดคอกลม",
        "description": "เสื้อยืดผ้าฝ้าย 100%",
        "price": 590,
        "originalPrice": 790,
        "discount": 25,
        "images": [
          "https://cdn.pim-shop.com/images/prod_001_1.jpg",
          "https://cdn.pim-shop.com/images/prod_001_2.jpg"
        ],
        "category": {
          "id": "cat_001",
          "name": "เสื้อผ้าผู้ชาย"
        },
        "stock": 150,
        "isAvailable": true,
        "tags": ["bestseller", "new"],
        "createdAt": "2026-01-20T10:00:00Z",
        "updatedAt": "2026-01-22T15:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150,
      "totalPages": 8
    }
  }
}
```

**TypeScript Interface:**

```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  category: {
    id: string;
    name: string;
  };
  stock: number;
  isAvailable: boolean;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

interface ProductListResponse {
  success: boolean;
  data: {
    items: Product[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}
```

---

### GET /products/:id

ดึงข้อมูลสินค้าเดี่ยว **พร้อม Dynamic Options**

**Endpoint:** `GET /v1/products/:id`

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "prod_001",
    "name": "เสื้อยืดคอกลม Dry-EX",
    "description": "เสื้อยืดผ้า Dry-EX ระบายอากาศได้ดี แห้งเร็ว",
    "basePrice": 590,
    "originalPrice": 790,
    "discount": 25,
    "images": [
      "https://cdn.pim-shop.com/images/prod_001_1.jpg",
      "https://cdn.pim-shop.com/images/prod_001_2.jpg"
    ],
    "category": {
      "id": "cat_001",
      "name": "เสื้อผ้าผู้ชาย"
    },
    "categoryType": "clothing",
    "options": [
      {
        "id": "color",
        "name": "สี",
        "type": "color",
        "required": true,
        "defaultValue": "white",
        "values": [
          { "id": "white", "label": "ขาว", "value": "white", "colorCode": "#FFFFFF" },
          { "id": "black", "label": "ดำ", "value": "black", "colorCode": "#09090b" },
          { "id": "navy", "label": "กรมท่า", "value": "navy", "colorCode": "#1B3A57", "disabled": true }
        ]
      },
      {
        "id": "size",
        "name": "ไซส์",
        "type": "size",
        "required": true,
        "values": [
          { "id": "s", "label": "S", "value": "S" },
          { "id": "m", "label": "M", "value": "M" },
          { "id": "l", "label": "L", "value": "L", "priceModifier": 30 },
          { "id": "xl", "label": "XL", "value": "XL", "priceModifier": 30 },
          { "id": "xxl", "label": "XXL", "value": "XXL", "disabled": true }
        ]
      }
    ],
    "variants": [
      {
        "id": "var_001",
        "sku": "SHIRT-WHT-M",
        "options": { "color": "white", "size": "m" },
        "price": 590,
        "stock": 25,
        "images": ["https://cdn.pim-shop.com/images/prod_001_white.jpg"]
      },
      {
        "id": "var_002",
        "sku": "SHIRT-BLK-M",
        "options": { "color": "black", "size": "m" },
        "price": 590,
        "stock": 15
      }
    ],
    "stock": 150,
    "isAvailable": true,
    "specifications": {
      "material": "100% Polyester (Dry-EX)",
      "origin": "Made in Vietnam",
      "care": "ซักด้วยน้ำเย็น, ห้ามใช้น้ำยาฟอกขาว"
    },
    "relatedProducts": ["prod_002", "prod_003"],
    "createdAt": "2026-01-20T10:00:00Z",
    "updatedAt": "2026-01-22T15:30:00Z"
  }
}
```

---

## 🎯 Dynamic Product Options System

> **สำคัญ:** ระบบ Options ใหม่รองรับสินค้าหลายประเภท ไม่ใช่แค่เสื้อผ้า

### Option Types ที่รองรับ

| Type | Description | UI แสดงผล |
|------|-------------|-----------|
| `color` | สีสินค้า | Color swatch (วงกลม) |
| `size` | ไซส์ | Button grid |
| `radio` | ตัวเลือกแบบ single | Button group |
| `select` | Dropdown | Select box |
| `text` | ข้อความ custom | Text input |
| `number` | ตัวเลข | Number input |

### Product Category Types

| Type | Options ที่มักใช้ | ตัวอย่าง |
|------|------------------|---------|
| `clothing` | size, color | เสื้อผ้า |
| `shoes` | size, color | รองเท้า |
| `food` | size, spice, extras | อาหาร |
| `beverage` | size, sweetness, topping | เครื่องดื่ม |
| `electronics` | storage, color | มือถือ, tablet |
| `home` | size, material | ของใช้ในบ้าน |
| `beauty` | shade, size | เครื่องสำอาง |
| `simple` | ไม่มี options | หนังสือ, ของทั่วไป |

### TypeScript Interfaces

```typescript
// Option Types
type OptionType = "color" | "size" | "select" | "radio" | "text" | "number";

// Option Value
interface OptionValue {
  id: string;
  label: string;           // ชื่อที่แสดง
  value: string;           // ค่าจริง
  colorCode?: string;      // สำหรับ type: color (hex code)
  imageUrl?: string;       // รูปภาพประกอบ
  priceModifier?: number;  // ราคาเพิ่ม/ลด เช่น +30, -20
  stock?: number;          // stock ของ option นี้
  disabled?: boolean;      // ปิดใช้งาน (หมด)
}

// Product Option Group
interface ProductOption {
  id: string;
  name: string;            // ชื่อ option เช่น "ไซส์", "สี"
  type: OptionType;        // ประเภทการแสดงผล
  required: boolean;       // ต้องเลือกหรือไม่
  values: OptionValue[];   // ค่าที่เลือกได้
  defaultValue?: string;   // ค่าเริ่มต้น (id ของ value)
}

// Product Variant (combination of options)
interface ProductVariant {
  id: string;
  sku: string;                        // SKU code
  options: Record<string, string>;    // { optionId: valueId }
  price: number;
  originalPrice?: number;
  stock: number;
  images?: string[];                  // รูปเฉพาะ variant นี้
}

// Full Product with Options
interface ProductWithOptions {
  id: string;
  name: string;
  description: string;
  category: { id: string; name: string };
  categoryType: ProductCategoryType;
  
  // Pricing
  basePrice: number;
  originalPrice?: number;
  discount?: number;
  
  // Media
  images: string[];
  
  // Dynamic Options
  options: ProductOption[];
  
  // Variants (optional - ใช้เมื่อต้องการ SKU แยก)
  variants?: ProductVariant[];
  
  // Stock (ถ้าไม่ใช้ variants)
  stock?: number;
  isAvailable: boolean;
  
  // Specifications
  specifications?: Record<string, string>;
  
  // Related
  relatedProducts?: string[];
  tags?: string[];
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
}

type ProductCategoryType = 
  | "clothing" | "shoes" | "food" | "beverage" 
  | "electronics" | "home" | "beauty" | "simple";
```

---

### ตัวอย่าง: สินค้าประเภทต่างๆ

#### 1. อาหาร (food)

```json
{
  "id": "food_001",
  "name": "ข้าวผัดกุ้ง",
  "categoryType": "food",
  "basePrice": 89,
  "options": [
    {
      "id": "size",
      "name": "ขนาด",
      "type": "radio",
      "required": true,
      "values": [
        { "id": "regular", "label": "ธรรมดา", "value": "regular" },
        { "id": "large", "label": "พิเศษ", "value": "large", "priceModifier": 30 }
      ]
    },
    {
      "id": "spice",
      "name": "ระดับความเผ็ด",
      "type": "radio",
      "required": true,
      "values": [
        { "id": "none", "label": "ไม่เผ็ด", "value": "0" },
        { "id": "mild", "label": "เผ็ดน้อย", "value": "1" },
        { "id": "hot", "label": "เผ็ดมาก", "value": "3" }
      ]
    }
  ]
}
```

#### 2. เครื่องดื่ม (beverage)

```json
{
  "id": "bev_001",
  "name": "ชาไทยมะพร้าว",
  "categoryType": "beverage",
  "basePrice": 55,
  "options": [
    {
      "id": "size",
      "name": "ขนาด",
      "type": "select",
      "required": true,
      "values": [
        { "id": "s", "label": "S (12 oz)", "value": "S" },
        { "id": "m", "label": "M (16 oz)", "value": "M", "priceModifier": 10 },
        { "id": "l", "label": "L (22 oz)", "value": "L", "priceModifier": 20 }
      ]
    },
    {
      "id": "sweetness",
      "name": "ความหวาน",
      "type": "radio",
      "required": true,
      "values": [
        { "id": "0", "label": "ไม่หวาน", "value": "0%" },
        { "id": "50", "label": "หวานปกติ", "value": "50%" },
        { "id": "100", "label": "หวานมาก", "value": "100%" }
      ]
    },
    {
      "id": "topping",
      "name": "ท็อปปิ้ง",
      "type": "select",
      "required": false,
      "values": [
        { "id": "none", "label": "ไม่เพิ่ม", "value": "none" },
        { "id": "pearl", "label": "ไข่มุก", "value": "pearl", "priceModifier": 15 }
      ]
    }
  ]
}
```

#### 3. สินค้าทั่วไป (simple) - ไม่มี options

```json
{
  "id": "book_001",
  "name": "หนังสือ: The Art of Simple",
  "categoryType": "simple",
  "basePrice": 350,
  "options": [],
  "stock": 30
}
```

#### 4. ของขวัญ พร้อม text input

```json
{
  "id": "gift_001",
  "name": "กล่องของขวัญพร้อมการ์ด",
  "categoryType": "simple",
  "basePrice": 199,
  "options": [
    {
      "id": "style",
      "name": "สไตล์กล่อง",
      "type": "color",
      "required": true,
      "values": [
        { "id": "gold", "label": "Gold", "value": "gold", "colorCode": "#D4AF37" },
        { "id": "silver", "label": "Silver", "value": "silver", "colorCode": "#C0C0C0" }
      ]
    },
    {
      "id": "message",
      "name": "ข้อความบนการ์ด",
      "type": "text",
      "required": false,
      "values": []
    }
  ]
}
```

---

### Price Calculation Logic

```
finalPrice = basePrice + sum(selectedOption.priceModifier)
```

**หรือถ้าใช้ Variants:**

```
finalPrice = variant.price (ตามที่กำหนดใน variant)
```

### Stock Checking Logic

1. ถ้ามี `variants` → ใช้ stock จาก matched variant
2. ถ้าไม่มี `variants` → ใช้ stock ระดับ product
3. ถ้า `option.values[].disabled = true` → แสดงว่าหมด



## 3. Categories API

### GET /categories

ดึงหมวดหมู่สินค้าทั้งหมด

**Endpoint:** `GET /v1/categories`

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "cat_women",
      "name": "ผู้หญิง",
      "slug": "women",
      "image": "https://cdn.pim-shop.com/categories/women.jpg",
      "productCount": 250,
      "children": [
        {
          "id": "cat_women_tops",
          "name": "เสื้อผ้า",
          "slug": "women-tops",
          "productCount": 80
        },
        {
          "id": "cat_women_pants",
          "name": "กางเกง",
          "slug": "women-pants",
          "productCount": 60
        }
      ]
    },
    {
      "id": "cat_men",
      "name": "ผู้ชาย",
      "slug": "men",
      "image": "https://cdn.pim-shop.com/categories/men.jpg",
      "productCount": 200,
      "children": []
    }
  ]
}
```

**TypeScript Interface:**

```typescript
interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
  productCount: number;
  children?: Category[];
}

interface CategoriesResponse {
  success: boolean;
  data: Category[];
}
```

---

## 4. Orders API

### POST /orders

สร้างคำสั่งซื้อใหม่

**Endpoint:** `POST /v1/orders`

**Request Body:**

```json
{
  "items": [
    {
      "productId": "prod_001",
      "quantity": 2,
      "size": "M",
      "color": "ขาว"
    },
    {
      "productId": "prod_002",
      "quantity": 1,
      "size": "L",
      "color": "ดำ"
    }
  ],
  "customer": {
    "name": "สมชาย ใจดี",
    "phone": "0812345678",
    "email": "somchai@email.com"
  },
  "shippingAddress": {
    "address": "123/45 ถ.สุขุมวิท",
    "subDistrict": "คลองตัน",
    "district": "คลองเตย",
    "province": "กรุงเทพมหานคร",
    "postalCode": "10110"
  },
  "paymentMethod": "cod",
  "note": "ส่งช่วงเย็นหลัง 5 โมง"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "orderId": "ORD-20260122-001",
    "status": "pending",
    "items": [
      {
        "productId": "prod_001",
        "name": "เสื้อยืดคอกลม",
        "quantity": 2,
        "price": 590,
        "subtotal": 1180
      }
    ],
    "summary": {
      "subtotal": 1770,
      "shippingFee": 50,
      "discount": 0,
      "total": 1820
    },
    "estimatedDelivery": "2026-01-25",
    "createdAt": "2026-01-22T17:30:00Z"
  }
}
```

**TypeScript Interface:**

```typescript
interface OrderItem {
  productId: string;
  quantity: number;
  size?: string;
  color?: string;
}

interface CreateOrderRequest {
  items: OrderItem[];
  customer: {
    name: string;
    phone: string;
    email?: string;
  };
  shippingAddress: {
    address: string;
    subDistrict: string;
    district: string;
    province: string;
    postalCode: string;
  };
  paymentMethod: "cod" | "bank_transfer" | "credit_card";
  note?: string;
}

interface OrderResponse {
  success: boolean;
  data: {
    orderId: string;
    status: "pending" | "confirmed" | "shipping" | "delivered" | "cancelled";
    items: Array<{
      productId: string;
      name: string;
      quantity: number;
      price: number;
      subtotal: number;
    }>;
    summary: {
      subtotal: number;
      shippingFee: number;
      discount: number;
      total: number;
    };
    estimatedDelivery: string;
    createdAt: string;
  };
}
```

---

### GET /orders/:id

ดึงข้อมูลคำสั่งซื้อ

**Endpoint:** `GET /v1/orders/:id`

**Response:** เหมือน POST /orders response

---

## 📝 Notes for Backend Team

### Priority (ลำดับความสำคัญ)

1. **🔴 High** - Menu API (ใช้ใน Navbar)
2. **🔴 High** - Products API (หน้าแสดงสินค้า)
3. **🟡 Medium** - Categories API (filter สินค้า)
4. **🟡 Medium** - Orders API (ระบบสั่งซื้อ)

### CORS Configuration

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

### Rate Limiting

- แนะนำ: 100 requests/minute per IP
- สำหรับ authenticated users: 300 requests/minute

---

## 📞 Contact

หากมีคำถามเพิ่มเติม ติดต่อ Frontend Team

---

*Document Version: 1.0.0*
