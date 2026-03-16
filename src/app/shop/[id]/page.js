import Image from "next/image";
import Link from "next/link";
import { products } from "../../../data/products";
import ProductDetailClient from "../../../components/ProductDetailClient";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }) {
  const rawId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const id = rawId ? decodeURIComponent(rawId).toLowerCase() : "";
  const product =
    products.find((item) => item.id.toLowerCase() === id) || products[0];

  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <div className="relative h-[420px] rounded-3xl overflow-hidden bg-[#f7f2eb]">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-28 rounded-2xl overflow-hidden bg-[#f7f2eb]">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="relative h-28 rounded-2xl overflow-hidden bg-[#f7f2eb]">
                <Image src="/assets/pic-2.png" alt="Detail" fill className="object-cover" />
              </div>
              <div className="relative h-28 rounded-2xl overflow-hidden bg-[#f7f2eb]">
                <Image src="/assets/pic-3.png" alt="Detail" fill className="object-cover" />
              </div>
            </div>
          </div>

          <ProductDetailClient product={product} />
        </div>
      </section>
    </div>
  );
}
