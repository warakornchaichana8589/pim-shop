"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(9, 9, 11, 0.4);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
`;

export const ModalContent = styled(motion.div)`
  background-color: #ffffff;
  width: 100%;
  max-width: 800px;
  min-height: 400px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const SearchHeader = styled.div`
  margin-bottom: 2.5rem;
`;

export const Label = styled.span`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: #a1a1aa;
  display: block;
  margin-bottom: 0.75rem;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  border-bottom: 2px solid #09090b;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 0;
  font-size: 2rem;
  font-weight: 700;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-kanit), var(--font-inter);

  &::placeholder {
    color: #e4e4e7;
  }
`;

export const ResultsSection = styled.div`
  margin-top: 2rem;
  max-height: 50vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #09090b;
  }
`;

export const ResultItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid #f4f4f5;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fafafa;
  }
`;

export const ResultImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  background-color: #f4f4f5;
`;

export const ResultInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ResultName = styled.h4`
  font-size: 14px;
  font-weight: 700;
  margin: 0;
`;

export const ResultPrice = styled.span`
  font-size: 12px;
  color: #71717a;
  font-weight: 600;
`;

export const EmptyState = styled.div`
  padding: 4rem 0;
  text-align: center;
  color: #a1a1aa;
  font-weight: 600;
`;

// Full Page Styles
export const PageWrapper = styled.div`
  padding: 120px 5rem 5rem;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  font-size: 3.75rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  margin-bottom: 3rem;
  text-transform: uppercase;
`;
