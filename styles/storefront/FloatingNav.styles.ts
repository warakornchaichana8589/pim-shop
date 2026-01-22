import styled from "styled-components";
import { motion } from "framer-motion";

export const NavWrapper = styled.div`
  position: fixed;
  bottom: 2.5rem;
  left: 50%;
  z-index: 50;
  transform: translateX(-50%);
`;

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 9999px;
  border: 1px solid rgba(244, 244, 245, 0.8);
  background-color: rgba(255, 255, 255, 0.95);
  padding: 0.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(24px);
`;

export const Divider = styled.div`
  margin: 0 0.25rem;
  height: 1.25rem;
  width: 1px;
  background-color: #f4f4f5;
`;

export const ItemButton = styled.button<{ $active?: boolean }>`
  position: relative;
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
