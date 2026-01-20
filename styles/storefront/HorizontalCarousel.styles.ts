import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  color: #09090b;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const LinkWrapper = styled.a`
  font-size: 11px;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 4px;
  letter-spacing: 0.1em;
  color: #09090b;
`;

export const ScrollContainer = styled.div`
  overflow-x: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const ScrollContent = styled.div`
  display: flex;
  gap: 1.5rem;
  width: max-content;
  padding-bottom: 2rem;
`;

export const CardWrapper = styled.div`
  width: 280px;

  @media (min-width: 768px) {
    width: 320px;
  }
`;
