import Link from "next/link";
import Image from "next/image";
import ProductCard from "../../components/products";
import { products } from "../../data/products";

export const metadata = {
  title: "Shop | Funiro",
};

export default function ShopPage() {
  const filters = ["All", "Living", "Dining", "Bedroom", "Office", "Decor"];

  return (
    <div className="bg-white">
      <section className="bg-[#f7f2eb]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#B88E2F]">
              Shop
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1f2937]">
              Shop the studio edit
            </h1>
            <p className="text-gray-600 mt-4 max-w-xl">
              Soft silhouettes, warm materials, and calm palettes. Built for real homes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className="rounded-full border border-[#B88E2F] px-4 py-2 text-sm font-semibold text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/assets/pic-2.png"
              alt="Shop collection"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-gray-500">
              Showing {products.length} products
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Sort by</span>
              <button className="rounded-full border border-black/10 px-4 py-2 text-sm">
                Most popular
              </button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center">
            <Link
              href="/"
              className="text-sm font-semibold text-[#B88E2F] hover:underline"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
