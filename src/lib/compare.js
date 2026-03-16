const STORAGE_KEY = "funiro_compare";

export function readCompare() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function writeCompare(items) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function toggleCompareItem(items, product) {
  const exists = items.some((item) => item.id === product.id);
  if (exists) {
    return items.filter((item) => item.id !== product.id);
  }
  return [...items, product];
}
