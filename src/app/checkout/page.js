"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../components/CartProvider";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const shipping = items.length ? 25 : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-white">
      <section className="bg-[#f7f2eb]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#B88E2F]">
            Checkout
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1f2937]">
            Secure payment
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl">
            Complete your order and we’ll prepare your pieces for delivery.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form className="space-y-8">
            <div className="rounded-3xl border border-black/5 p-6">
              <h2 className="text-xl font-semibold text-[#1f2937] mb-4">
                Shipping details
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-xl border border-black/10 px-4 py-3"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-xl border border-black/10 px-4 py-3"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 sm:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Street address"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 sm:col-span-2"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full rounded-xl border border-black/10 px-4 py-3"
                />
                <input
                  type="text"
                  placeholder="Postal code"
                  className="w-full rounded-xl border border-black/10 px-4 py-3"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-black/5 p-6">
              <h2 className="text-xl font-semibold text-[#1f2937] mb-4">
                Payment method
              </h2>
              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Cardholder name"
                  className="w-full rounded-xl border border-black/10 px-4 py-3"
                />
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-full rounded-xl border border-black/10 px-4 py-3"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Expiry"
                    className="w-full rounded-xl border border-black/10 px-4 py-3"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full rounded-xl border border-black/10 px-4 py-3"
                  />
                </div>
              </div>
            </div>
          </form>

          <div className="rounded-3xl border border-black/5 p-6 bg-[#fdfaf6] h-fit">
            <h2 className="text-xl font-semibold text-[#1f2937] mb-4">
              Order summary
            </h2>
            <div className="space-y-4 max-h-72 overflow-auto pr-2">
              {items.length === 0 ? (
                <p className="text-sm text-gray-500">Your cart is empty.</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="relative h-14 w-14 rounded-xl overflow-hidden">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#1f2937]">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="mt-6 space-y-3 text-sm">
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
              href="/order-confirmation"
              onClick={clear}
              className="block mt-6 text-center rounded-full bg-[#B88E2F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9a7a26] transition"
            >
              Place order
            </Link>
            <Link
              href="/cart"
              className="block mt-4 text-center text-sm text-gray-500 hover:underline"
            >
              Back to cart
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
