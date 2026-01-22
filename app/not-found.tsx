"use client";

import React from "react";
import Navbar from "@/components/storefront/Navbar";
import Footer from "@/components/storefront/Footer";
import FloatingNav from "@/components/storefront/FloatingNav";
import * as S from "@/styles/storefront/NotFound.styles";

export default function NotFound() {
  return (
    <S.Container>
      <Navbar />

      <S.Main>
        <S.BackgroundDecor />

        <S.ErrorCode
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          404
        </S.ErrorCode>

        <S.Content
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <S.Title>Page Not Found</S.Title>
          <S.Description>
            ขออภัย ไม่พบหน้าที่คุณต้องการ หรือหน้านี้อาจถูกลบไปแล้ว กรุณาตรวจสอบ
            URL อีกครั้ง หรือกลับไปที่หน้าหลักเพื่อเลือกชมสินค้าอื่นๆ
          </S.Description>

          <S.ButtonGroup>
            <S.PrimaryButton href="/">BACK TO HOME</S.PrimaryButton>
            <S.SecondaryButton href="/category">SHOP ALL</S.SecondaryButton>
          </S.ButtonGroup>
        </S.Content>
      </S.Main>

      <Footer />
      <FloatingNav />
    </S.Container>
  );
}
