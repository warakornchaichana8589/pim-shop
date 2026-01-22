"use client";

import React, { useState, useCallback, useMemo, memo } from "react";
import {
  ShoppingBag,
  Heart,
  ChevronDown,
  Truck,
  RefreshCw,
  Shield,
  Minus,
  Plus,
} from "lucide-react";
import { useCart } from "@/lib/store";
import * as S from "@/styles/storefront/ProductDetail.styles";

import { Product } from "@/types";

// ============================================================
// Sub-Components (Memoized to prevent unnecessary re-renders)
// ============================================================

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

const ImageGallery = memo(function ImageGallery({
  images,
  productName,
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <S.GallerySection>
      <S.MainImageWrapper>
        <S.MainImage
          src={images[selectedImage] || "/placeholder-product.jpg"}
          alt={productName}
          fill
          priority
        />
      </S.MainImageWrapper>

      <S.ThumbnailList>
        {images.map((img, index) => (
          <S.ThumbnailButton
            key={index}
            $active={selectedImage === index}
            onClick={() => setSelectedImage(index)}
          >
            <S.ThumbnailImage
              src={img || "/placeholder-product.jpg"}
              alt={`${productName} ${index + 1}`}
              fill
            />
          </S.ThumbnailButton>
        ))}
      </S.ThumbnailList>
    </S.GallerySection>
  );
});

interface ProductDescriptionProps {
  description: string;
  category: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
}

const ProductDescription = memo(function ProductDescription({
  description,
  category,
  name,
  price,
  originalPrice,
  discount,
}: ProductDescriptionProps) {
  return (
    <>
      <S.CategoryLabel>{category}</S.CategoryLabel>
      <S.ProductName>{name}</S.ProductName>
      <S.PriceSection>
        <S.CurrentPrice>฿{price.toLocaleString()}</S.CurrentPrice>
        {originalPrice && (
          <>
            <S.OriginalPrice>฿{originalPrice.toLocaleString()}</S.OriginalPrice>
            <S.DiscountBadge>-{discount}%</S.DiscountBadge>
          </>
        )}
      </S.PriceSection>
      <S.Description>{description}</S.Description>
    </>
  );
});

const DeliveryInfo = memo(function DeliveryInfo() {
  return (
    <S.DeliveryInfo>
      <S.DeliveryItem>
        <Truck size={20} />
        <S.DeliveryText>
          <S.DeliveryTitle>จัดส่งฟรี</S.DeliveryTitle>
          <S.DeliveryDesc>สำหรับคำสั่งซื้อ ฿1,000 ขึ้นไป</S.DeliveryDesc>
        </S.DeliveryText>
      </S.DeliveryItem>
      <S.DeliveryItem>
        <RefreshCw size={20} />
        <S.DeliveryText>
          <S.DeliveryTitle>คืนสินค้าได้ภายใน 30 วัน</S.DeliveryTitle>
          <S.DeliveryDesc>คืนได้โดยไม่มีเงื่อนไข</S.DeliveryDesc>
        </S.DeliveryText>
      </S.DeliveryItem>
      <S.DeliveryItem>
        <Shield size={20} />
        <S.DeliveryText>
          <S.DeliveryTitle>รับประกันคุณภาพ</S.DeliveryTitle>
          <S.DeliveryDesc>สินค้าแท้ 100%</S.DeliveryDesc>
        </S.DeliveryText>
      </S.DeliveryItem>
    </S.DeliveryInfo>
  );
});

// ============================================================
// Main Component
// ============================================================

interface ProductContentProps {
  product: Product & {
    originalPrice?: number;
    discount?: number;
    images?: string[];
    colors?: { name: string; code: string }[];
    sizes?: string[];
    specifications?: {
      material?: string;
      origin?: string;
      care?: string;
    };
  };
}

