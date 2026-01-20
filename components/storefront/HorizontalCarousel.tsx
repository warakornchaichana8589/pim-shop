"use client";

import { Product } from "@/types";
import ProductCard from "./ProductCard";
import * as S from "@/styles/storefront/HorizontalCarousel.styles";

interface HorizontalCarouselProps {
  title: string;
  products: Product[];
}

export default function HorizontalCarousel({ title, products }: HorizontalCarouselProps) {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.SectionTitle>{title}</S.SectionTitle>
        <S.LinkWrapper href="#">VIEW ALL</S.LinkWrapper>
      </S.TitleWrapper>
      
      <S.ScrollContainer className="no-scrollbar">
        <S.ScrollContent>
          {products.map((product) => (
            <S.CardWrapper key={product.id}>
              <ProductCard product={product} />
            </S.CardWrapper>
          ))}
        </S.ScrollContent>
      </S.ScrollContainer>
    </S.Container>
  );
}
