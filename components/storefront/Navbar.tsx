"use client";

import React, { useState, useEffect } from "react";
import { ShoppingCart, Globe, Heart } from "lucide-react";
import { useCart } from "@/lib/store";
import * as S from "@/styles/storefront/Navbar.styles";

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const cartItems = useCart((state) => state.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <S.Nav $isScrolled={isScrolled}>
      <S.NavContainer>
        <S.LeftSection>
          <S.LogoLink href="/">
            <S.LogoTextWrapper>
              <S.LogoRow>P I</S.LogoRow>
              <S.LogoRow>P O</S.LogoRow>
            </S.LogoTextWrapper>
          </S.LogoLink>
          
          <S.DesktopLinks>
            <NavLink href="#" label="ผู้หญิง" subLabel="WOMEN" $active />
            <NavLink href="#" label="ผู้ชาย" subLabel="MEN" />
            <NavLink href="#" label="เด็ก" subLabel="KIDS" />
            <NavLink href="#" label="เด็กอ่อน" subLabel="BABY" />
          </S.DesktopLinks>
        </S.LeftSection>

        <S.RightSection>
          <S.IconGroup $isScrolled={isScrolled}>
            <S.IconButton>
              <Globe size={18} strokeWidth={1.2} />
            </S.IconButton>
            <S.IconButton>
              <Heart size={18} strokeWidth={1.2} />
            </S.IconButton>
          </S.IconGroup>
          <S.CartButton onClick={onCartClick}>
            <ShoppingCart size={20} strokeWidth={1.2} />
            {cartCount > 0 && (
              <S.Badge>{cartCount}</S.Badge>
            )}
          </S.CartButton>
        </S.RightSection>
      </S.NavContainer>
    </S.Nav>
  );
}

function NavLink({ href, label, subLabel, $active }: { href: string; label: string; subLabel: string; $active?: boolean }) {
  return (
    <S.StyledLink href={href} $active={$active}>
      <S.LinkLabel>{label}</S.LinkLabel>
      <S.LinkSubLabel>{subLabel}</S.LinkSubLabel>
    </S.StyledLink>
  );
}
