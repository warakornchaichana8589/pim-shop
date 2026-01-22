"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Package } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/storefront/Navbar";
import FloatingNav from "@/components/storefront/FloatingNav";
import Footer from "@/components/storefront/Footer";
import ProductCard from "@/components/storefront/ProductCard";
import { Product } from "@/types";
import * as S from "@/styles/storefront/CategoryPage.styles";

// Sort options
const SORT_OPTIONS = [
  { value: "newest", label: "ใหม่ล่าสุด" },
  { value: "price-low", label: "ราคา: ต่ำ - สูง" },
  { value: "price-high", label: "ราคา: สูง - ต่ำ" },
  { value: "popular", label: "ยอดนิยม" },
];

// Category filters
const CATEGORY_FILTERS = [
  { value: "all", label: "ทั้งหมด" },
  { value: "women", label: "ผู้หญิง" },
  { value: "men", label: "ผู้ชาย" },
  { value: "kids", label: "เด็ก" },
  { value: "baby", label: "เด็กอ่อน" },
];

// Fetch all products from API
async function fetchAllProducts(): Promise<Product[]> {
  const response = await fetch("/api/products");
  const result = await response.json();
  if (!result.success) {
    throw new Error("Failed to fetch products");
  }
  return result.data;
}

export default function AllCategoriesPage() {
  const [sortBy, setSortBy] = useState("newest");
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", "all"],
    queryFn: fetchAllProducts,
  });

  // Filter and sort products
  const displayProducts = React.useMemo(() => {
    if (!products) return [];

    // Filter by category
    let filtered = [...products];
    if (activeFilter !== "all") {
      filtered = filtered.filter((p) => p.category === activeFilter);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-high":
        return filtered.sort((a, b) => b.price - a.price);
      case "popular":
        return filtered.sort((a, b) => b.stock - a.stock);
      default:
        return filtered;
    }
  }, [products, sortBy, activeFilter]);

  return (
    <>
      <Navbar />

      <S.PageContainer>
        {/* Hero Section */}
        <S.HeroSection>
          <S.HeroOverlay />
          <S.HeroContent>
            <S.CategorySubLabel>ALL PRODUCTS</S.CategorySubLabel>
            <S.CategoryTitle>สินค้าทั้งหมด</S.CategoryTitle>
            <S.CategoryDescription>
              สินค้าคุณภาพดีจากทุกหมวดหมู่ ออกแบบมาเพื่อทุกคนในครอบครัว
            </S.CategoryDescription>
          </S.HeroContent>
        </S.HeroSection>

        <S.ContentWrapper>
          {/* Breadcrumb */}
          <S.BreadcrumbNav>
            <Link href="/">หน้าแรก</Link>
            <span>/</span>
            <span className="current">สินค้าทั้งหมด</span>
          </S.BreadcrumbNav>

          {/* Filter Bar */}
          <S.FilterBar>
            <S.FilterLeft>
              <S.ResultCount>
                {isLoading
                  ? "กำลังโหลด..."
                  : `${displayProducts.length} รายการ`}
              </S.ResultCount>
              <S.FilterTags>
                {CATEGORY_FILTERS.map((cat) => (
                  <S.FilterTag
                    key={cat.value}
                    $active={activeFilter === cat.value}
                    onClick={() => setActiveFilter(cat.value)}
                  >
                    {cat.label}
                  </S.FilterTag>
                ))}
              </S.FilterTags>
            </S.FilterLeft>
            <S.SortSelect
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </S.SortSelect>
          </S.FilterBar>

          {/* Product Grid */}
          {isLoading ? (
            <S.ProductGrid>
              {Array.from({ length: 12 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </S.ProductGrid>
          ) : displayProducts.length > 0 ? (
            <S.ProductGrid>
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </S.ProductGrid>
          ) : (
            <S.EmptyState>
              <S.EmptyIcon>
                <Package size={32} />
              </S.EmptyIcon>
              <S.EmptyTitle>ไม่พบสินค้า</S.EmptyTitle>
              <S.EmptyDescription>
                ยังไม่มีสินค้าในหมวดหมู่นี้ กรุณาลองหมวดหมู่อื่น
              </S.EmptyDescription>
            </S.EmptyState>
          )}

          {/* Pagination */}
          {!isLoading && displayProducts.length > 0 && (
            <S.Pagination>
              <S.PageButton disabled>←</S.PageButton>
              <S.PageButton $active>1</S.PageButton>
              <S.PageButton>2</S.PageButton>
              <S.PageButton>3</S.PageButton>
              <S.PageButton>→</S.PageButton>
            </S.Pagination>
          )}
        </S.ContentWrapper>

        {/* Footer */}
        <Footer />
      </S.PageContainer>

      {/* Floating Nav */}
      <FloatingNav />
    </>
  );
}

// Skeleton Loading Component
function ProductSkeleton() {
  return (
    <S.SkeletonCard>
      <S.SkeletonImage />
      <S.SkeletonText $width="60%" $height="10px" />
      <S.SkeletonText $width="90%" $height="14px" />
      <S.SkeletonText $width="40%" $height="16px" />
    </S.SkeletonCard>
  );
}
