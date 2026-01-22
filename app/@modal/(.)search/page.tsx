"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { X } from "lucide-react";
import * as S from "@/styles/storefront/Search.styles";
import { AnimatePresence } from "framer-motion";
import { useSearchProducts } from "@/lib/hooks/useSearchProducts";
import { Product } from "@/types";

export default function SearchModal() {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [isDismissed, setIsDismissed] = useState(false);

  const { data, isLoading } = useSearchProducts(query);
  const results = data?.data || [];

  const onDismiss = useCallback(() => {
    setIsDismissed(true);
    router.back();
  }, [router]);

  // Derived state: should show modal only if path is /search AND hasn't been dismissed
  const isAtSearchPath = pathname === "/search";
  const shouldShow = isAtSearchPath && !isDismissed;

  // Sync isDismissed back to false when we are no longer at search path
  // so that next time we open search it starts fresh.
  useEffect(() => {
    if (!isAtSearchPath) {
      setIsDismissed(false);
    }
  }, [isAtSearchPath]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleProductClick = (productId: string) => {
    setIsDismissed(true);
    // Navigate to product page.
    router.push(`/product/${productId}`);
  };

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      <S.ModalOverlay
        key="search-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onDismiss}
      >
        <S.ModalContent
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <S.CloseButton onClick={onDismiss}>
            <X size={24} strokeWidth={1.5} />
          </S.CloseButton>

          <S.SearchHeader>
            <S.Label>Search</S.Label>
            <S.SearchInputWrapper>
              <S.Input
                type="text"
                placeholder="What are you looking for?"
                value={query}
                onChange={handleInputChange}
                autoFocus
              />
            </S.SearchInputWrapper>
          </S.SearchHeader>

          <S.ResultsSection>
            {isLoading ? (
              <S.EmptyState>Searching...</S.EmptyState>
            ) : results.length > 0 ? (
              results.map((product: Product) => (
                <S.ResultItem
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
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
        </S.ModalContent>
      </S.ModalOverlay>
    </AnimatePresence>
  );
}
