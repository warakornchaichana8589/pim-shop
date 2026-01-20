import styled from "styled-components";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export const OverlayContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 80;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Backdrop = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-color: rgba(9, 9, 11, 0.4);
  backdrop-filter: blur(8px);
`;

export const ModalContent = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 32rem;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 0;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f4f4f5;
  padding: 1.5rem 2rem;
`;

export const HeaderTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  color: #09090b;
`;

export const CloseButton = styled.button`
  padding: 0.5rem;
  transition: all 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  color: #a1a1aa;

  &:hover {
    color: #09090b;
    transform: rotate(90deg);
  }
`;

export const FormContainer = styled.form`
  padding: 2rem;
`;

export const FormFields = styled.div`
  margin-bottom: 2rem;
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
  color: #71717a;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #e4e4e7;
  background-color: #fafafa;
  padding: 1rem;
  font-size: 12px;
  font-weight: 700;
  outline: none;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &:focus {
    border-color: #09090b;
    background-color: #ffffff;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #e4e4e7;
  background-color: #fafafa;
  padding: 1rem;
  font-size: 12px;
  font-weight: 700;
  outline: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  resize: none;

  &:focus {
    border-color: #09090b;
    background-color: #ffffff;
  }
`;

export const SummaryCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
  padding: 1.5rem;
  border: 1px solid #f4f4f5;
`;

export const SummaryLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #71717a;
`;

export const SummaryValue = styled.span`
  font-size: 1.25rem;
  font-weight: 900;
  color: #09090b;
`;

export const SubmitButton = styled.button`
  margin-top: 2rem;
  width: 100%;
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
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  text-align: center;
`;

export const StyledLoader = styled(Loader2)`
  margin-bottom: 2rem;
  animation: spin 2s linear infinite;
  color: #09090b;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export const LoadingTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.05em;
`;

export const LoadingSubTitle = styled.p`
  margin-top: 0.5rem;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a1a1aa;
`;

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`;

export const SuccessIconWrapper = styled.div`
  margin-bottom: 2rem;
  color: #10b981;
`;

export const SuccessTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  color: #09090b;
`;

export const SuccessSubTitle = styled.p`
  margin-top: 0.5rem;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a1a1aa;
`;

export const OrderRefBox = styled.div`
  margin-top: 3rem;
  width: 100%;
  background-color: #fafafa;
  padding: 2rem;
  border: 1px solid #f4f4f5;
`;

export const RefLabel = styled.span`
  font-size: 9px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #d4d4d8;
`;

export const RefValueGroup = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const RefCode = styled.code`
  font-size: 1.25rem;
  font-weight: 900;
  color: #09090b;
`;

export const CopyButton = styled.button`
  padding: 0.5rem;
  background-color: #ffffff;
  border: 1px solid #e4e4e7;
  color: #a1a1aa;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #09090b;
    border-color: #09090b;
  }
`;

export const AdminNote = styled.p`
  margin-top: 2rem;
  font-size: 12px;
  font-weight: 700;
  color: #a1a1aa;
`;

export const ContinueButton = styled.button`
  margin-top: 3rem;
  width: 100%;
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
  }
`;
