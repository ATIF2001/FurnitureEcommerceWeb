"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { readWishlist, toggleWishlistItem, writeWishlist } from "../lib/wishlist";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readWishlist());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      writeWishlist(items);
    }
  }, [items, hydrated]);

  const value = useMemo(() => {
    return {
      items,
      count: items.length,
      toggle: (product) =>
        setItems((prev) => toggleWishlistItem(prev, product)),
      remove: (id) => setItems((prev) => prev.filter((item) => item.id !== id)),
      clear: () => setItems([]),
      isSaved: (id) => items.some((item) => item.id === id),
    };
  }, [items]);

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return ctx;
}
