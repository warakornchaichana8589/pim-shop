"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useState, useMemo } from "react";
import Navbar from "@/components/storefront/Navbar";
import HeroSection from "@/components/storefront/Hero";
import HorizontalCarousel from "@/components/storefront/HorizontalCarousel";
import Footer from "@/components/storefront/Footer";
import FloatingNav from "@/components/storefront/FloatingNav";
import { Product } from "@/types";
import { useMenu } from "@/lib/hooks/useMenu";
import Image from "next/image";
import * as S from "@/styles/pages/Home.styles";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // ดึง menu items จาก API (ใช้เป็น categories)
  const { menuItems } = useMenu();

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<Product[]> => {
      const response = await fetch("/api/products");
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      return result.data;
    },
  });

  // 🟢 Memoized Filtered Products: Filter products based on selected tab
  const filteredNewArrivals = useMemo(() => {
    if (!products) return [];
    if (!activeCategory) return products.slice(0, 8);

    return products
      .filter((p) => {
        // Find the menu item to get its category path
        const menuItem = menuItems.find((m) => m.id === activeCategory);
        if (!menuItem) return false;
        const category = menuItem.href.split("/").pop();
        return p.category === category;
      })
      .slice(0, 8);
  }, [products, activeCategory, menuItems]);

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

        {/* Section 1: Categories & New Arrivals (Tabs) */}
        <S.SnapSectionCenter>
          <div style={{ padding: "0 2.5rem", marginBottom: "1rem" }}>
            <S.FeaturedSubTitle>Just In</S.FeaturedSubTitle>
            <S.FeaturedTitle style={{ fontSize: "2rem" }}>
              New Arrivals
            </S.FeaturedTitle>
          </div>

          <S.CategoriesRow
            className="no-scrollbar"
            style={{ padding: "0 2.5rem 2rem" }}
          >
            <CategoryTab
              label="All"
              subLabel="ทั้งหมด"
              $active={activeCategory === null}
              onClick={() => setActiveCategory(null)}
            />
            {menuItems.map((item) => (
              <CategoryTab
                key={item.id}
                label={item.subLabel}
                subLabel={item.label}
                $active={activeCategory === item.id}
                onClick={() => setActiveCategory(item.id)}
              />
            ))}
          </S.CategoriesRow>

          <div style={{ padding: "0 1rem" }}>
            <HorizontalCarousel title="" products={filteredNewArrivals} />
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
            <S.IndicatorLine $active={activeSection === i} />
          </S.IndicatorButton>
        ))}
      </S.ScrollIndicatorWrapper>

      <FloatingNav />
    </div>
  );
}

interface CategoryTabProps {
  label: string;
  subLabel?: string;
  $active?: boolean;
  onClick?: () => void;
}

function CategoryTab({ label, subLabel, $active, onClick }: CategoryTabProps) {
  return (
    <S.BadgeButton $active={$active} onClick={onClick}>
      <S.TabLabel $active={$active}>{subLabel || label}</S.TabLabel>
      {subLabel && <S.TabSubLabel>{label}</S.TabSubLabel>}
    </S.BadgeButton>
  );
}
