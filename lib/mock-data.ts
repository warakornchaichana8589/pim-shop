import { Product } from "@/types";

// รูปภาพที่มีอยู่
const IMAGES = [
  "/PROD_01.webp",
  "/PROD_02.webp",
  "/PROD_03.webp",
  "/PROD_04.webp",
  "/PROD_05.webp",
  "/PROD_06.webp",
];

// Mock Products Data - สินค้าหลายหมวดหมู่
export const MOCK_PRODUCTS: Product[] = [
  // ============================================================
  // WOMEN - ผู้หญิง
  // ============================================================
  {
    id: "w001",
    name: "เสื้อยืดคอกลม Dry-EX",
    description:
      "เสื้อยืดผ้า Dry-EX ระบายอากาศได้ดี แห้งเร็ว เหมาะสำหรับกิจกรรมกลางแจ้ง",
    price: 590,
    image: IMAGES[0],
    stock: 25,
    category: "women",
  },
  {
    id: "w002",
    name: "กางเกงขาสั้น Ultra Stretch",
    description: "กางเกงยืดหยุ่นสูง ใส่สบาย เคลื่อนไหวได้อิสระ",
    price: 790,
    image: IMAGES[1],
    stock: 18,
    category: "women",
  },
  {
    id: "w003",
    name: "เสื้อเชิ้ตลินิน Premium",
    description: "เสื้อเชิ้ตผ้าลินินคุณภาพสูง ใส่สบายตลอดวัน",
    price: 1290,
    image: IMAGES[2],
    stock: 12,
    category: "women",
  },
  {
    id: "w004",
    name: "เดรสผ้าลินิน A-Line",
    description: "เดรสทรง A-Line ผ้าลินินเนื้อดี ใส่สบาย",
    price: 1490,
    image: IMAGES[3],
    stock: 10,
    category: "women",
  },
  {
    id: "w005",
    name: "กระโปรงพลีทยาว",
    description: "กระโปรงพลีทยาว ใส่แล้วดูสูง สวยหรู",
    price: 990,
    image: IMAGES[4],
    stock: 15,
    category: "women",
  },
  {
    id: "w006",
    name: "เสื้อนิต Merino Wool",
    description: "เสื้อนิตผ้าขนสัตว์คุณภาพสูง อบอุ่นและนุ่มสบาย",
    price: 1790,
    image: IMAGES[5],
    stock: 8,
    category: "women",
  },
  {
    id: "w007",
    name: "แจ็คเก็ต Ultra Light Down",
    description: "แจ็คเก็ตขนเป็ดน้ำหนักเบา อบอุ่น พกพาสะดวก",
    price: 2490,
    image: IMAGES[0],
    stock: 20,
    category: "women",
  },
  {
    id: "w008",
    name: "เสื้อครอปท็อป AIRism",
    description: "เสื้อครอปท็อปผ้า AIRism ระบายอากาศดีเยี่ยม",
    price: 490,
    image: IMAGES[1],
    stock: 30,
    category: "women",
  },
  {
    id: "w009",
    name: "กางเกงยีนส์ High Rise",
    description: "กางเกงยีนส์เอวสูง ทรงสวย ขาเรียว",
    price: 1490,
    image: IMAGES[2],
    stock: 22,
    category: "women",
  },
  {
    id: "w010",
    name: "เสื้อเบลาส์ผ้าซาติน",
    description: "เสื้อเบลาส์ผ้าซาตินเงางาม ดูหรูหรา",
    price: 990,
    image: IMAGES[3],
    stock: 14,
    category: "women",
  },
  {
    id: "w011",
    name: "คาร์ดิแกนผ้าถัก",
    description: "คาร์ดิแกนผ้าถักใส่สบาย เหมาะกับทุกโอกาส",
    price: 890,
    image: IMAGES[4],
    stock: 16,
    category: "women",
  },
  {
    id: "w012",
    name: "กางเกงขายาว Wide Leg",
    description: "กางเกงขายาวทรงขาบาน ใส่สบาย ดูดี",
    price: 1190,
    image: IMAGES[5],
    stock: 12,
    category: "women",
  },

  // ============================================================
  // MEN - ผู้ชาย
  // ============================================================
  {
    id: "m001",
    name: "เสื้อโปโล AIRism",
    description: "เสื้อโปโลผ้า AIRism ระบายอากาศ ใส่สบายตลอดวัน",
    price: 690,
    image: IMAGES[0],
    stock: 30,
    category: "men",
  },
  {
    id: "m002",
    name: "กางเกงยีนส์ Slim Fit",
    description: "กางเกงยีนส์ทรงสลิม ใส่ได้ทุกโอกาส",
    price: 1490,
    image: IMAGES[1],
    stock: 15,
    category: "men",
  },
  {
    id: "m003",
    name: "แจ็คเก็ต Ultra Light",
    description: "แจ็คเก็ตน้ำหนักเบา พกพาสะดวก กันลมได้ดี",
    price: 1590,
    image: IMAGES[2],
    stock: 8,
    category: "men",
  },
  {
    id: "m004",
    name: "เสื้อเชิ้ตออกซฟอร์ด",
    description: "เสื้อเชิ้ตผ้าออกซฟอร์ดคลาสสิค ใส่ได้ทั้งทำงานและลำลอง",
    price: 990,
    image: IMAGES[3],
    stock: 20,
    category: "men",
  },
  {
    id: "m005",
    name: "เสื้อยืด UT Graphic",
    description: "เสื้อยืดลายกราฟิคสุดเท่ คอลเลกชันพิเศษ",
    price: 590,
    image: IMAGES[4],
    stock: 35,
    category: "men",
  },
  {
    id: "m006",
    name: "กางเกงชิโน Regular Fit",
    description: "กางเกงชิโนทรงปกติ ใส่สบาย ดูดี",
    price: 990,
    image: IMAGES[5],
    stock: 25,
    category: "men",
  },
  {
    id: "m007",
    name: "เสื้อฮู้ด Sweat Pullover",
    description: "เสื้อฮู้ดผ้าสเวตเตอร์ อบอุ่น นุ่มสบาย",
    price: 1290,
    image: IMAGES[0],
    stock: 18,
    category: "men",
  },
  {
    id: "m008",
    name: "กางเกงขาสั้น Dry Stretch",
    description: "กางเกงขาสั้นผ้ายืด แห้งเร็ว เหมาะกับกีฬา",
    price: 790,
    image: IMAGES[1],
    stock: 28,
    category: "men",
  },
  {
    id: "m009",
    name: "เสื้อยืดคอกลม Supima Cotton",
    description: "เสื้อยืดผ้า Supima Cotton นุ่มพิเศษ คุณภาพสูง",
    price: 490,
    image: IMAGES[2],
    stock: 40,
    category: "men",
  },
  {
    id: "m010",
    name: "แจ็คเก็ตหนัง Faux Leather",
    description: "แจ็คเก็ตหนังเทียมสไตล์ไบเคอร์ ดูเท่มาก",
    price: 2990,
    image: IMAGES[3],
    stock: 6,
    category: "men",
  },
  {
    id: "m011",
    name: "เสื้อกันหนาว Fleece",
    description: "เสื้อกันหนาวผ้าฟลีซ อบอุ่น น้ำหนักเบา",
    price: 990,
    image: IMAGES[4],
    stock: 22,
    category: "men",
  },
  {
    id: "m012",
    name: "กางเกงจ๊อกเกอร์",
    description: "กางเกงจ๊อกเกอร์ใส่สบาย เหมาะกับทุกกิจกรรม",
    price: 890,
    image: IMAGES[5],
    stock: 30,
    category: "men",
  },

  // ============================================================
  // KIDS - เด็ก
  // ============================================================
  {
    id: "k001",
    name: "เสื้อยืดเด็ก UT Graphic",
    description: "เสื้อยืดเด็กลายกราฟิคน่ารัก ผ้าคอตตอน",
    price: 390,
    image: IMAGES[0],
    stock: 35,
    category: "kids",
  },
  {
    id: "k002",
    name: "กางเกงยีนส์เด็ก Stretch",
    description: "กางเกงยีนส์เด็กผ้ายืด ใส่สบาย เคลื่อนไหวได้คล่อง",
    price: 690,
    image: IMAGES[1],
    stock: 25,
    category: "kids",
  },
  {
    id: "k003",
    name: "ชุดเด็กลายการ์ตูน",
    description: "ชุดเด็กน่ารักลายการ์ตูน ผ้าคอตตอนนุ่ม",
    price: 490,
    image: IMAGES[2],
    stock: 20,
    category: "kids",
  },
  {
    id: "k004",
    name: "เสื้อกันหนาวเด็ก Fleece",
    description: "เสื้อกันหนาวเด็กผ้าฟลีซ อบอุ่น น่ารัก",
    price: 790,
    image: IMAGES[3],
    stock: 18,
    category: "kids",
  },
  {
    id: "k005",
    name: "กระโปรงเด็กผ้าพลีท",
    description: "กระโปรงเด็กผ้าพลีท ใส่แล้วน่ารัก",
    price: 590,
    image: IMAGES[4],
    stock: 15,
    category: "kids",
  },
  {
    id: "k006",
    name: "ชุดนอนเด็กลายหมี",
    description: "ชุดนอนเด็กลายหมี ผ้านุ่มมาก ใส่สบาย",
    price: 450,
    image: IMAGES[5],
    stock: 30,
    category: "kids",
  },
  {
    id: "k007",
    name: "เสื้อแจ็คเก็ตเด็ก Ultra Light",
    description: "แจ็คเก็ตเด็กน้ำหนักเบา กันลม กันฝนได้",
    price: 990,
    image: IMAGES[0],
    stock: 12,
    category: "kids",
  },
  {
    id: "k008",
    name: "กางเกงขาสั้นเด็ก Dry",
    description: "กางเกงขาสั้นเด็กผ้าแห้งเร็ว เหมาะกับกิจกรรม",
    price: 390,
    image: IMAGES[1],
    stock: 40,
    category: "kids",
  },
  {
    id: "k009",
    name: "เดรสเด็กผ้าลินิน",
    description: "เดรสเด็กหญิงผ้าลินิน หวาน น่ารัก",
    price: 690,
    image: IMAGES[2],
    stock: 14,
    category: "kids",
  },
  {
    id: "k010",
    name: "เสื้อกันฝนเด็ก",
    description: "เสื้อกันฝนเด็ก กันน้ำ 100% สีสันสดใส",
    price: 590,
    image: IMAGES[3],
    stock: 22,
    category: "kids",
  },

  // ============================================================
  // BABY - เด็กอ่อน
  // ============================================================
  {
    id: "b001",
    name: "บอดี้สูทเด็กอ่อน",
    description: "บอดี้สูทผ้านุ่มสำหรับเด็กอ่อน ปลอดภัยสำหรับผิวบอบบาง",
    price: 290,
    image: IMAGES[0],
    stock: 40,
    category: "baby",
  },
  {
    id: "b002",
    name: "ชุดนอนเด็กอ่อน",
    description: "ชุดนอนผ้านุ่มพิเศษ ปลอดภัยสำหรับผิวบอบบาง",
    price: 350,
    image: IMAGES[1],
    stock: 25,
    category: "baby",
  },
  {
    id: "b003",
    name: "ผ้าห่อตัวเด็กอ่อน Organic",
    description: "ผ้าห่อตัวผลิตจากผ้าออร์แกนิค ปลอดสารพิษ",
    price: 490,
    image: IMAGES[2],
    stock: 30,
    category: "baby",
  },
  {
    id: "b004",
    name: "หมวกเด็กอ่อน Cotton",
    description: "หมวกเด็กอ่อนผ้าคอตตอน นุ่มสบาย",
    price: 190,
    image: IMAGES[3],
    stock: 50,
    category: "baby",
  },
  {
    id: "b005",
    name: "ถุงเท้าเด็กอ่อน 3 คู่",
    description: "เซ็ตถุงเท้าเด็กอ่อน 3 คู่ ผ้านุ่มไม่ระคายเคือง",
    price: 250,
    image: IMAGES[4],
    stock: 60,
    category: "baby",
  },
  {
    id: "b006",
    name: "ชุดเอี๊ยมเด็กอ่อน",
    description: "ชุดเอี๊ยมเด็กอ่อน น่ารัก ใส่สบาย",
    price: 390,
    image: IMAGES[5],
    stock: 20,
    category: "baby",
  },
  {
    id: "b007",
    name: "เสื้อกันหนาวเด็กอ่อน Fleece",
    description: "เสื้อกันหนาวเด็กอ่อนผ้าฟลีซ อบอุ่น นุ่มนิ่ม",
    price: 490,
    image: IMAGES[0],
    stock: 18,
    category: "baby",
  },
  {
    id: "b008",
    name: "กางเกงเด็กอ่อน AIRism",
    description: "กางเกงเด็กอ่อนผ้า AIRism ระบายอากาศได้ดี",
    price: 290,
    image: IMAGES[1],
    stock: 35,
    category: "baby",
  },
  {
    id: "b009",
    name: "ชุดคลุมอาบน้ำเด็กอ่อน",
    description: "ชุดคลุมอาบน้ำผ้าขนหนู นุ่มมาก ซึมซับน้ำได้ดี",
    price: 450,
    image: IMAGES[2],
    stock: 15,
    category: "baby",
  },
  {
    id: "b010",
    name: "ผ้ากันเปื้อนเด็กอ่อน 5 ผืน",
    description: "เซ็ตผ้ากันเปื้อน 5 ผืน ลายน่ารัก ใช้ได้ทุกวัน",
    price: 290,
    image: IMAGES[3],
    stock: 45,
    category: "baby",
  },
];

// Helper function: Get products by category
export function getProductsByCategory(category: string): Product[] {
  return MOCK_PRODUCTS.filter((p) => p.category === category);
}

// Helper function: Get product by ID
export function getProductById(id: string): Product | undefined {
  return MOCK_PRODUCTS.find((p) => p.id === id);
}

// Helper function: Search products
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return MOCK_PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery),
  );
}
