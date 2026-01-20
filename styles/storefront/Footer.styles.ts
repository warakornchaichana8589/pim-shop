import styled from "styled-components";
import Link from "next/link";

export const FooterContainer = styled.footer`
  background-color: #ffffff;
  padding: 6rem 2.5rem;
  border-top: 1px solid #f4f4f5;

  @media (min-width: 768px) {
    padding: 6rem 5rem;
  }
`;

export const FooterContent = styled.div`
  margin: 0 auto;
  max-width: 1400px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const BrandSection = styled.div`
  @media (min-width: 768px) {
    grid-column: span 4;
  }
`;

export const LogoLink = styled(Link)`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
`;

export const LogoIcon = styled.div`
  background-color: #09090b;
  padding: 0.5rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  line-height: 1;
`;

export const LogoRow = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: -0.05em;
`;

export const BrandName = styled.span`
  font-size: 1.25rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: #09090b;
  text-transform: uppercase;
`;

export const BrandDescription = styled.p`
  margin-bottom: 2.5rem;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 2;
  letter-spacing: 0.2em;
  color: #a1a1aa;
  max-width: 300px;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const LinkSection = styled.div`
  @media (min-width: 768px) {
    grid-column: span 2;
  }
`;

export const NewsletterSection = styled.div`
  @media (min-width: 768px) {
    grid-column: span 4;
  }
`;

export const FooterHeader = styled.h4`
  margin-bottom: 2rem;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #09090b;
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
`;

export const StyledFooterLink = styled(Link)`
  text-decoration: none;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a1a1aa;
  transition: color 0.3s ease;

  &:hover {
    color: #09090b;
  }
`;

export const NewsletterText = styled.p`
  margin-bottom: 1.5rem;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a1a1aa;
  line-height: 1.625;
`;

export const NewsletterForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const NewsletterInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #e4e4e7;
  background-color: transparent;
  padding: 1rem 0;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  outline: none;
  transition: border-color 0.3s ease;
  text-transform: uppercase;

  &::placeholder {
    color: #d4d4d8;
  }

  &:focus {
    border-color: #09090b;
  }
`;

export const SubscribeButton = styled.button`
  background-color: #09090b;
  padding: 1.25rem 0;
  font-size: 10px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.3em;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f4f4f5;
  padding-top: 2.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CopyrightText = styled.p`
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.3em;
  color: #d4d4d8;
  text-transform: uppercase;
`;

export const LegalLinks = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 2.5rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const LegalLink = styled(Link)`
  text-decoration: none;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.2em;
  color: #a1a1aa;
  transition: color 0.3s ease;
  text-transform: uppercase;

  &:hover {
    color: #09090b;
  }
`;

export const SocialLink = styled(Link)`
  color: #d4d4d8;
  transition: all 0.3s ease;

  &:hover {
    color: #09090b;
    transform: scale(1.1);
  }
`;
