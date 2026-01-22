import { NextRequest, NextResponse } from "next/server";
import { getProductById } from "@/lib/mock-data";

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * ดึงข้อมูลสินค้าแบบละเอียด (Mocking dynamic details)
 */
export function getEnhancedProduct(id: string) {
  const product = getProductById(id);
  if (!product) return null;

  return {
    ...product,
    originalPrice: Math.round(product.price * 1.25),
    discount: 20,
    images: [product.image, "/PROD_02.webp", "/PROD_03.webp", "/PROD_04.webp"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "ขาว", code: "#FFFFFF" },
      { name: "ดำ", code: "#09090b" },
      { name: "กรมท่า", code: "#1B3A57" },
      { name: "เทา", code: "#71717A" },
    ],
    specifications: {
      material: "100% Cotton",
      origin: "Made in Vietnam",
      care: "ซักด้วยน้ำเย็น, ห้ามใช้น้ำยาฟอกขาว, ตากในที่ร่ม",
    },
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const productDetail = getEnhancedProduct(id);

    if (!productDetail) {
      return NextResponse.json(
        { success: false, error: "Product not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: productDetail,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch product" },
      { status: 500 },
    );
  }
}
