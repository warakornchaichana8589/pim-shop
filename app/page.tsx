"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Navbar from "@/components/storefront/Navbar";
import HeroSection from "@/components/storefront/Hero";
import HorizontalCarousel from "@/components/storefront/HorizontalCarousel";
import CartDrawer from "@/components/storefront/CartDrawer";
import OrderModal from "@/components/storefront/OrderModal";
import Footer from "@/components/storefront/Footer";
import FloatingNav from "@/components/storefront/FloatingNav";
import { Product } from "@/types";
import Image from "next/image";
import * as S from "@/styles/pages/Home.styles";

// Mock data for products
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Songkran Water Gun - Super Soaker",
    description: "High-pressure water blaster for the ultimate Songkran experience.",
    price: 590,
    image: "https://images.unsplash.com/photo-1594165654523-a55e2e92a433?q=80&w=800&auto=format&fit=crop",
    stock: 4,
    category: "Festive",
  },
  {
    id: "2",
    name: "Traditional Thai Floral Shirt",
    description: "Premium cotton shirt with vibrant seasonal patterns.",
    price: 350,
    image: "https://images.unsplash.com/photo-1596755094514-9916342775d7?q=80&w=800&auto=format&fit=crop",
    stock: 15,
    category: "Apparel",
  },
  {
    id: "3",
    name: "Premium Water Shield Bag",
    description: "Keep your gadgets safe and dry with our triple-seal waterproof bag.",
    price: 120,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    stock: 0,
    category: "Accessories",
  },
  {
    id: "4",
    name: "Festival Survival Kit",
    description: "Everything you need in one set.",
    price: 890,
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
    stock: 8,
    category: "Bundle",
  },
  {
    id: "5",
    name: "Traditional Thai Goggles",
    description: "High-quality protective goggles for festive water play.",
    price: 150,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    stock: 25,
    category: "Accessories",
  },
  {
    id: "6",
    name: "Seasonal Blind Box - Thai Edition",
    description: "A surprise box containing exclusive seasonal collectibles.",
    price: 450,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=800&auto=format&fit=crop",
    stock: 12,
    category: "Blind Box",
  },
];

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

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
        behavior: "smooth"
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
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
            <CategoryBadge label="All" $active />
            <CategoryBadge label="Women" />
            <CategoryBadge label="Men" />
            <CategoryBadge label="Kids" />
            <CategoryBadge label="Baby" />
            <CategoryBadge label="Festive" />
          </S.CategoriesRow>
          <div style={{ padding: '0 1rem' }}>
            <HorizontalCarousel title="New Arrivals" products={products?.slice(0, 4) || []} />
          </div>
        </S.SnapSectionCenter>

        {/* Section 2: Featured Bento Grid */}
        <S.SnapSectionCenter style={{ padding: '0 2.5rem' }}>
          <S.FeaturedHeader>
            <S.FeaturedSubTitle>Curated Favorites</S.FeaturedSubTitle>
            <S.FeaturedTitle>Featured Highlights</S.FeaturedTitle>
          </S.FeaturedHeader>
          
          <S.BentoGrid>
            <S.FeaturedBig className="group">
              <Image 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1920&auto=format&fit=crop" 
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
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop" 
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
        <S.SnapSectionCenter style={{ padding: '0 1rem' }}>
          <HorizontalCarousel title="Season Essentials" products={products?.slice(3, 7) || []} />
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

      {/* Overlays */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />
      <OrderModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
    </div>
  );
}

function CategoryBadge({ label, $active }: { label: string; $active?: boolean }) {
  return (
    <S.BadgeButton $active={$active}>
      {label}
    </S.BadgeButton>
  );
}
