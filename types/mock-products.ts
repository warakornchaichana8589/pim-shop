import { ProductWithOptions } from "./product-options";

// ============================================================
// Mock Products - ตัวอย่างสินค้าหลายประเภท
// ============================================================

/**
 * 1. เสื้อผ้า - มี size และ color
 */
export const MOCK_CLOTHING: ProductWithOptions = {
  id: "clothing_001",
  name: "เสื้อยืดคอกลม Dry-EX",
  description: "เสื้อยืดผ้า Dry-EX ระบายอากาศได้ดี แห้งเร็ว เหมาะสำหรับกิจกรรมกลางแจ้ง",
  category: "เสื้อผ้าผู้ชาย",
  categoryType: "clothing",
  basePrice: 590,
  originalPrice: 790,
  discount: 25,
  images: ["/PROD_01.webp", "/PROD_02.webp", "/PROD_03.webp"],
  options: [
    {
      id: "color",
      name: "สี",
      type: "color",
      required: true,
      values: [
        { id: "white", label: "ขาว", value: "white", colorCode: "#FFFFFF" },
        { id: "black", label: "ดำ", value: "black", colorCode: "#09090b" },
        { id: "navy", label: "กรมท่า", value: "navy", colorCode: "#1B3A57" },
        { id: "gray", label: "เทา", value: "gray", colorCode: "#71717A" },
      ],
      defaultValue: "white",
    },
    {
      id: "size",
      name: "ไซส์",
      type: "size",
      required: true,
      values: [
        { id: "xs", label: "XS", value: "XS" },
        { id: "s", label: "S", value: "S" },
        { id: "m", label: "M", value: "M" },
        { id: "l", label: "L", value: "L" },
        { id: "xl", label: "XL", value: "XL" },
        { id: "xxl", label: "XXL", value: "XXL", disabled: true },
      ],
    },
  ],
  stock: 50,
  specifications: {
    material: "100% Polyester (Dry-EX)",
    origin: "Made in Vietnam",
    care: "ซักด้วยน้ำเย็น, ห้ามใช้น้ำยาฟอกขาว",
  },
  createdAt: "2026-01-20T10:00:00Z",
  updatedAt: "2026-01-22T15:30:00Z",
};

/**
 * 2. อาหาร - มี size และ spice level
 */
export const MOCK_FOOD: ProductWithOptions = {
  id: "food_001",
  name: "ข้าวผัดกุ้ง",
  description: "ข้าวผัดกุ้งสดใหม่ ใช้กุ้งขนาดใหญ่ ผัดกับไข่และผักสด",
  category: "อาหารจานเดียว",
  categoryType: "food",
  basePrice: 89,
  images: ["/PROD_04.webp"],
  options: [
    {
      id: "size",
      name: "ขนาด",
      type: "radio",
      required: true,
      values: [
        { id: "regular", label: "ธรรมดา", value: "regular" },
        { id: "large", label: "พิเศษ", value: "large", priceModifier: 30 },
        { id: "jumbo", label: "จัมโบ้", value: "jumbo", priceModifier: 60 },
      ],
      defaultValue: "regular",
    },
    {
      id: "spice",
      name: "ระดับความเผ็ด",
      type: "radio",
      required: true,
      values: [
        { id: "none", label: "ไม่เผ็ด", value: "0" },
        { id: "mild", label: "เผ็ดน้อย", value: "1" },
        { id: "medium", label: "เผ็ดกลาง", value: "2" },
        { id: "hot", label: "เผ็ดมาก", value: "3" },
      ],
      defaultValue: "mild",
    },
    {
      id: "egg",
      name: "ไข่เพิ่ม",
      type: "radio",
      required: false,
      values: [
        { id: "no_egg", label: "ไม่เพิ่ม", value: "0" },
        { id: "fried", label: "ไข่ดาว", value: "fried", priceModifier: 15 },
        { id: "omelet", label: "ไข่เจียว", value: "omelet", priceModifier: 20 },
      ],
    },
  ],
  stock: 100,
  specifications: {
    calories: "450 kcal",
    allergens: "กุ้ง, ไข่",
  },
  createdAt: "2026-01-20T10:00:00Z",
  updatedAt: "2026-01-22T15:30:00Z",
};

