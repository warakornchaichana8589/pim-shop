"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import { X } from "lucide-react";
import * as S from "@/styles/storefront/Search.styles";
import Navbar from "@/components/storefront/Navbar";
import Footer from "@/components/storefront/Footer";
import FloatingNav from "@/components/storefront/FloatingNav";
import { useSearchProducts } from "@/lib/hooks/useSearchProducts";
import { Product } from "@/types";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const q = searchParams.get("q") || "";
  const [query, setQuery] = useState(q);

  const { data, isLoading } = useSearchProducts(query);
  const results = data?.data || [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Update URL silently without triggering Next.js navigation/interceptors
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(
      { ...window.history.state, as: newUrl, url: newUrl },
      "",
      newUrl,
    );
  };

  return (
    <>
      <Navbar />
      <S.PageWrapper>
        <S.PageTitle>Search Results</S.PageTitle>

        <S.SearchHeader>
          <S.Label>What are you looking for?</S.Label>
          <S.SearchInputWrapper>
            <S.Input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={handleInputChange}
              autoFocus
            />
            {query && (
              <S.CloseButton
                onClick={() => setQuery("")}
                style={{ top: "50%", transform: "translateY(-50%)", right: 0 }}
              >
                <X size={24} />
              </S.CloseButton>
            )}
          </S.SearchInputWrapper>
        </S.SearchHeader>

        <S.ResultsSection style={{ maxHeight: "none" }}>
          {isLoading ? (
            <S.EmptyState>Searching...</S.EmptyState>
          ) : results.length > 0 ? (
            results.map((product: Product) => (
              <S.ResultItem
                key={product.id}
                onClick={() => router.push(`/product/${product.id}`)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <S.ResultImage src={product.image} alt={product.name} />
                <S.ResultInfo>
                  <S.ResultName>{product.name}</S.ResultName>
                  <S.ResultPrice>
                    ฿{product.price.toLocaleString()}
                  </S.ResultPrice>
                </S.ResultInfo>
              </S.ResultItem>
            ))
          ) : query ? (
            <S.EmptyState>
              No results found for &quot;{query}&quot;
            </S.EmptyState>
          ) : (
            <S.EmptyState>Start typing to search...</S.EmptyState>
          )}
        </S.ResultsSection>
      </S.PageWrapper>
      <Footer />
      <FloatingNav />
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={null}>
      <SearchContent />
    </Suspense>
  );
}
