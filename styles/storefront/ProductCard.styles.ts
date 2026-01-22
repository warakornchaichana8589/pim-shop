import styled from "styled-components";
import Image from "next/image";

export const Card = styled.div`
  background-color: #ffffff;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  background-color: #fafafa;
`;

export const ProductImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.7s ease;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(1px);
`;

export const SoldOutBadge = styled.span`
  background-color: #09090b;
  padding: 0.5rem 1rem;
  font-size: 10px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.2em;
`;

export const QuickAddButton = styled.button`
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid #e4e4e7;
  background-color: #ffffff;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  font-size: 0; /* Hide text on mobile */
  color: #09090b;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  z-index: 5;

  @media (min-width: 768px) {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    width: auto;
    height: auto;
    border-radius: 0;
    padding: 0.75rem 0;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(0.5rem);
    background-color: rgba(255, 255, 255, 0.95);
  }

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: #09090b;
    color: #ffffff;
    border-color: #09090b;

    @media (min-width: 768px) {
      transform: translateY(0);
    }
  }

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    display: none;
  }

  ${Card}:hover & {
    @media (min-width: 768px) {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const InfoWrapper = styled.div`
  padding: 1.25rem 0.25rem;
`;

export const CategoryLabel = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a1a1aa;
`;

export const ProductName = styled.h3`
  margin-bottom: 0.75rem;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.4;
  color: #09090b;
  height: 2.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
`;

export const Currency = styled.span`
  font-size: 14px;
  font-weight: 900;
  color: #09090b;
`;

export const PriceValue = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: #09090b;
`;
