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
  background-image: url('https://images.unsplash.com/photo-1574015974293-817f0efebb1b?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &::after {
    content: '';
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
  justify-content: center;
  padding: 0 2.5rem;

  @media (min-width: 768px) {
    padding: 0 5rem;
  }
`;

export const SubTitle = styled.span`
  margin-bottom: 1rem;
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: #a1a1aa;
`;

export const MainTitle = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3.75rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: #09090b;

  @media (min-width: 640px) {
    font-size: 6rem;
  }
`;

export const Description = styled.p`
  margin-bottom: 2rem;
  max-width: 28rem;
  font-size: 0.875rem;
  line-height: 1.625;
  color: #71717a;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PrimaryButton = styled.button`
  border: 1px solid #09090b;
  background-color: #09090b;
  padding: 1rem 2.5rem;
  font-size: 10px;
  font-weight: 700;
  color: #ffffff;
  transition: all 0.3s ease;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #09090b;
  }

  &:active {
    transform: scale(0.95);
  }
`;
