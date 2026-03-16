import Link from "next/link";

export const metadata = {
  title: "Order Confirmation | Funiro",
};

export default function OrderConfirmationPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#f7f2eb]">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#B88E2F]">
            Thank you
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1f2937]">
            Your order is confirmed
          </h1>
          <p className="text-gray-600 mt-4">
            A receipt and delivery timeline has been sent to your email.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-3xl border border-black/5 p-10 bg-[#fdfaf6] text-center">
            <h2 className="text-2xl font-semibold text-[#1f2937]">
              Order #FN-2941
            </h2>
            <p className="text-gray-600 mt-3">
              You’ll receive a tracking link within 24 hours.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/shop"
                className="rounded-full bg-[#B88E2F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9a7a26] transition"
              >
                Continue shopping
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#B88E2F] px-6 py-3 text-sm font-semibold text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition"
              >
                Need help?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