export default function ProductContent({ product }: ProductContentProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>("details");

  const addItem = useCart((state) => state.addItem);

  const colors = useMemo(
    () =>
      product.colors || [
        { name: "ขาว", code: "#FFFFFF" },
        { name: "ดำ", code: "#09090b" },
      ],
    [product.colors],
  );

  const sizes = useMemo(
    () => product.sizes || ["S", "M", "L", "XL"],
    [product.sizes],
  );

  const images = useMemo(
    () => product.images || [product.image],
    [product.images, product.image],
  );

  const handleAddToCart = useCallback(() => {
    if (!selectedSize) {
      alert("กรุณาเลือกไซส์");
      return;
    }

    // Pass the base product to addItem.
    // Note: Our store's addItem currently only increments by 1.
    // In a real app, we'd want to pass the quantity as well.
    addItem({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image || product.images?.[0] || "/placeholder-product.jpg",
      stock: product.stock,
      category: product.category,
    });
  }, [product, selectedSize, addItem]);

  const toggleAccordion = useCallback((section: string) => {
    setOpenAccordion((prev) => (prev === section ? null : section));
  }, []);

  return (
    <S.ProductGrid>
      <ImageGallery images={images} productName={product.name} />

      <S.InfoSection>
        <ProductDescription
          name={product.name}
          category={product.category}
          price={product.price}
          description={product.description}
          originalPrice={product.originalPrice}
          discount={product.discount}
        />

        {/* Color Selection */}
        <S.OptionSection>
          <S.OptionLabel>สี: {colors[selectedColor]?.name}</S.OptionLabel>
          <S.OptionRow>
            {colors.map((color, index) => (
              <S.ColorButton
                key={color.name}
                $color={color.code}
                $active={selectedColor === index}
                onClick={() => setSelectedColor(index)}
              />
            ))}
          </S.OptionRow>
        </S.OptionSection>

        {/* Size Selection */}
        <S.OptionSection>
          <S.OptionLabel>ไซส์: {selectedSize || "เลือกไซส์"}</S.OptionLabel>
          <S.OptionRow>
            {sizes.map((size) => (
              <S.SizeButton
                key={size}
                $active={selectedSize === size}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </S.SizeButton>
            ))}
          </S.OptionRow>
        </S.OptionSection>

        {/* Quantity */}
        <S.QuantitySection>
          <S.OptionLabel>จำนวน:</S.OptionLabel>
          <S.QuantityControl>
            <S.QuantityButton
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
            >
              <Minus size={16} />
            </S.QuantityButton>
            <S.QuantityValue>{quantity}</S.QuantityValue>
            <S.QuantityButton
              onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
              disabled={quantity >= product.stock}
            >
              <Plus size={16} />
            </S.QuantityButton>
          </S.QuantityControl>
          <S.StockInfo>เหลือ {product.stock} ชิ้น</S.StockInfo>
        </S.QuantitySection>

        {/* Action Buttons */}
        <S.ActionButtons>
          <S.AddToCartButton onClick={handleAddToCart} disabled={!selectedSize}>
            <ShoppingBag size={18} /> เพิ่มลงตะกร้า
          </S.AddToCartButton>
          <S.WishlistButton>
            <Heart size={20} />
          </S.WishlistButton>
        </S.ActionButtons>

        <DeliveryInfo />

        {/* Product Details Accordion */}
        <S.DetailsSection>
          <S.DetailAccordion>
            <S.AccordionHeader
              $open={openAccordion === "details"}
              onClick={() => toggleAccordion("details")}
            >
              รายละเอียดสินค้า <ChevronDown size={16} />
            </S.AccordionHeader>
            <S.AccordionContent $open={openAccordion === "details"}>
              <S.AccordionInner>
                <ul>
                  <li>
                    วัสดุ: {product.specifications?.material || "Polyester"}
                  </li>
                  <li>
                    ผลิตที่: {product.specifications?.origin || "Vietnam"}
                  </li>
                </ul>
              </S.AccordionInner>
            </S.AccordionContent>
          </S.DetailAccordion>

          <S.DetailAccordion>
            <S.AccordionHeader
              $open={openAccordion === "care"}
              onClick={() => toggleAccordion("care")}
            >
              วิธีการดูแลรักษา <ChevronDown size={16} />
            </S.AccordionHeader>
            <S.AccordionContent $open={openAccordion === "care"}>
              <S.AccordionInner>
                {product.specifications?.care || "ซักเครื่องได้ตามปกติ"}
              </S.AccordionInner>
            </S.AccordionContent>
          </S.DetailAccordion>
        </S.DetailsSection>
      </S.InfoSection>
    </S.ProductGrid>
  );
}
