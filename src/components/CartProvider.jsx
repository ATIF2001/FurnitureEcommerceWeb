"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { mergeCartItem, readCart, writeCart } from "../lib/cart";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      writeCart(items);
    }
  }, [items, hydrated]);

  const value = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return {
      items,
      count,
      subtotal,
      addItem: (product, quantity = 1) =>
        setItems((prev) => mergeCartItem(prev, product, quantity)),
      updateQuantity: (id, quantity) =>
        setItems((prev) =>
          prev
            .map((item) => (item.id === id ? { ...item, quantity } : item))
            .filter((item) => item.quantity > 0)
        ),
      removeItem: (id) => setItems((prev) => prev.filter((item) => item.id !== id)),
      clear: () => setItems([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
