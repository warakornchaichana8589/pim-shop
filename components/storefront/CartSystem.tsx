"use client";

import React from "react";
import { useUIStore } from "@/lib/store";
import CartDrawer from "./CartDrawer";
import OrderModal from "./OrderModal";

export default function CartSystem() {
  const { isCartOpen, isOrderModalOpen, setCartOpen, setOrderModalOpen } =
    useUIStore();

  return (
    <>
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={() => {
          setCartOpen(false);
          setOrderModalOpen(true);
        }}
      />
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
    </>
  );
}
