"use client";

import { useQuery } from "@tanstack/react-query";
import { MenuItem, DEFAULT_MENU_ITEMS, MenuResponse } from "@/types/menu";

// ============================================================
// API Configuration
// ในอนาคตสามารถเปลี่ยนเป็น URL ของ backend จริงได้
// เช่น: https://api.pim-shop.com/v1/menu
// ============================================================
const API_CONFIG = {
  // URL ของ API จริง (จำลอง) - เปลี่ยนเป็น backend URL จริงได้
  MENU_API_URL: process.env.NEXT_PUBLIC_MENU_API_URL || "/api/menu",
  // Timeout สำหรับการ fetch (ms)
  FETCH_TIMEOUT: 5000,
};

// Query Keys
export const menuKeys = {
  all: ["menu"] as const,
  list: () => [...menuKeys.all, "list"] as const,
};

// Helper function สำหรับ fetch พร้อม timeout
async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout: number = 5000
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

// Fetch function สำหรับ menu
async function fetchMenu(): Promise<MenuItem[]> {
  console.log(`[Menu] Fetching from: ${API_CONFIG.MENU_API_URL}`);

  const response = await fetchWithTimeout(
    API_CONFIG.MENU_API_URL,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
    API_CONFIG.FETCH_TIMEOUT
  );

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const data: MenuResponse = await response.json();

  if (data.success && data.data && data.data.length > 0) {
    console.log("[Menu] Successfully loaded from API:", data.data.length, "items");
    return data.data;
  }

  console.warn("[Menu] API returned empty data, using fallback");
  return DEFAULT_MENU_ITEMS;
}

interface UseMenuResult {
  menuItems: MenuItem[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  isUsingFallback: boolean;
  refetch: () => void;
}

export function useMenu(): UseMenuResult {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: menuKeys.list(),
    queryFn: fetchMenu,
    // ใช้ค่า default เมื่อยังไม่มีข้อมูล
    placeholderData: DEFAULT_MENU_ITEMS,
    // Retry 2 ครั้งก่อนจะใช้ fallback
    retry: 2,
    // Cache 5 นาที
    staleTime: 5 * 60 * 1000,
    // ถ้า error ให้ใช้ค่า default
    select: (data) => data ?? DEFAULT_MENU_ITEMS,
  });

  // ตรวจสอบว่ากำลังใช้ fallback หรือไม่
  const isUsingFallback = isError || (!isLoading && data === DEFAULT_MENU_ITEMS);

  return {
    menuItems: data ?? DEFAULT_MENU_ITEMS,
    isLoading,
    isError,
    error: error as Error | null,
    isUsingFallback,
    refetch,
  };
}
