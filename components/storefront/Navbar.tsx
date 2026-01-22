"use client";

import React, { useState, useEffect, useMemo, useCallback, memo } from "react";
import {
  ShoppingCart,
  Globe,
  Heart,
  User,
  LogOut,
  Package,
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { AnimatePresence } from "framer-motion";
import { useCart, useUIStore } from "@/lib/store";
import { useMenu } from "@/lib/hooks/useMenu";
import { MenuItem } from "@/types/menu";
import AuthModal from "@/components/storefront/AuthModal";
import * as S from "@/styles/storefront/Navbar.styles";
import * as AuthStyles from "@/styles/storefront/AuthModal.styles";

// ============================================================
// Sub-Components
// ============================================================

const NavLink = memo(function NavLink({
  item,
  $active,
  onClick,
}: {
  item: MenuItem;
  $active?: boolean;
  onClick: (id: string) => void;
}) {
  return (
    <S.StyledLink
      href={item.href}
      $active={$active}
      onClick={() => onClick(item.id)}
    >
      <S.LinkLabel>{item.label}</S.LinkLabel>
      <S.LinkSubLabel>{item.subLabel}</S.LinkSubLabel>
    </S.StyledLink>
  );
});

const Logo = memo(function Logo() {
  return (
    <S.LogoLink href="/">
      <S.LogoTextWrapper>
        <S.LogoRow>P I</S.LogoRow>
        <S.LogoRow>P O</S.LogoRow>
      </S.LogoTextWrapper>
    </S.LogoLink>
  );
});

const MenuSkeleton = memo(function MenuSkeleton() {
  return (
    <S.MenuSkeletonWrapper>
      <S.SkeletonLine $width="40px" $height="14px" />
      <S.SkeletonLine $width="50px" $height="10px" />
    </S.MenuSkeletonWrapper>
  );
});

// ============================================================
// Main Component
// ============================================================

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // 🟢 Selector Optimization: Only trigger re-render when total count changes
  const cartCount = useCart((state) =>
    state.items.reduce((acc, item) => acc + item.quantity, 0),
  );
  const setCartOpen = useUIStore((state) => state.setCartOpen);

  const { menuItems, isLoading } = useMenu();

  const initialActiveId = useMemo(() => {
    const activeItem = menuItems.find((item) => item.isActive);
    return activeItem?.id ?? "1";
  }, [menuItems]);

  const [activeMenuId, setActiveMenuId] = useState<string>(initialActiveId);

  useEffect(() => {
    setActiveMenuId(initialActiveId);
  }, [initialActiveId]);

  useEffect(() => {
    const handleScroll = () => {
      // 🟢 Optimization: Only update state if value actually changes
      const currentScrolled = window.scrollY > 20;
      setIsScrolled((prev) =>
        prev !== currentScrolled ? currentScrolled : prev,
      );
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🟢 useCallback: Prevent function recreation
  const handleMenuClick = useCallback((menuId: string) => {
    setActiveMenuId(menuId);
  }, []);

  const handleUserButtonClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (status === "authenticated") {
        setShowUserMenu((prev) => !prev);
      } else {
        setShowAuthModal(true);
      }
    },
    [status],
  );

  const handleSignOut = useCallback(() => {
    signOut({ callbackUrl: "/" });
    setShowUserMenu(false);
  }, []);

  const userInitials = useMemo(() => {
    if (session?.user?.name) {
      return session.user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    if (session?.user?.email) return session.user.email[0].toUpperCase();
    return "U";
  }, [session?.user]);

  return (
    <>
      <S.Nav $isScrolled={isScrolled}>
        <S.NavContainer>
          <S.LeftSection>
            <Logo />

            <S.DesktopLinks>
              {isLoading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <MenuSkeleton key={i} />
                  ))
                : menuItems.map((item) => (
                    <NavLink
                      key={item.id}
                      item={item}
                      $active={activeMenuId === item.id}
                      onClick={handleMenuClick}
                    />
                  ))}
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

            <AuthStyles.UserMenuContainer>
              <AuthStyles.UserButton onClick={handleUserButtonClick}>
                {status === "authenticated" && session?.user ? (
                  <AuthStyles.UserAvatar>{userInitials}</AuthStyles.UserAvatar>
                ) : (
                  <User size={20} strokeWidth={1.2} />
                )}
              </AuthStyles.UserButton>

              <AnimatePresence>
                {showUserMenu && session?.user && (
                  <AuthStyles.UserDropdown
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      style={{
                        padding: "1rem",
                        borderBottom: "1px solid #e4e4e7",
                      }}
                    >
                      <AuthStyles.UserName>
                        {session.user.name || "User"}
                      </AuthStyles.UserName>
                      <AuthStyles.UserEmail>
                        {session.user.email}
                      </AuthStyles.UserEmail>
                    </div>
                    <AuthStyles.DropdownItem>
                      <Package size={16} /> คำสั่งซื้อของฉัน
                    </AuthStyles.DropdownItem>
                    <AuthStyles.DropdownDivider />
                    <AuthStyles.DropdownItem onClick={handleSignOut}>
                      <LogOut size={16} /> ออกจากระบบ
                    </AuthStyles.DropdownItem>
                  </AuthStyles.UserDropdown>
                )}
              </AnimatePresence>
            </AuthStyles.UserMenuContainer>

            <S.CartButton onClick={() => setCartOpen(true)}>
              <ShoppingCart size={20} strokeWidth={1.2} />
              {cartCount > 0 && <S.Badge>{cartCount}</S.Badge>}
            </S.CartButton>
          </S.RightSection>
        </S.NavContainer>
      </S.Nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialTab="login"
      />
    </>
  );
}
