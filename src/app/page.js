import Image from "next/image";
import Link from "next/link";
import ProductCard from "../components/products";
import RoomInspiration from "../components/RoomInspiration";
import FurnitureGallery from "../components/gallery";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import { products } from "../data/products";

export default function Home() {
  const categories = [
    {
      title: "Living Room",
      image: "/assets/pic-1.png",
    },
    {
      title: "Dining Room",
      image: "/assets/pic-2.png",
    },
    {
      title: "Bedroom",
      image: "/assets/pic-3.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf6]">
      <main className="w-full">
        <section className="relative min-h-[80vh] flex items-center">
          <Image
            src="/assets/Hero.png"
            alt="Modern living room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f2937]/70 via-[#1f2937]/20 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 py-20">
            <div className="max-w-xl text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-[#e4c37f] mb-4">
                New season edit
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
                Discover calm, crafted furniture.
              </h1>
              <p className="text-base sm:text-lg text-white/80 mt-4">
                Build a home that feels soft, intentional, and timeless with our curated sets.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="bg-[#B88E2F] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#9a7a26] transition"
                >
                  Shop New In
                </Link>
                <Link
                  href="#collections"
                  className="border border-white/60 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-[#1f2937] transition"
                >
                  View Collections
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Features />

        <section id="collections" className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-[0.2em] text-[#B88E2F]">
                Browse the range
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1f2937]">
                Everything you need to make a house a home
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {categories.map((item) => (
                <Link
                  key={item.title}
                  href="/shop"
                  className="group rounded-3xl overflow-hidden bg-white shadow-sm border border-black/5"
                >
                  <div className="relative h-72">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <p className="text-lg font-semibold text-[#1f2937]">{item.title}</p>
                    <span className="text-sm text-[#B88E2F]">Shop</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#B88E2F]">
                  Featured
                </p>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1f2937]">
                  Best sellers this week
                </h2>
              </div>
              <Link
                href="/shop"
                className="text-sm font-semibold text-[#B88E2F] hover:underline"
              >
                View all products
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <RoomInspiration />
          </div>
        </section>

        <section className="py-16">
          <FurnitureGallery />
        </section>

        <Testimonials />
        <Newsletter />
      </main>
    </div>
  );
}
