import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/assets/logo.png" alt="Funiro" className="h-8" />
            <span className="font-semibold text-[#1f2937]">Funiro</span>
          </div>
          <p className="text-sm text-gray-500">
            Modern furniture crafted for calm, warm, and livable spaces.
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#1f2937] mb-3">Shop</p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/shop">Living</Link></li>
            <li><Link href="/shop">Dining</Link></li>
            <li><Link href="/shop">Bedroom</Link></li>
            <li><Link href="/shop">Office</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[#1f2937] mb-3">Company</p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/about">Our story</Link></li>
            <li><Link href="/about">Design ethics</Link></li>
            <li><Link href="/contact">Support</Link></li>
            <li><Link href="/contact">Care guide</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[#1f2937] mb-3">Visit</p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Al Jazeera Club Abu Dhabi</li>
            <li>Sun-Thu, 10am - 8pm</li>
            <li>+971 0 000 0000</li>
            <li>hello@abc.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-sm text-gray-500">
        © 2026 Jovera IT. All rights reserved.
      </div>
    </footer>
  );
}
