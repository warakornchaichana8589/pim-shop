import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 60;
  background-color: rgba(9, 9, 11, 0.2);
  backdrop-filter: blur(4px);
`;

export const Drawer = styled(motion.div)`
  position: fixed;
  inset-y: 0;
  right: 0;
  z-index: 70;
  display: flex;
  width: 100%;
  max-width: 28rem;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f4f4f5;
  padding: 2rem;
`;

export const HeaderTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const MainTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  color: #09090b;
`;

export const CountBadge = styled.span`
  display: flex;
  height: 1.25rem;
  min-width: 1.25rem;
  align-items: center;
  justify-content: center;
  background-color: #09090b;
  padding: 0 0.25rem;
  font-size: 10px;
  font-weight: 700;
  color: #ffffff;
`;

export const SubTitle = styled.p`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a1a1aa;
`;

export const CloseButton = styled.button`
  padding: 0.5rem;
  transition: transform 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  color: #a1a1aa;

  &:hover {
    transform: rotate(90deg);
    color: #09090b;
  }
`;

export const CartItems = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
`;

export const EmptyState = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const EmptyIconWrapper = styled.div`
  margin-bottom: 1.5rem;
  background-color: #fafafa;
  padding: 2.5rem;
  color: #d4d4d8;
`;

export const EmptyTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #09090b;
`;

export const EmptySubTitle = styled.p`
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a1a1aa;
`;

export const ContinueButton = styled.button`
  margin-top: 2rem;
  border: 1px solid #09090b;
  background-color: transparent;
  padding: 0.75rem 2rem;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #09090b;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #09090b;
    color: #ffffff;
  }
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  
  & > div {
    border-bottom: 1px solid #f4f4f5;
  }
  
  & > div:first-child {
    padding-top: 0;
  }
  
  & > div:last-child {
    border-bottom: none;
  }
`;

export const CartItem = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem 0;
`;

export const ItemImageWrapper = styled.div`
  position: relative;
  height: 6rem;
  width: 4.5rem;
  flex-shrink: 0;
  background-color: #fafafa;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const ItemName = styled.h4`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  color: #09090b;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const RemoveButton = styled.button`
  color: #d4d4d8;
  transition: color 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #E60012;
  }
`;

export const ItemPrice = styled.span`
  margin-top: 0.25rem;
  display: block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a1a1aa;
`;

export const ItemFooter = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #e4e4e7;
  padding: 0.5rem 1rem;
`;

export const QuantityButton = styled.button`
  color: #a1a1aa;
  transition: color 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #09090b;
  }
`;

export const QuantityValue = styled.span`
  min-width: 1.25rem;
  text-align: center;
  font-size: 12px;
  font-weight: 900;
  color: #09090b;
`;

export const ItemTotal = styled.span`
  font-size: 14px;
  font-weight: 900;
  color: #09090b;
`;

export const Footer = styled.div`
  border-top: 1px solid #f4f4f5;
  background-color: #ffffff;
  padding: 2rem;
  padding-top: 1.5rem;
`;

export const SummaryRow = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SummaryLabel = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a1a1aa;
`;

export const SummaryValue = styled.span`
  font-size: 1.875rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: #09090b;
`;

export const SummaryNote = styled.p`
  margin-bottom: 2rem;
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.5;
  letter-spacing: 0.1em;
  color: #d4d4d8;
`;

export const CheckoutButton = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: #09090b;
  padding: 1.25rem 0;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #ffffff;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    
    .arrow {
      transform: translateX(0.25rem);
    }
  }

  &:active {
    transform: scale(0.98);
  }

  .arrow {
    transition: transform 0.3s ease;
  }
`;
