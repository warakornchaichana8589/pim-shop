import React, { memo } from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/store";
import { Product } from "@/types";
import * as S from "@/styles/storefront/ProductCard.styles";

interface ProductCardProps {
  product: Product;
}

const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link href={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
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
            onClick={handleQuickAdd}
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
    </Link>
  );
});

export default ProductCard;

