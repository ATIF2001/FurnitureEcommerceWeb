const STORAGE_KEY = "funiro_wishlist";

export function readWishlist() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function writeWishlist(items) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function toggleWishlistItem(items, product) {
  const exists = items.some((item) => item.id === product.id);
  if (exists) {
    return items.filter((item) => item.id !== product.id);
  }
  return [...items, product];
}
