import { NextRequest, NextResponse } from "next/server";
import {
  MOCK_PRODUCTS,
  getProductsByCategory,
  searchProducts,
} from "@/lib/mock-data";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");

    let products = [...MOCK_PRODUCTS];

    // Filter by category
    if (category) {
      products = getProductsByCategory(category);
    }

    // Search
    if (search) {
      products = searchProducts(search);
    }

    // Calculate total before pagination
    const total = products.length;

    // Pagination
    if (limit) {
      const limitNum = parseInt(limit, 10);
      const offsetNum = offset ? parseInt(offset, 10) : 0;
      products = products.slice(offsetNum, offsetNum + limitNum);
    }

    return NextResponse.json({
      success: true,
      data: products,
      total,
      limit: limit ? parseInt(limit, 10) : null,
      offset: offset ? parseInt(offset, 10) : 0,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