/**
 * 3. เครื่องดื่ม - มี size และ sweetness
 */
export const MOCK_BEVERAGE: ProductWithOptions = {
  id: "beverage_001",
  name: "ชาไทยมะพร้าว",
  description: "ชาไทยผสมกะทิมะพร้าวแท้ หอมมัน กลมกล่อม",
  category: "เครื่องดื่ม",
  categoryType: "beverage",
  basePrice: 55,
  images: ["/PROD_05.webp"],
  options: [
    {
      id: "size",
      name: "ขนาด",
      type: "select",
      required: true,
      values: [
        { id: "s", label: "S (12 oz)", value: "S" },
        { id: "m", label: "M (16 oz)", value: "M", priceModifier: 10 },
        { id: "l", label: "L (22 oz)", value: "L", priceModifier: 20 },
      ],
    },
    {
      id: "sweetness",
      name: "ความหวาน",
      type: "radio",
      required: true,
      values: [
        { id: "0", label: "ไม่หวาน", value: "0%" },
        { id: "25", label: "หวานน้อย", value: "25%" },
        { id: "50", label: "หวานปกติ", value: "50%" },
        { id: "100", label: "หวานมาก", value: "100%" },
      ],
      defaultValue: "50",
    },
    {
      id: "topping",
      name: "ท็อปปิ้ง",
      type: "select",
      required: false,
      values: [
        { id: "none", label: "ไม่เพิ่ม", value: "none" },
        { id: "pearl", label: "ไข่มุก", value: "pearl", priceModifier: 15 },
        { id: "jelly", label: "เยลลี่", value: "jelly", priceModifier: 10 },
        { id: "pudding", label: "พุดดิ้ง", value: "pudding", priceModifier: 15 },
      ],
    },
  ],
  stock: 200,
  createdAt: "2026-01-20T10:00:00Z",
  updatedAt: "2026-01-22T15:30:00Z",
};

/**
 * 4. สินค้าทั่วไป - ไม่มี options
 */
export const MOCK_SIMPLE: ProductWithOptions = {
  id: "simple_001",
  name: "หนังสือ: The Art of Simple",
  description: "หนังสือเกี่ยวกับศิลปะแห่งความเรียบง่ายในการใช้ชีวิต",
  category: "หนังสือ",
  categoryType: "simple",
  basePrice: 350,
  images: ["/PROD_06.webp"],
  options: [], // ไม่มี options
  stock: 30,
  specifications: {
    pages: "256 หน้า",
    language: "ภาษาไทย",
    publisher: "Pim Publishing",
  },
  createdAt: "2026-01-20T10:00:00Z",
  updatedAt: "2026-01-22T15:30:00Z",
};

/**
 * 5. ของขวัญพร้อมข้อความ - มี text input
 */
export const MOCK_GIFT: ProductWithOptions = {
  id: "gift_001",
  name: "กล่องของขวัญพร้อมการ์ด",
  description: "กล่องของขวัญสวยหรู พร้อมการ์ดอวยพรที่สลักข้อความได้",
  category: "ของขวัญ",
  categoryType: "simple",
  basePrice: 199,
  images: ["/FEATURED_SMALL_1.webp"],
  options: [
    {
      id: "style",
      name: "สไตล์กล่อง",
      type: "color",
      required: true,
      values: [
        { id: "gold", label: "Gold", value: "gold", colorCode: "#D4AF37" },
        { id: "silver", label: "Silver", value: "silver", colorCode: "#C0C0C0" },
        { id: "rose", label: "Rose Gold", value: "rose", colorCode: "#B76E79" },
      ],
    },
    {
      id: "message",
      name: "ข้อความบนการ์ด",
      type: "text",
      required: false,
      values: [],
    },
  ],
  stock: 50,
  createdAt: "2026-01-20T10:00:00Z",
  updatedAt: "2026-01-22T15:30:00Z",
};

// All mock products
export const MOCK_PRODUCTS: ProductWithOptions[] = [
  MOCK_CLOTHING,
  MOCK_FOOD,
  MOCK_BEVERAGE,
  MOCK_SIMPLE,
  MOCK_GIFT,
];

// Get product by ID
export function getMockProductById(id: string): ProductWithOptions | undefined {
  return MOCK_PRODUCTS.find((p) => p.id === id);
}
