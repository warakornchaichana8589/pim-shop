import styled from "styled-components";

// ============================================================
// Container & Layout
// ============================================================

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  padding-top: 80px;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  @media (min-width: 768px) {
    padding: 3rem 5rem;
  }
`;

// ============================================================
// Hero Section
// ============================================================

export const HeroSection = styled.section`
  position: relative;
  height: 280px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 360px;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.8)
  );
  z-index: 1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 2rem;
`;

export const CategorySubLabel = styled.span`
  display: block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #a1a1aa;
  margin-bottom: 0.5rem;
`;

export const CategoryTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: #09090b;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const CategoryDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #71717a;
  max-width: 500px;
  margin: 1rem auto 0;
  line-height: 1.6;
`;

// ============================================================
// Breadcrumb
// ============================================================

export const BreadcrumbNav = styled.nav`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a1a1aa;

  a {
    color: #a1a1aa;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #09090b;
    }
  }

  span.current {
    color: #09090b;
  }
`;

// ============================================================
// Filter & Sort Bar
// ============================================================

export const FilterBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f4f4f5;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FilterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ResultCount = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #71717a;
`;

export const FilterTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const FilterTag = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: ${(props) => (props.$active ? "#09090b" : "#ffffff")};
  color: ${(props) => (props.$active ? "#ffffff" : "#09090b")};
  border: 1px solid ${(props) => (props.$active ? "#09090b" : "#e4e4e7")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #09090b;
    background-color: ${(props) => (props.$active ? "#09090b" : "#fafafa")};
  }
`;

export const SortSelect = styled.select`
  padding: 0.5rem 2rem 0.5rem 1rem;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #09090b;
  background-color: #ffffff;
  border: 1px solid #e4e4e7;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2309090b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #09090b;
  }

  &:focus {
    outline: none;
    border-color: #09090b;
  }
`;

// ============================================================
// Product Grid
// ============================================================

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

// ============================================================
// Empty State
// ============================================================

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`;

export const EmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  margin-bottom: 1.5rem;

  svg {
    color: #a1a1aa;
  }
`;

export const EmptyTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #09090b;
  margin: 0 0 0.5rem;
`;

export const EmptyDescription = styled.p`
  font-size: 14px;
  color: #71717a;
  margin: 0;
`;

// ============================================================
// Loading Skeleton
// ============================================================

export const SkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SkeletonImage = styled.div`
  aspect-ratio: 3/4;
  background: linear-gradient(90deg, #f4f4f5 25%, #fafafa 50%, #f4f4f5 75%);
  background-size: 200% 100%;
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

export const SkeletonText = styled.div<{ $width?: string; $height?: string }>`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "14px"};
  background: linear-gradient(90deg, #f4f4f5 25%, #fafafa 50%, #f4f4f5 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
`;

// ============================================================
// Pagination
// ============================================================

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #f4f4f5;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  background-color: ${(props) => (props.$active ? "#09090b" : "#ffffff")};
  color: ${(props) => (props.$active ? "#ffffff" : "#09090b")};
  border: 1px solid ${(props) => (props.$active ? "#09090b" : "#e4e4e7")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    border-color: #09090b;
    background-color: ${(props) => (props.$active ? "#09090b" : "#fafafa")};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
