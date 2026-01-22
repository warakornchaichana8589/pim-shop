import styled from "styled-components";

export const MainWrapper = styled.main`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SnapSection = styled.section`
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  min-height: 100vh;
  background-color: #ffffff;
`;

export const SnapSectionCenter = styled(SnapSection)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CategoriesRow = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 2rem 1.5rem;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 768px) {
    gap: 3rem;
    padding: 3rem 2.5rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  /* Ensure the last item has enough space */
  &::after {
    content: "";
    flex: 0 0 1.5rem;
  }
`;

export const BadgeButton = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  flex: none;
  border: none;
  border-bottom: 2px solid
    ${(props) => (props.$active ? "#09090b" : "transparent")};
  padding: 0.75rem 0.25rem;
  transition: all 0.3s ease;
  cursor: pointer;
  background: none;
  gap: 2px;

  &:hover {
    span:first-child {
      color: #09090b;
    }
  }
`;

export const TabLabel = styled.span<{ $active?: boolean }>`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${(props) => (props.$active ? "#09090b" : "#71717a")};
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 12px;
    letter-spacing: 0.2em;
  }
`;

export const TabSubLabel = styled.span`
  font-size: 8px;
  font-weight: 700;
  color: #a1a1aa;
  opacity: 0.6;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 9px;
  }
`;

export const FeaturedHeader = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FeaturedSubTitle = styled.span`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #a1a1aa;
`;

export const FeaturedTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: #09090b;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  height: 65vh;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const FeaturedBig = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #fafafa;

  @media (min-width: 768px) {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

export const FeaturedWide = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #fafafa;

  @media (min-width: 768px) {
    grid-column: span 2;
  }
`;

export const FeaturedSmall = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #fafafa;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.05);
  transition: background-color 0.3s ease;

  .group:hover & {
    background-color: transparent;
  }
`;

export const FeaturedOverlayText = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 2.5rem;
  color: #09090b;
`;

export const OverlaySubTitle = styled.p`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #71717a;
  margin-bottom: 0.5rem;
`;

export const OverlayTitleLarge = styled.h3`
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  text-transform: uppercase;
`;

export const OverlayTitleMedium = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  text-transform: uppercase;
`;

export const FeaturedSmallLabelWrapper = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  color: #09090b;
`;

export const SmallTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const ScrollIndicatorWrapper = styled.div`
  position: fixed;
  right: 1.5rem;
  top: 50%;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateY(-50%);
  align-items: center;
`;

export const IndicatorButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
`;

export const IndicatorLabel = styled.span`
  display: none;
`;

export const IndicatorLine = styled.div<{ $active: boolean }>`
  width: ${(props) => (props.$active ? "4px" : "6px")};
  height: ${(props) => (props.$active ? "2rem" : "6px")};
  border-radius: 9999px;
  background-color: ${(props) => (props.$active ? "#09090b" : "#e4e4e7")};
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${IndicatorButton}:hover & {
    background-color: #09090b;
    height: ${(props) => (props.$active ? "2rem" : "12px")};
  }
`;
