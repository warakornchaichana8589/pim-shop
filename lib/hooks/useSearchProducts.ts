import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types";

interface SearchResponse {
  success: boolean;
  data: Product[];
  total: number;
}

/**
 * Hook สำหรับค้นหาสินค้าจากชื่อ หรือคีย์เวิร์ด
 * @param query คำค้นหา
 * @returns query object จาก react-query
 */
export function useSearchProducts(query: string) {
  return useQuery<SearchResponse>({
    queryKey: ["products", "search", query],
    queryFn: async () => {
      if (!query.trim()) {
        return { success: true, data: [], total: 0 };
      }

      const response = await fetch(
        `/api/products?search=${encodeURIComponent(query)}&limit=10`,
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
    enabled: query.length >= 2, // เริ่มค้นหาเมื่อพิมพ์ 2 ตัวอักษรขึ้นไป
    staleTime: 5 * 60 * 1000, // เก็บ cache ไว้ 5 นาที
  });
}
