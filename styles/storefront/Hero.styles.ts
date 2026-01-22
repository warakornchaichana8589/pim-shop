import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #ffffff;
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: url("/HERO_BG.webp");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.5rem 6rem;

  @media (min-width: 768px) {
    justify-content: center;
    padding: 0 5rem;
  }
`;

export const SubTitle = styled.span`
  margin-bottom: 0.75rem;
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: #a1a1aa;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    font-size: 11px;
    margin-bottom: 1rem;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: #09090b;
  line-height: 1.1;
  text-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);

  @media (min-width: 640px) {
    font-size: 6rem;
    margin-bottom: 1.5rem;
  }
`;

export const Description = styled.p`
  margin-bottom: 2.5rem;
  max-width: 28rem;
  font-size: 0.8125rem;
  line-height: 1.625;
  color: #71717a;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);

  @media (min-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 2rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
    width: auto;
  }
`;

export const PrimaryButton = styled.button`
  border: 1px solid #09090b;
  background-color: #09090b;
  padding: 1rem 2.5rem;
  font-size: 10px;
  font-weight: 700;
  color: #ffffff;
  transition: all 0.3s ease;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;

  @media (min-width: 640px) {
    width: auto;
  }

  &:hover {
    background-color: transparent;
    color: #09090b;
  }

  &:active {
    transform: scale(0.95);
  }
`;
