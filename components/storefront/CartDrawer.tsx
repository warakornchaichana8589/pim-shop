"use client";

import { AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/store";
import Image from "next/image";
import * as S from "@/styles/storefront/CartDrawer.styles";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export default function CartDrawer({ isOpen, onClose, onCheckout }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, getTotal } = useCart();
  const total = getTotal();

  return (
    <AnimatePresence>
      {isOpen && (
        <S.Overlay
          key="cart-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}

      {isOpen && (
        <S.Drawer
          key="cart-drawer"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
        >
            <S.Header>
              <S.HeaderTitleGroup>
                <S.TitleWrapper>
                  <S.MainTitle>Shopping Bag</S.MainTitle>
                  <S.CountBadge>{items.length}</S.CountBadge>
                </S.TitleWrapper>
                <S.SubTitle>Your curated selection</S.SubTitle>
              </S.HeaderTitleGroup>
              <S.CloseButton onClick={onClose}>
                <X size={20} />
              </S.CloseButton>
            </S.Header>

            <S.CartItems>
              {items.length === 0 ? (
                <S.EmptyState>
                  <S.EmptyIconWrapper>
                    <ShoppingBag size={40} strokeWidth={1} />
                  </S.EmptyIconWrapper>
                  <S.EmptyTitle>Your bag is empty</S.EmptyTitle>
                  <S.EmptySubTitle>Discover our new arrivals</S.EmptySubTitle>
                  <S.ContinueButton onClick={onClose}>
                    Continue Shopping
                  </S.ContinueButton>
                </S.EmptyState>
              ) : (
                <S.ItemsList>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <S.ItemImageWrapper>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </S.ItemImageWrapper>
                      <S.ItemInfo>
                        <S.ItemHeader>
                          <S.ItemName>{item.name}</S.ItemName>
                          <S.RemoveButton onClick={() => removeItem(item.id)}>
                            <Trash2 size={16} strokeWidth={1.5} />
                          </S.RemoveButton>
                        </S.ItemHeader>
                        <S.ItemPrice>฿{item.price.toLocaleString()}</S.ItemPrice>
                        
                        <S.ItemFooter>
                          <S.QuantitySelector>
                            <S.QuantityButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                              <Minus size={12} strokeWidth={2.5} />
                            </S.QuantityButton>
                            <S.QuantityValue>{item.quantity}</S.QuantityValue>
                            <S.QuantityButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                              <Plus size={12} strokeWidth={2.5} />
                            </S.QuantityButton>
                          </S.QuantitySelector>
                          <S.ItemTotal>
                            ฿{(item.price * item.quantity).toLocaleString()}
                          </S.ItemTotal>
                        </S.ItemFooter>
                      </S.ItemInfo>
                    </S.CartItem>
                  ))}
                </S.ItemsList>
              )}
            </S.CartItems>

            {items.length > 0 && (
              <S.Footer>
                <S.SummaryRow>
                  <S.SummaryLabel>Total Amount</S.SummaryLabel>
                  <S.SummaryValue>฿{total.toLocaleString()}</S.SummaryValue>
                </S.SummaryRow>
                <S.SummaryNote>
                  Calculated at checkout. Complimentary shipping for orders over ฿2,000.
                </S.SummaryNote>
                <S.CheckoutButton onClick={onCheckout}>
                  Checkout Now
                  <ArrowRight size={14} className="arrow" />
                </S.CheckoutButton>
              </S.Footer>
            )}
          </S.Drawer>
      )}
    </AnimatePresence>
  );
}
