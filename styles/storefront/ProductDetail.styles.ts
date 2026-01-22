import styled from "styled-components";
import Image from "next/image";

// ============================================================
// Container & Layout
// ============================================================

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  padding-top: 80px;
`;

export const ProductContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  @media (min-width: 768px) {
    padding: 3rem 5rem;
  }
`;

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

  span {
    color: #09090b;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }
`;

// ============================================================
// Image Gallery
// ============================================================

export const GallerySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    position: sticky;
    top: 100px;
    height: fit-content;
    max-height: calc(100vh - 120px);
  }
`;

export const MainImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  background-color: #fafafa;
  overflow: hidden;
  flex: 1;
  @media (min-width: 1024px) {
    max-height: 500px;
    min-height: 500px;
  }
`;

export const MainImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.5s ease;
  width: 100%;
  max-width: 100%;
  &:hover {
    transform: scale(1.03);
  }
`;

export const ThumbnailList = styled.div`
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: column;
    overflow-x: visible;
    padding-bottom: 0;
    width: 80px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ThumbnailButton = styled.button<{ $active?: boolean }>`
  position: relative;
  width: 64px;
  height: 80px;
  flex-shrink: 0;
  background-color: #fafafa;
  border: 2px solid ${(props) => (props.$active ? "#09090b" : "transparent")};
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.3s ease;

  @media (min-width: 768px) {
    width: 80px;
    height: 100px;
  }

  &:hover {
    border-color: ${(props) => (props.$active ? "#09090b" : "#e4e4e7")};
  }
`;

export const ThumbnailImage = styled(Image)`
  object-fit: cover;
`;

// ============================================================
// Product Info
// ============================================================

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CategoryLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #a1a1aa;
`;

export const ProductName = styled.h1`
  font-size: 1.75rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: #09090b;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
`;

export const CurrentPrice = styled.span`
  font-size: 1.75rem;
  font-weight: 900;
  color: #09090b;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const OriginalPrice = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #a1a1aa;
  text-decoration: line-through;
`;

export const DiscountBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background-color: #e60012;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: #71717a;
  max-width: 500px;
`;

// ============================================================
// Options (Size, Color)
// ============================================================

export const OptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const OptionLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #09090b;
`;

export const OptionRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const SizeButton = styled.button<{
  $active?: boolean;
  $disabled?: boolean;
}>`
  min-width: 48px;
  height: 48px;
  padding: 0 1rem;
  background-color: ${(props) => (props.$active ? "#09090b" : "#ffffff")};
  color: ${(props) => (props.$active ? "#ffffff" : "#09090b")};
  border: 1px solid ${(props) => (props.$active ? "#09090b" : "#e4e4e7")};
  font-size: 12px;
  font-weight: 700;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    border-color: #09090b;
    background-color: ${(props) => (props.$active ? "#09090b" : "#fafafa")};
  }
`;

export const ColorButton = styled.button<{ $color: string; $active?: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  border: 2px solid ${(props) => (props.$active ? "#09090b" : "transparent")};
  outline: 2px solid ${(props) => (props.$active ? "#ffffff" : "transparent")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

// ============================================================
// Quantity & Actions
// ============================================================

export const QuantitySection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e4e4e7;
`;

export const QuantityButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fafafa;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const QuantityValue = styled.span`
  min-width: 48px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #09090b;
`;

export const StockInfo = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #a1a1aa;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const AddToCartButton = styled.button`
  flex: 1;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: #09090b;
  color: #ffffff;
  border: 1px solid #09090b;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #09090b;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const WishlistButton = styled.button`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 1px solid #e4e4e7;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #09090b;
    color: #e60012;
  }
`;

// ============================================================
// Product Details / Specs
// ============================================================

export const DetailsSection = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #f4f4f5;
  padding-top: 2rem;
`;

export const DetailAccordion = styled.div`
  border-bottom: 1px solid #f4f4f5;
`;

export const AccordionHeader = styled.button<{ $open?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #09090b;

  svg {
    transition: transform 0.3s ease;
    transform: rotate(${(props) => (props.$open ? "180deg" : "0deg")});
  }
`;

export const AccordionContent = styled.div<{ $open?: boolean }>`
  max-height: ${(props) => (props.$open ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

export const AccordionInner = styled.div`
  padding-bottom: 1.5rem;
  font-size: 14px;
  line-height: 1.7;
  color: #71717a;

  ul {
    margin: 0;
    padding-left: 1.25rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

// ============================================================
// Delivery Info
// ============================================================

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: #fafafa;
  margin-top: 1.5rem;
`;

export const DeliveryItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  svg {
    flex-shrink: 0;
    color: #09090b;
  }
`;

export const DeliveryText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const DeliveryTitle = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #09090b;
`;

export const DeliveryDesc = styled.span`
  font-size: 12px;
  color: #71717a;
`;
