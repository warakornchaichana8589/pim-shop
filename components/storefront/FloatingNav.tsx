"use client";

import React, { memo } from "react";
import { Home, Search, User } from "lucide-react";
import * as S from "@/styles/storefront/FloatingNav.styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ============================================================
// Sub-Components
// ============================================================

const NavItem = memo(function NavItem({
  icon,
  label,
  $active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  $active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <S.ItemButton as="div" $active={$active} onClick={onClick}>
      {icon}

      {/* Tooltip Label */}
      <S.Tooltip className="tooltip">
        {label}
        <S.TooltipArrow />
      </S.Tooltip>

      <span className="sr-only">{label}</span>
      {$active && (
        <S.ActiveIndicator
          layoutId="active-nav-glow"
          className="absolute inset-0 z-[-1] rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </S.ItemButton>
  );
});

// ============================================================
// Main Component
// ============================================================

export default function FloatingNav() {
  const pathname = usePathname();

  // 🟢 Navigation handlers (Pure logic, minimal re-render impact)
  const handleSearchClick = (e: React.MouseEvent) => {
    if (pathname === "/search") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <S.NavWrapper>
      <S.Container
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <Link href="/">
          <NavItem
            icon={<Home size={18} strokeWidth={1.5} />}
            label="Home"
            $active={pathname === "/"}
          />
        </Link>
        <Link href="/search">
          <NavItem
            icon={<Search size={18} strokeWidth={1.5} />}
            label="Search"
            $active={pathname === "/search"}
            onClick={handleSearchClick}
          />
        </Link>
        <S.Divider />
        <NavItem icon={<User size={18} strokeWidth={1.5} />} label="Profile" />
      </S.Container>
    </S.NavWrapper>
  );
}
