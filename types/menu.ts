export interface MenuItem {
  id: string;
  label: string;
  subLabel: string;
  href: string;
  isActive?: boolean;
  order: number;
}

export interface MenuResponse {
  success: boolean;
  data: MenuItem[];
}

// Default menu items - ใช้เมื่อยังไม่ได้ดึง API หรือเกิด error
export const DEFAULT_MENU_ITEMS: MenuItem[] = [
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
];
