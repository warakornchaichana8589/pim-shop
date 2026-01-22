"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/storefront/Navbar";
import HeroSection from "@/components/storefront/Hero";
import HorizontalCarousel from "@/components/storefront/HorizontalCarousel";
import Footer from "@/components/storefront/Footer";
import FloatingNav from "@/components/storefront/FloatingNav";
import { Product } from "@/types";
import { useMenu } from "@/lib/hooks/useMenu";
import Image from "next/image";
import * as S from "@/styles/pages/Home.styles";

// Mock data for products
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Songkran Water Gun - Super Soaker",
    description:
      "High-pressure water blaster for the ultimate Songkran experience.",
    price: 590,
    image: "/PROD_01.webp",
    stock: 4,
    category: "Festive",
  },
  {
    id: "2",
    name: "Traditional Thai Floral Shirt",
    description: "Premium cotton shirt with vibrant seasonal patterns.",
    price: 350,
    image: "/PROD_02.webp",
    stock: 15,
    category: "Apparel",
  },
  {
    id: "3",
    name: "Premium Water Shield Bag",
    description:
      "Keep your gadgets safe and dry with our triple-seal waterproof bag.",
    price: 120,
    image: "/PROD_03.webp",
    stock: 0,
    category: "Accessories",
  },
  {
    id: "4",
    name: "Festival Survival Kit",
    description: "Everything you need in one set.",
    price: 890,
    image: "/PROD_04.webp",
    stock: 8,
    category: "Bundle",
  },
  {
    id: "5",
    name: "Traditional Thai Goggles",
    description: "High-quality protective goggles for festive water play.",
    price: 150,
    image: "/PROD_05.webp",
    stock: 25,
    category: "Accessories",
  },
  {
    id: "6",
    name: "Seasonal Blind Box - Thai Edition",
    description: "A surprise box containing exclusive seasonal collectibles.",
    price: 450,
    image: "/PROD_06.webp",
    stock: 12,
    category: "Blind Box",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // ดึง menu items จาก API (ใช้เป็น categories)
  const { menuItems } = useMenu();

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      return MOCK_PRODUCTS;
    },
  });

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollY = e.currentTarget.scrollTop;
    const height = e.currentTarget.clientHeight;
    const index = Math.round(scrollY / height);
    if (index !== activeSection) {
      setActiveSection(index);
    }
  };

  const scrollToSection = (index: number) => {
    const container = document.querySelector(".snap-container");
    if (container) {
      container.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Navbar />

      <S.MainWrapper
        className="snap-container no-scrollbar"
        onScroll={handleScroll}
      >
        {/* Section 0: Hero */}
        <S.SnapSection>
          <HeroSection />
        </S.SnapSection>

        {/* Section 1: Categories & New Arrivals */}
        <S.SnapSectionCenter>
          <S.CategoriesRow className="no-scrollbar">
            <CategoryBadge
              label="All"
              subLabel="ทั้งหมด"
              href="/category"
              $active={activeCategory === null}
              onClick={() => setActiveCategory(null)}
            />
            {menuItems.map((item) => (
              <CategoryBadge
                key={item.id}
                label={item.subLabel}
                subLabel={item.label}
                href={item.href}
                $active={activeCategory === item.id}
                onClick={() => setActiveCategory(item.id)}
              />
            ))}
          </S.CategoriesRow>
          <div style={{ padding: "0 1rem" }}>
            <HorizontalCarousel
              title="New Arrivals"
              products={products?.slice(0, 4) || []}
            />
          </div>
        </S.SnapSectionCenter>

        {/* Section 2: Featured Bento Grid */}
        <S.SnapSectionCenter style={{ padding: "0 2.5rem" }}>
          <S.FeaturedHeader>
            <S.FeaturedSubTitle>Curated Favorites</S.FeaturedSubTitle>
            <S.FeaturedTitle>Featured Highlights</S.FeaturedTitle>
          </S.FeaturedHeader>

          <S.BentoGrid>
            <S.FeaturedBig className="group">
              <Image
                src="/FEATURED_BIG.webp"
                alt="Featured"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <S.ImageOverlay />
              <S.FeaturedOverlayText>
                <S.OverlaySubTitle>Masterpiece</S.OverlaySubTitle>
                <S.OverlayTitleLarge>Linen Series</S.OverlayTitleLarge>
              </S.FeaturedOverlayText>
            </S.FeaturedBig>

            <S.FeaturedWide className="group">
              <Image
                src="/FEATURED_WIDE.webp"
                alt="Featured"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <S.ImageOverlay />
              <S.FeaturedOverlayText>
                <S.OverlaySubTitle>Modernism</S.OverlaySubTitle>
                <S.OverlayTitleMedium>AirSense Collection</S.OverlayTitleMedium>
              </S.FeaturedOverlayText>
            </S.FeaturedWide>

            <S.FeaturedSmall className="group">
              <Image
                src="/FEATURED_SMALL_1.webp"
                alt="Featured"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <S.FeaturedSmallLabelWrapper>
                <S.SmallTitle>Accessories</S.SmallTitle>
              </S.FeaturedSmallLabelWrapper>
            </S.FeaturedSmall>

            <S.FeaturedSmall className="group">
              <Image
                src="/FEATURED_SMALL_2.webp"
                alt="Featured"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <S.FeaturedSmallLabelWrapper>
                <S.SmallTitle>New Knits</S.SmallTitle>
              </S.FeaturedSmallLabelWrapper>
            </S.FeaturedSmall>
          </S.BentoGrid>
        </S.SnapSectionCenter>

        {/* Section 3: Season Essentials */}
        <S.SnapSectionCenter style={{ padding: "0 1rem" }}>
          <HorizontalCarousel
            title="Season Essentials"
            products={products?.slice(3, 7) || []}
          />
        </S.SnapSectionCenter>

        {/* Section 4: Footer */}
        <S.SnapSectionCenter>
          <Footer />
        </S.SnapSectionCenter>
      </S.MainWrapper>

      {/* Side Scroll Indicator */}
      <S.ScrollIndicatorWrapper>
        {[0, 1, 2, 3, 4].map((i) => (
          <S.IndicatorButton
            key={i}
            onClick={() => scrollToSection(i)}
            className="indicator-item"
          >
            <S.IndicatorLabel className="indicator-label">
              {["Begin", "New", "Feature", "Must-Have", "About"][i]}
            </S.IndicatorLabel>
            <S.IndicatorLine $active={activeSection === i} />
          </S.IndicatorButton>
        ))}
      </S.ScrollIndicatorWrapper>

      <FloatingNav />
    </div>
  );
}

interface CategoryBadgeProps {
  label: string;
  subLabel?: string;
  href: string;
  $active?: boolean;
  onClick?: () => void;
}

function CategoryBadge({
  label,
  subLabel,
  href,
  $active,
  onClick,
}: CategoryBadgeProps) {
  return (
    <Link href={href} onClick={onClick} style={{ textDecoration: "none" }}>
      <S.BadgeButton $active={$active}>
        <span style={{ fontSize: "10px", fontWeight: 700 }}>{label}</span>
        {subLabel && (
          <span style={{ fontSize: "8px", opacity: 0.7, marginTop: "2px" }}>
            {subLabel}
          </span>
        )}
      </S.BadgeButton>
    </Link>
  );
}
