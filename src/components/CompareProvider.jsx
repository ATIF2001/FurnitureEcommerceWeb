"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { readCompare, toggleCompareItem, writeCompare } from "../lib/compare";

const CompareContext = createContext(null);

export function CompareProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readCompare());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      writeCompare(items);
    }
  }, [items, hydrated]);

  const value = useMemo(() => {
    return {
      items,
      count: items.length,
      toggle: (product) => setItems((prev) => toggleCompareItem(prev, product)),
      remove: (id) => setItems((prev) => prev.filter((item) => item.id !== id)),
      clear: () => setItems([]),
      isCompared: (id) => items.some((item) => item.id === id),
    };
  }, [items]);

  return (
    <CompareContext.Provider value={value}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) {
    throw new Error("useCompare must be used within CompareProvider");
  }
  return ctx;
}
