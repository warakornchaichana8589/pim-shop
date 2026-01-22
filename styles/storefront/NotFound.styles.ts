"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2.5rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 0 5rem;
  }
`;

export const ErrorCode = styled(motion.h1)`
  font-size: clamp(8rem, 20vw, 15rem);
  font-weight: 900;
  line-height: 0.8;
  margin: 0;
  color: #09090b;
  letter-spacing: -0.05em;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 4px;
    background-color: #e60012;
  }
`;

export const Content = styled(motion.div)`
  margin-top: 3rem;
  max-width: 500px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  color: #09090b;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #71717a;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  font-weight: 500;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const PrimaryButton = styled(Link)`
  background-color: #09090b;
  color: #ffffff;
  padding: 1rem 2.5rem;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  text-decoration: none;
  border: 1px solid #09090b;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #09090b;
  }
`;

export const SecondaryButton = styled(Link)`
  background-color: #ffffff;
  color: #09090b;
  padding: 1rem 2.5rem;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  text-decoration: none;
  border: 1px solid #e4e4e7;
  transition: all 0.3s ease;

  &:hover {
    border-color: #09090b;
    background-color: #fafafa;
  }
`;

export const BackgroundDecor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  opacity: 0.03;

  &::before {
    content: "NOT FOUND";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    font-size: 30vw;
    font-weight: 900;
    white-space: nowrap;
    color: #09090b;
  }
`;
