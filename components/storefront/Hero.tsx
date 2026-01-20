"use client";

import { motion } from "framer-motion";
import * as S from "@/styles/storefront/Hero.styles";

export default function HeroSection() {
  return (
    <S.HeroContainer>
      <S.HeroBackground />
      <S.ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: "42rem" }}
        >
          <S.SubTitle>Pipo Seasonal Collection</S.SubTitle>
          <S.MainTitle>
            FRESH <br />
            <span style={{ color: "#d4d4d8" }}>MODERN.</span>
          </S.MainTitle>
          <S.Description>
            Elevate your everyday wardrobe with our minimalist thai essentials.
          </S.Description>
          <S.ButtonGroup>
            <S.PrimaryButton>
              Explore Collection
            </S.PrimaryButton>
          </S.ButtonGroup>
        </motion.div>
      </S.ContentWrapper>
    </S.HeroContainer>
  );
}
