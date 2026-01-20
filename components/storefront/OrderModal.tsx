"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Copy } from "lucide-react";
import { useCart } from "@/lib/store";
import * as S from "@/styles/storefront/OrderModal.styles";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const { getTotal, clearCart } = useCart();
  const [step, setStep] = useState<"form" | "loading" | "success">("form");
  const [orderId, setOrderId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const newOrderId = "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase();
      setOrderId(newOrderId);
      setStep("success");
      clearCart();
    } catch {
      alert("Something went wrong. Please try again.");
      setStep("form");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <S.OverlayContainer>
          <S.Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={step !== "loading" ? onClose : undefined}
          />

          <S.ModalContent
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            {step === "form" && (
              <>
                <S.ModalHeader>
                  <S.HeaderTitle>Complete Your Order</S.HeaderTitle>
                  <S.CloseButton onClick={onClose}>
                    <X size={20} />
                  </S.CloseButton>
                </S.ModalHeader>
                <S.FormContainer onSubmit={handleSubmit}>
                  <S.FormFields>
                    <S.FieldGroup>
                      <S.Label>Full Name</S.Label>
                      <S.Input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="EX. SOMCHAI RAKDEE"
                      />
                    </S.FieldGroup>
                    <S.FieldGroup>
                      <S.Label>Phone Number</S.Label>
                      <S.Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="08X-XXX-XXXX"
                      />
                    </S.FieldGroup>
                    <S.FieldGroup>
                      <S.Label>Delivery Address</S.Label>
                      <S.TextArea
                        required
                        rows={3}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="STREET, DISTRICT, PROVINCE, ZIP CODE"
                      />
                    </S.FieldGroup>
                  </S.FormFields>

                  <S.SummaryCard>
                    <S.SummaryLabel>Total to Pay</S.SummaryLabel>
                    <S.SummaryValue>฿{getTotal().toLocaleString()}</S.SummaryValue>
                  </S.SummaryCard>

                  <S.SubmitButton type="submit">
                    Confirm Order
                  </S.SubmitButton>
                </S.FormContainer>
              </>
            )}

            {step === "loading" && (
              <S.LoadingContainer>
                <S.StyledLoader size={48} />
                <S.LoadingTitle>Processing Your Order</S.LoadingTitle>
                <S.LoadingSubTitle>Please wait while we secure your items...</S.LoadingSubTitle>
              </S.LoadingContainer>
            )}

            {step === "success" && (
              <S.SuccessContainer>
                <S.SuccessIconWrapper>
                  <CheckCircle2 size={48} />
                </S.SuccessIconWrapper>
                <S.SuccessTitle>Order Successful!</S.SuccessTitle>
                <S.SuccessSubTitle>Thank you for shopping with Pipo Seasonal.</S.SuccessSubTitle>
                
                <S.OrderRefBox>
                  <S.RefLabel>Order Reference</S.RefLabel>
                  <S.RefValueGroup>
                    <S.RefCode>{orderId}</S.RefCode>
                    <S.CopyButton onClick={() => copyToClipboard(orderId)}>
                      <Copy size={16} />
                    </S.CopyButton>
                  </S.RefValueGroup>
                </S.OrderRefBox>

                <S.AdminNote>
                  แอดมินจะดำเนินการตรวจสอบและจัดส่งภายใน 24 ชม.
                </S.AdminNote>

                <S.ContinueButton onClick={onClose}>
                  Continue Shopping
                </S.ContinueButton>
              </S.SuccessContainer>
            )}
          </S.ModalContent>
        </S.OverlayContainer>
      )}
    </AnimatePresence>
  );
}
