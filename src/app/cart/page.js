"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../components/CartProvider";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem, clear } = useCart();
  const shipping = items.length ? 25 : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-white">
      <section className="bg-[#f7f2eb]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#B88E2F]">
            Cart
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1f2937]">
            Your cart is ready for calm living.
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            {items.length === 0 ? (
              <div className="rounded-3xl border border-black/5 p-10 bg-[#fdfaf6] text-center">
                <h2 className="text-2xl font-semibold text-[#1f2937]">
                  Nothing here yet
                </h2>
                <p className="text-gray-600 mt-3">
                  Add pieces you love and come back to check out.
                </p>
                <Link
                  href="/shop"
                  className="inline-flex mt-6 rounded-full bg-[#B88E2F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9a7a26] transition"
                >
                  Continue shopping
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
                    <div className="flex items-center gap-4">
                      <p className="font-semibold text-[#1f2937]">
                        ${item.price.toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-red-400 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-9 w-9 rounded-full border border-black/10"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-9 w-9 rounded-full border border-black/10"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="rounded-3xl border border-black/5 p-6 bg-[#fdfaf6] h-fit">
            <h3 className="text-xl font-semibold text-[#1f2937]">Order summary</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t border-black/10 pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="block mt-6 text-center rounded-full bg-[#B88E2F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9a7a26] transition"
            >
              Proceed to checkout
            </Link>
            {items.length > 0 && (
              <button
                onClick={clear}
                className="mt-4 w-full text-sm text-gray-500 hover:underline"
              >
                Clear cart
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
