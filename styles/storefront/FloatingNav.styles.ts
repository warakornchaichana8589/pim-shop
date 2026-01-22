import styled from "styled-components";
import { motion } from "framer-motion";

export const NavWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  z-index: 50;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    bottom: 2.5rem;
  }
`;

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Balanced gap */
  border-radius: 9999px;
  border: 1px solid rgba(244, 244, 245, 0.5);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 0.75rem; /* More horizontal padding for pill shape */
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08); /* Soft floating shadow */
  backdrop-filter: blur(16px);
`;

export const Divider = styled.div`
  margin: 0 0.5rem;
  height: 1.25rem;
  width: 1px;
  background-color: #f4f4f5;
`;

export const ItemButton = styled.button<{ $active?: boolean }>`
  position: relative;
  display: flex;
  height: 2.5rem; /* Slightly smaller for tighter look */
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.2);
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#09090b" : "transparent")};
  color: ${(props) => (props.$active ? "#ffffff" : "#71717a")};

  &:hover {
    color: #09090b;
    background-color: ${(props) => (props.$active ? "#09090b" : "#f4f4f5")};
    transform: translateY(-2px);

    .tooltip {
      transform: scale(1) translateY(-10px);
      opacity: 1;
    }
  }

  svg {
    stroke-width: 1.5;
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  top: -3rem;
  transform: scale(0);
  border-radius: 9999px;
  background-color: #09090b;
  padding: 0.375rem 0.75rem;
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;
  opacity: 0;
  transition: all 0.3s ease;
  white-space: nowrap;
  pointer-events: none;
`;

export const TooltipArrow = styled.div`
  position: absolute;
  bottom: -0.25rem;
  left: 50%;
  height: 0.5rem;
  width: 0.5rem;
  transform: translateX(-50%) rotate(45deg);
  background-color: #09090b;
`;

export const ActiveIndicator = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: 9999px;
`;
