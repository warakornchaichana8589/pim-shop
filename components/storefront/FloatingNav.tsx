"use client";

import { Home, Search, User } from "lucide-react";
import * as S from "@/styles/storefront/FloatingNav.styles";

export default function FloatingNav() {
  return (
    <S.NavWrapper>
      <S.Container
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <NavItem icon={<Home size={18} strokeWidth={1.5} />} label="Home" $active />
        <NavItem icon={<Search size={18} strokeWidth={1.5} />} label="Search" />
        <S.Divider />
        <NavItem icon={<User size={18} strokeWidth={1.5} />} label="Profile" />
      </S.Container>
    </S.NavWrapper>
  );
}

function NavItem({ 
  icon, 
  label, 
  $active, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  $active?: boolean; 
  onClick?: () => void;
}) {
  return (
    <S.ItemButton
      onClick={onClick}
      $active={$active}
    >
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
}
