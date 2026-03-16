"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "../../components/WishlistProvider";
import { useCart } from "../../components/CartProvider";

export default function WishlistPage() {
  const { items, remove, clear } = useWishlist();
  const { addItem } = useCart();

  return (
    <div className="bg-white">
      <section className="bg-[#f7f2eb]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#B88E2F]">
            Wishlist
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1f2937]">
            Your saved pieces
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {items.length === 0 ? (
            <div className="rounded-3xl border border-black/5 p-10 bg-[#fdfaf6] text-center">
              <h2 className="text-2xl font-semibold text-[#1f2937]">
                Nothing saved yet
              </h2>
              <p className="text-gray-600 mt-3">
                Save your favorites and come back anytime.
              </p>
              <Link
                href="/shop"
                className="inline-flex mt-6 rounded-full bg-[#B88E2F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9a7a26] transition"
              >
                Explore shop
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 rounded-3xl border border-black/5 p-6"
              >
                <div className="relative h-40 w-full sm:w-44 rounded-2xl overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold text-[#1f2937]">
                    {item.name}
                  </h3>
                  <p className="text-gray-500">{item.description}</p>
                  <p className="font-semibold text-[#1f2937]">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => addItem(item, 1)}
                    className="rounded-full bg-[#B88E2F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#9a7a26] transition"
                  >
                    Add to cart
                  </button>
                  <button
                    onClick={() => remove(item.id)}
                    className="text-sm text-red-400 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}

          {items.length > 0 && (
            <button
              onClick={clear}
              className="text-sm text-gray-500 hover:underline"
            >
              Clear wishlist
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
