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
  gap: 3rem;
  overflow-x: auto;
  padding: 3rem 2.5rem;
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const BadgeButton = styled.button<{ $active?: boolean }>`
  white-space: nowrap;
  flex: none;
  border: none;
  border-bottom: 2px solid ${props => props.$active ? '#09090b' : 'transparent'};
  padding: 1rem 0.5rem;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${props => props.$active ? '#09090b' : '#a1a1aa'};
  transition: all 0.3s ease;
  cursor: pointer;
  background: none;

  &:hover {
    color: #09090b;
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
  right: 2.5rem;
  top: 50%;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transform: translateY(-50%);
`;

export const IndicatorButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover .indicator-label {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const IndicatorLabel = styled.span`
  margin-right: 1.5rem;
  opacity: 0;
  transition: all 0.3s ease;
  transform: translateX(1rem);
  white-space: nowrap;
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #09090b;
`;

export const IndicatorLine = styled.div<{ $active: boolean }>`
  height: 1px;
  transition: all 0.5s ease;
  background-color: ${props => props.$active ? '#09090b' : '#e4e4e7'};
  width: ${props => props.$active ? '3rem' : '1.5rem'};
  
  .indicator-item:hover & {
    width: ${props => props.$active ? '3rem' : '2rem'};
  }
`;
