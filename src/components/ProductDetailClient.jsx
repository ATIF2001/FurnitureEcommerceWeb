"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

export default function ProductDetailClient({ product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[#B88E2F]">
          {product.badge || "In stock"}
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1f2937]">
          {product.name}
        </h1>
        <p className="text-gray-600 mt-3">{product.description}</p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-2xl font-semibold text-[#1f2937]">
          ${product.price.toFixed(2)}
        </span>
        {product.compareAt && (
          <span className="text-sm text-gray-400 line-through">
            ${product.compareAt.toFixed(2)}
          </span>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="inline-flex items-center gap-3 rounded-full border border-black/10 px-4 py-2">
          <button
            className="text-lg"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <span className="text-sm font-semibold">{qty}</span>
          <button className="text-lg" onClick={() => setQty((q) => q + 1)}>
            +
          </button>
        </div>
        <button
          className="rounded-full bg-[#B88E2F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9a7a26] transition"
          onClick={() => addItem(product, qty)}
        >
          Add to cart
        </button>
      </div>

      <div className="rounded-2xl border border-black/5 p-5 bg-[#fdfaf6] text-sm text-gray-600">
        Free delivery in UAE over $200. 2-year warranty included.
      </div>

      <div className="rounded-2xl border border-black/5 p-5 bg-white">
        <h3 className="text-sm font-semibold text-[#1f2937] uppercase tracking-[0.2em]">
          Description
        </h3>
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          Designed for daily comfort, this piece balances soft textures with a
          refined silhouette. Subtle details like rounded edges and warm finishes
          keep the look calm and timeless, making it easy to style across modern
          or classic rooms.
        </p>
      </div>
    </div>
  );
}
