import { NextResponse } from "next/server";
import { MenuItem } from "@/types/menu";

// Mock data - ในอนาคตสามารถดึงจาก database ได้
// หมวดหมู่เดียวกับที่ใช้ใน products
const menuItems: MenuItem[] = [
  {
    id: "1",
    label: "ผู้หญิง",
    subLabel: "WOMEN",
    href: "/category/women",
    isActive: true,
    order: 1,
  },
  {
    id: "2",
    label: "ผู้ชาย",
    subLabel: "MEN",
    href: "/category/men",
    isActive: false,
    order: 2,
  },
  {
    id: "3",
    label: "เด็ก",
    subLabel: "KIDS",
    href: "/category/kids",
    isActive: false,
    order: 3,
  },
  {
    id: "4",
    label: "เด็กอ่อน",
    subLabel: "BABY",
    href: "/category/baby",
    isActive: false,
    order: 4,
  },
  // สามารถเพิ่มเมนูเพิ่มเติมได้ที่นี่ - จะ sync กับ categories ในระบบ
];

export async function GET() {
  try {
    // Sort by order
    const sortedItems = menuItems.sort((a, b) => a.order - b.order);

    return NextResponse.json({
      success: true,
      data: sortedItems,
    });
  } catch (error) {
    console.error("Error fetching menu:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch menu" },
      { status: 500 },
    );
  }
}
