"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";
import { useWishlist } from "./WishlistProvider";
import { useCompare } from "./CompareProvider";
import { Share2, GitCompare, Heart, Star } from "lucide-react";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const { toggle, isSaved } = useWishlist();
  const { toggle: toggleCompare, isCompared } = useCompare();
  const [shared, setShared] = useState(false);
  const saved = isSaved(product.id);
  const compared = isCompared(product.id);
  const price = typeof product.price === "number" ? `$${product.price.toFixed(2)}` : product.price;
  const compareAt = product.compareAt ? `$${product.compareAt.toFixed(2)}` : null;

  return (
    <Link
      href={`/shop/${product.id}`}
      className="group block rounded-2xl bg-white shadow-md ring-1 ring-black/5 overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={520}
          height={520}
          className="h-64 w-full object-cover"
        />

        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-[#1f2937] px-3 py-1 text-xs font-semibold tracking-wide text-white">
            {product.badge}
          </span>
        )}

        <div className="absolute inset-0 bg-black/55 opacity-0 transition group-hover:opacity-100 flex flex-col items-center justify-center gap-4">
          <button
            className="bg-white text-[#B88E2F] px-6 py-2 text-sm font-semibold rounded-full"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              addItem(product, 1);
            }}
          >
            Add to cart
          </button>

          <div className="flex gap-4 text-white text-xs">
            <span className="flex items-center gap-1">
              <button
                className="flex items-center gap-1"
                onClick={async (event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  const url = `${window.location.origin}/shop/${product.id}`;
                  try {
                    if (navigator.share) {
                      await navigator.share({
                        title: product.name,
                        text: product.description,
                        url,
                      });
                    } else {
                      await navigator.clipboard.writeText(url);
                    }
                    setShared(true);
                    setTimeout(() => setShared(false), 1200);
                  } catch {
                    setShared(false);
                  }
                }}
              >
                <Share2 size={16} />
                {shared ? "Copied" : "Share"}
              </button>
            </span>
            <span className="flex items-center gap-1">
              <button
                className="flex items-center gap-1"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  toggleCompare(product);
                }}
              >
                <GitCompare size={16} className={compared ? "text-[#B88E2F]" : ""} />
                {compared ? "Compared" : "Compare"}
              </button>
            </span>
            <span className="flex items-center gap-1">
              <button
                className="flex items-center gap-1"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  toggle(product);
                }}
              >
                <Heart size={16} className={saved ? "text-[#B88E2F]" : ""} />
                {saved ? "Saved" : "Like"}
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-lg text-[#1f2937]">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.description}</p>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={14} fill="currentColor" />
            <span className="text-xs text-gray-500">{product.rating}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="font-semibold text-gray-900">{price}</span>
          {compareAt && (
            <span className="text-sm text-gray-400 line-through">{compareAt}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
