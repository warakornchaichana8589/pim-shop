// ============================================================
// Product Option Types
// ระบบ options ที่ยืดหยุ่นสำหรับสินค้าหลายประเภท
// ============================================================

/**
 * ประเภทของ option ที่รองรับ
 */
export type OptionType = 
  | "color"      // สี (แสดงเป็น color swatch)
  | "size"       // ไซส์ (แสดงเป็น button)
  | "select"     // dropdown
  | "radio"      // radio buttons
  | "text"       // text input (เช่น ข้อความสลัก)
  | "number";    // number input (เช่น จำนวน)

/**
 * ค่าของแต่ละ option
 */
export interface OptionValue {
  id: string;
  label: string;          // ชื่อที่แสดง
  value: string;          // ค่าจริง
  colorCode?: string;     // สำหรับ type: color
  imageUrl?: string;      // รูปภาพประกอบ (ถ้ามี)
  priceModifier?: number; // ราคาที่เพิ่ม/ลด เช่น +50, -20
  stock?: number;         // stock ของ option นี้
  disabled?: boolean;     // ปิดใช้งาน (เช่น หมด)
}

/**
 * Product Option Group
 * เช่น กลุ่ม "ไซส์" มีค่า S, M, L, XL
 */
export interface ProductOption {
  id: string;
  name: string;           // ชื่อ option เช่น "ไซส์", "สี", "รสชาติ"
  type: OptionType;       // ประเภทการแสดงผล
  required: boolean;      // ต้องเลือกหรือไม่
  values: OptionValue[];  // ค่าที่เลือกได้
  defaultValue?: string;  // ค่าเริ่มต้น (id ของ value)
}

/**
 * Product Variant
 * สินค้าที่มีหลาย combination ของ options
 * เช่น เสื้อสีขาว ไซส์ M = variant หนึ่ง
 */
export interface ProductVariant {
  id: string;
  sku: string;
  options: Record<string, string>;  // { optionId: valueId }
  price: number;
  originalPrice?: number;
  stock: number;
  images?: string[];
}

/**
 * Extended Product with Dynamic Options
 */
export interface ProductWithOptions {
  id: string;
  name: string;
  description: string;
  category: string;
  categoryType: ProductCategoryType;
  
  // Pricing (base price ถ้าไม่มี variants)
  basePrice: number;
  originalPrice?: number;
  discount?: number;
  
  // Media
  images: string[];
  
  // Dynamic Options
  options: ProductOption[];
  
  // Variants (ถ้ามี)
  variants?: ProductVariant[];
  
  // Stock (ถ้าไม่ใช้ variants)
  stock?: number;
  
  // Specifications
  specifications?: Record<string, string>;
  
  // Metadata
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

/**
 * ประเภทสินค้าหลัก (ใช้กำหนด default options)
 */
export type ProductCategoryType = 
  | "clothing"      // เสื้อผ้า → size, color
  | "shoes"         // รองเท้า → size, color
  | "food"          // อาหาร → size, flavor
  | "beverage"      // เครื่องดื่ม → size, sweetness level
  | "electronics"   // อิเล็กทรอนิกส์ → storage, color
  | "home"          // ของใช้ในบ้าน → size, material
  | "beauty"        // เครื่องสำอาง → shade, size
  | "simple";       // สินค้าทั่วไป → no options

// ============================================================
// Helper Functions
// ============================================================

/**
 * ตรวจสอบว่าสินค้ามี options หรือไม่
 */
export function hasOptions(product: ProductWithOptions): boolean {
  return product.options.length > 0;
}

/**
 * ตรวจสอบว่าสินค้าใช้ระบบ variants หรือไม่
 */
export function hasVariants(product: ProductWithOptions): boolean {
  return !!product.variants && product.variants.length > 0;
}

/**
 * หา variant จาก selected options
 */
export function findVariant(
  product: ProductWithOptions,
  selectedOptions: Record<string, string>
): ProductVariant | undefined {
  if (!product.variants) return undefined;
  
  return product.variants.find((variant) => {
    return Object.entries(selectedOptions).every(
      ([optionId, valueId]) => variant.options[optionId] === valueId
    );
  });
}

/**
 * คำนวณราคาจาก selected options
 */
export function calculatePrice(
  product: ProductWithOptions,
  selectedOptions: Record<string, string>
): number {
  // ถ้ามี variants ใช้ราคาจาก variant
  if (hasVariants(product)) {
    const variant = findVariant(product, selectedOptions);
    return variant?.price ?? product.basePrice;
  }
  
  // ถ้าไม่มี variants คำนวณจาก price modifiers
  let price = product.basePrice;
  
  for (const option of product.options) {
    const selectedValueId = selectedOptions[option.id];
    const selectedValue = option.values.find((v) => v.id === selectedValueId);
    
    if (selectedValue?.priceModifier) {
      price += selectedValue.priceModifier;
    }
  }
  
  return price;
}

/**
 * ตรวจสอบ stock จาก selected options
 */
export function getStock(
  product: ProductWithOptions,
  selectedOptions: Record<string, string>
): number {
  // ถ้ามี variants ใช้ stock จาก variant
  if (hasVariants(product)) {
    const variant = findVariant(product, selectedOptions);
    return variant?.stock ?? 0;
  }
  
  // ถ้าไม่มี variants ใช้ stock หลัก
  return product.stock ?? 0;
}

/**
 * ตรวจสอบว่าเลือก required options ครบหรือยัง
 */
export function isSelectionComplete(
  product: ProductWithOptions,
  selectedOptions: Record<string, string>
): boolean {
  for (const option of product.options) {
    if (option.required && !selectedOptions[option.id]) {
      return false;
    }
  }
  return true;
}

/**
 * สร้าง default options selection
 */
export function getDefaultSelection(
  product: ProductWithOptions
): Record<string, string> {
  const selection: Record<string, string> = {};
  
  for (const option of product.options) {
    if (option.defaultValue) {
      selection[option.id] = option.defaultValue;
    }
  }
  
  return selection;
}
