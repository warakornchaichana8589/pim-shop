"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import * as S from "@/styles/storefront/Footer.styles";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.Grid>
          <S.BrandSection>
            <S.LogoLink href="/">
              <S.LogoIcon>
                <S.LogoRow>P I</S.LogoRow>
                <S.LogoRow>P O</S.LogoRow>
              </S.LogoIcon>
              <S.BrandName>PIPO SEASONAL</S.BrandName>
            </S.LogoLink>
            <S.BrandDescription>
              Simple made better. Refined essentials for modern living, inspired by the minimalist thai aesthetic.
            </S.BrandDescription>
            <S.SocialLinks>
              <FooterSocialLink icon={<Facebook size={18} strokeWidth={1.5} />} href="#" />
              <FooterSocialLink icon={<Instagram size={18} strokeWidth={1.5} />} href="#" />
              <FooterSocialLink icon={<Twitter size={18} strokeWidth={1.5} />} href="#" />
            </S.SocialLinks>
          </S.BrandSection>

          <S.LinkSection>
             <S.FooterHeader>Discovery</S.FooterHeader>
             <S.FooterList>
               <FooterItem href="#">Information</FooterItem>
               <FooterItem href="#">Store Locator</FooterItem>
               <FooterItem href="#">Careers</FooterItem>
               <FooterItem href="#">Sustainability</FooterItem>
             </S.FooterList>
          </S.LinkSection>

          <S.LinkSection>
             <S.FooterHeader>Concierge</S.FooterHeader>
             <S.FooterList>
               <FooterItem href="#">FAQ</FooterItem>
               <FooterItem href="#">Return Policy</FooterItem>
               <FooterItem href="#">Privacy Policy</FooterItem>
               <FooterItem href="#">Accessibility</FooterItem>
             </S.FooterList>
          </S.LinkSection>

          <S.NewsletterSection>
            <S.FooterHeader>Stay Informed</S.FooterHeader>
            <S.NewsletterText>
              Subscribe to our monthly newsletter for seasonal insights.
            </S.NewsletterText>
            <S.NewsletterForm>
              <S.InputWrapper>
                <S.NewsletterInput 
                  type="email" 
                  placeholder="EMAIL ADDRESS"
                />
              </S.InputWrapper>
              <S.SubscribeButton>
                SUBSCRIBE
              </S.SubscribeButton>
            </S.NewsletterForm>
          </S.NewsletterSection>
        </S.Grid>

        <S.BottomBar>
          <S.CopyrightText>
            © 2026 PIPO SEASONAL. CRAFTED WITH PRECISION.
          </S.CopyrightText>
          <S.LegalLinks>
             <S.LegalLink href="#">Terms</S.LegalLink>
             <S.LegalLink href="#">Privacy</S.LegalLink>
             <S.LegalLink href="#">Cookies</S.LegalLink>
          </S.LegalLinks>
        </S.BottomBar>
      </S.FooterContent>
    </S.FooterContainer>
  );
}

function FooterItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <S.StyledFooterLink href={href}>
        {children}
      </S.StyledFooterLink>
    </li>
  );
}

function FooterSocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <S.SocialLink href={href}>
      {icon}
    </S.SocialLink>
  );
}
