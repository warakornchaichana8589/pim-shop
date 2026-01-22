import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEnhancedProduct } from "@/app/api/products/[id]/route";
import * as S from "@/styles/storefront/ProductDetail.styles";
import Navbar from "@/components/storefront/Navbar";
import Footer from "@/components/storefront/Footer";
import FloatingNav from "@/components/storefront/FloatingNav";
import ProductContent from "@/components/storefront/ProductContent";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getEnhancedProduct(id);

  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Pipo Seasonal Store`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;

  // 🟢 SSR: ดึงข้อมูลที่ Server ทันทีผ่าน helper (ไม่ต้องผ่าน fetch HTTP)
  const product = getEnhancedProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <S.PageContainer>
        <S.ProductContainer>
          {/* Breadcrumb */}
          <S.BreadcrumbNav>
            <Link href="/">หน้าแรก</Link>
            <span>/</span>
            <Link href={`/category/${product.category}`}>
              {product.category}
            </Link>
            <span>/</span>
            <span>{product.name}</span>
          </S.BreadcrumbNav>

          {/* 🟢 Client Component: แยกส่วน Interactive (Image slider, Size select, add to cart) */}
          <ProductContent product={product} />
        </S.ProductContainer>

        {/* Footer */}
        <Footer />
      </S.PageContainer>

      <FloatingNav />
    </>
  );
}
