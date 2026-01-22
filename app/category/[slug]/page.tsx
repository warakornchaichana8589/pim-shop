import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/storefront/Navbar";
import FloatingNav from "@/components/storefront/FloatingNav";
import Footer from "@/components/storefront/Footer";
import CategoryContent from "@/components/storefront/CategoryContent";
import { getProductsByCategory } from "@/lib/mock-data";
import * as S from "@/styles/storefront/CategoryPage.styles";

// Category metadata
const CATEGORY_META: Record<
  string,
  { title: string; subLabel: string; description: string }
> = {
  women: {
    title: "ผู้หญิง",
    subLabel: "WOMEN",
    description:
      "คอลเลกชันเสื้อผ้าผู้หญิงที่ออกแบบมาเพื่อความสบายและสไตล์ในทุกวัน",
  },
  men: {
    title: "ผู้ชาย",
    subLabel: "MEN",
    description: "เสื้อผ้าผู้ชายคุณภาพสูง ดีไซน์เรียบง่าย เหมาะกับทุกโอกาส",
  },
  kids: {
    title: "เด็ก",
    subLabel: "KIDS",
    description: "เสื้อผ้าเด็กที่ปลอดภัย สบาย และทนทาน สำหรับทุกการผจญภัย",
  },
  baby: {
    title: "เด็กอ่อน",
    subLabel: "BABY",
    description: "เสื้อผ้าเด็กอ่อนผ้านุ่ม ปลอดภัยสำหรับผิวบอบบาง",
  },
};

const SUB_CATEGORIES = [
  "ทั้งหมด",
  "เสื้อ",
  "กางเกง",
  "แจ็คเก็ต",
  "ชุดสูท",
  "กระโปรง",
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = CATEGORY_META[slug];
  return {
    title: `${meta?.title || slug} | P Pip Seasonal Store`,
    description: meta?.description || "สินค้าในหมวดหมู่นี้",
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  // 🟢 SSR: ดึงข้อมูลที่ Server ทันที ไม่เกิด Waterfall
  const products = getProductsByCategory(slug);

  const categoryMeta = CATEGORY_META[slug] || {
    title: slug,
    subLabel: slug.toUpperCase(),
    description: "สินค้าในหมวดหมู่นี้",
  };

  return (
    <>
      {/* 🟢 Layout Components: จะถูกรันที่ Server และส่ง HTML ออกไป */}
      <Navbar />

      <S.PageContainer>
        {/* Hero Section */}
        <S.HeroSection>
          <S.HeroOverlay />
          <S.HeroContent>
            <S.CategorySubLabel>{categoryMeta.subLabel}</S.CategorySubLabel>
            <S.CategoryTitle>{categoryMeta.title}</S.CategoryTitle>
            <S.CategoryDescription>
              {categoryMeta.description}
            </S.CategoryDescription>
          </S.HeroContent>
        </S.HeroSection>

        <S.ContentWrapper>
          {/* Breadcrumb */}
          <S.BreadcrumbNav>
            <Link href="/">หน้าแรก</Link>
            <span>/</span>
            <span className="current">{categoryMeta.title}</span>
          </S.BreadcrumbNav>

          {/* 🟢 Client Component: แยกเฉพาะส่วนที่ต้องมี Interaction (Sorting/Filtering) */}
          <CategoryContent
            products={products}
            categoryTitle={categoryMeta.title}
            subCategories={SUB_CATEGORIES}
          />
        </S.ContentWrapper>

        <Footer />
      </S.PageContainer>

      <FloatingNav />
    </>
  );
}
