import styled from "styled-components";
import { motion } from "framer-motion";

// ============================================================
// Overlay & Container
// ============================================================

export const OverlayContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Backdrop = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 420px;
  background-color: #ffffff;
  padding: 2.5rem;
  z-index: 10;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

// ============================================================
// Header
// ============================================================

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HeaderTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: #09090b;
  margin: 0;
`;

export const HeaderSubtitle = styled.p`
  font-size: 12px;
  color: #71717a;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #a1a1aa;
  transition: color 0.3s ease;
  padding: 0;

  &:hover {
    color: #09090b;
  }
`;

// ============================================================
// Form
// ============================================================

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #09090b;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 14px;
  font-weight: 500;
  color: #09090b;
  background-color: #fafafa;
  border: 1px solid #e4e4e7;
  transition: all 0.3s ease;

  &::placeholder {
    color: #a1a1aa;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.05em;
  }

  &:focus {
    outline: none;
    border-color: #09090b;
    background-color: #ffffff;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 11px;
  color: #e60012;
  font-weight: 600;
`;

// ============================================================
// Buttons
// ============================================================

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #09090b;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid #09090b;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #09090b;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: #ffffff;
  color: #09090b;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid #e4e4e7;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #09090b;
    background-color: #fafafa;
  }
`;

// ============================================================
// Divider
// ============================================================

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #a1a1aa;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: #e4e4e7;
  }
`;

// ============================================================
// Links
// ============================================================

export const LinksRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

export const TextLink = styled.button`
  background: none;
  border: none;
  font-size: 11px;
  font-weight: 600;
  color: #71717a;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0;

  &:hover {
    color: #09090b;
  }
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 11px;
  color: #71717a;
  margin: 0;

  button {
    color: #09090b;
    font-weight: 700;
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      color: #e60012;
    }
  }
`;

// ============================================================
// Tabs
// ============================================================

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e4e4e7;
  margin-bottom: 2rem;
`;

export const Tab = styled.button<{ $active?: boolean }>`
  flex: 1;
  padding: 1rem;
  background: none;
  border: none;
  border-bottom: 2px solid
    ${(props) => (props.$active ? "#09090b" : "transparent")};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${(props) => (props.$active ? "#09090b" : "#a1a1aa")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #09090b;
  }
`;

// ============================================================
// User Menu
// ============================================================

export const UserMenuContainer = styled.div`
  position: relative;
`;

export const UserButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #09090b;
  padding: 0.5rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #09090b;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
`;

export const UserDropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  min-width: 200px;
  background-color: #ffffff;
  border: 1px solid #e4e4e7;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const DropdownItem = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: none;
  border: none;
  font-size: 12px;
  font-weight: 600;
  color: #09090b;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: left;

  &:hover {
    background-color: #fafafa;
  }

  svg {
    color: #71717a;
  }
`;

export const DropdownDivider = styled.div`
  height: 1px;
  background-color: #e4e4e7;
  margin: 0.5rem 0;
`;

export const UserName = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #09090b;
`;

export const UserEmail = styled.span`
  font-size: 10px;
  color: #71717a;
`;
