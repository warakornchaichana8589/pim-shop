"use client";

import React, { useState, useMemo, useCallback, memo } from "react";
import { Product } from "@/types";
import * as S from "@/styles/storefront/CategoryPage.styles";
import ProductCard from "@/components/storefront/ProductCard";
import { Package } from "lucide-react";

interface CategoryContentProps {
  products: Product[];
  categoryTitle: string;
  subCategories: string[];
}

const SORT_OPTIONS = [
  { value: "newest", label: "ใหม่ล่าสุด" },
  { value: "price-low", label: "ราคา: ต่ำ - สูง" },
  { value: "price-high", label: "ราคา: สูง - ต่ำ" },
  { value: "popular", label: "ยอดนิยม" },
];

// ============================================================
// Sub-Components
// ============================================================

interface FilterBarProps {
  resultCount: number;
  subCategories: string[];
  activeFilter: string;
  sortBy: string;
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: string) => void;
}

const FilterBar = memo(function FilterBar({
  resultCount,
  subCategories,
  activeFilter,
  sortBy,
  onFilterChange,
  onSortChange,
}: FilterBarProps) {
  return (
    <S.FilterBar>
      <S.FilterLeft>
        <S.ResultCount>{resultCount} รายการ</S.ResultCount>
        <S.FilterTags>
          {subCategories.map((cat: string) => (
            <S.FilterTag
              key={cat}
              $active={activeFilter === cat}
              onClick={() => onFilterChange(cat)}
            >
              {cat}
            </S.FilterTag>
          ))}
        </S.FilterTags>
      </S.FilterLeft>
      <S.SortSelect
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.SortSelect>
    </S.FilterBar>
  );
});

// Main Content
export default function CategoryContent({
  products,
  subCategories,
}: CategoryContentProps) {
  const [sortBy, setSortBy] = useState("newest");
  const [activeFilter, setActiveFilter] = useState("ทั้งหมด");

  // 🟢 useCallback: Prevent function recreation on re-render
  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, []);

  const handleSortChange = useCallback((sort: string) => {
    setSortBy(sort);
  }, []);

  // 🟢 useMemo: Sorting & Filtering logic is expensive, memoize it
  const processedProducts = useMemo(() => {
    let filtered = [...products];
    // In future: Add sub-category filtering logic here

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
  }, [products, sortBy]);

  return (
    <S.ContentWrapper>
      {/* 🟢 State Splitting / Narrow Props: FilterBar only receives necessary data */}
      <FilterBar
        resultCount={processedProducts.length}
        subCategories={subCategories}
        activeFilter={activeFilter}
        sortBy={sortBy}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />

      {/* Product Grid */}
      {processedProducts.length > 0 ? (
        <S.ProductGrid>
          {processedProducts.map((product) => (
            // 🟢 ProductCard is already memoized
            <ProductCard key={product.id} product={product} />
          ))}
        </S.ProductGrid>
      ) : (
        <S.EmptyState>
          <S.EmptyIcon>
            <Package size={32} />
          </S.EmptyIcon>
          <S.EmptyTitle>ไม่พบสินค้า</S.EmptyTitle>
          <S.EmptyDescription>ยังไม่มีสินค้าในหมวดหมู่นี้</S.EmptyDescription>
        </S.EmptyState>
      )}
    </S.ContentWrapper>
  );
}
