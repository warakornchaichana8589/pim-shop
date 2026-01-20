"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/store";
import { Product } from "@/types";
import * as S from "@/styles/storefront/ProductCard.styles";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);

  return (
    <S.Card>
      <S.ImageWrapper>
        <S.ProductImage
          src={product.image}
          alt={product.name}
          fill
        />
        {product.stock === 0 && (
          <S.Overlay>
            <S.SoldOutBadge>SOLD OUT</S.SoldOutBadge>
          </S.Overlay>
        )}
        <S.QuickAddButton
          onClick={() => addItem(product)}
          disabled={product.stock === 0}
        >
          <ShoppingCart size={14} />
          QUICK ADD
        </S.QuickAddButton>
      </S.ImageWrapper>

      <S.InfoWrapper>
        <S.CategoryLabel>SEASONAL ESSENTIALS</S.CategoryLabel>
        <S.ProductName>{product.name}</S.ProductName>
        <S.PriceWrapper>
          <S.Currency>฿</S.Currency>
          <S.PriceValue>{product.price.toLocaleString()}</S.PriceValue>
        </S.PriceWrapper>
      </S.InfoWrapper>
    </S.Card>
  );
}
