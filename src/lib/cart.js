const STORAGE_KEY = "funiro_cart";

export function readCart() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function writeCart(items) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function mergeCartItem(items, product, quantity = 1) {
  const existing = items.find((item) => item.id === product.id);
  if (existing) {
    return items.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  }
  return [
    ...items,
    {
      ...product,
      quantity,
    },
  ];
}
