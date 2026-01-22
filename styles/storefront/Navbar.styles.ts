import styled from "styled-components";
import Link from "next/link";

export const Nav = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  transition: all 0.5s ease;
  padding: ${(props) => (props.$isScrolled ? "0.75rem 0" : "1.5rem 0")};
  background-color: ${(props) =>
    props.$isScrolled ? "rgba(255, 255, 255, 0.8)" : "transparent"};
  border-bottom: ${(props) =>
    props.$isScrolled ? "1px solid #f4f4f5" : "none"};
  backdrop-filter: ${(props) => (props.$isScrolled ? "blur(12px)" : "none")};
`;

export const NavContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;

  @media (min-width: 768px) {
    padding: 0 5rem;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const LogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #09090b;
  padding: 0.5rem;
  color: #ffffff;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #e60012;
  }
`;

export const LogoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
`;

export const LogoRow = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: -0.05em;
`;

export const DesktopLinks = styled.div`
  display: none;
  align-items: center;
  gap: 2.5rem;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const StyledLink = styled(Link)<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.3s ease;
  text-decoration: none;
  opacity: ${(props) => (props.$active ? 1 : 0.4)};

  &:hover {
    opacity: 1;
  }
`;

export const LinkLabel = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #09090b;
`;

export const LinkSubLabel = styled.span`
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.2em;
  margin-top: -0.125rem;
  color: #a1a1aa;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const IconGroup = styled.div<{ $isScrolled: boolean }>`
  display: none;
  align-items: center;
  gap: 1.5rem;
  transition: color 0.5s ease;
  color: ${(props) => (props.$isScrolled ? "#a1a1aa" : "#71717a")};

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const IconButton = styled.button`
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: inherit;

  &:hover {
    color: #09090b;
    transform: scale(1.1);
  }
`;

export const CartButton = styled.button`
  position: relative;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
  color: #09090b;
`;

export const Badge = styled.span`
  position: absolute;
  right: -0.25rem;
  top: -0.25rem;
  display: flex;
  height: 1rem;
  width: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #09090b;
  font-size: 9px;
  font-weight: 700;
  color: #ffffff;
`;

// Skeleton Loading Styles
export const MenuSkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const SkeletonLine = styled.div<{ $width?: string; $height?: string }>`
  width: ${(props) => props.$width || "40px"};
  height: ${(props) => props.$height || "12px"};
  background: linear-gradient(90deg, #e5e5e5 25%, #f0f0f0 50%, #e5e5e5 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 1.5s infinite;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
