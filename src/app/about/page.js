import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | Funiro",
};

export default function AboutPage() {
  const values = [
    {
      title: "Craft-first",
      text: "We source responsibly and finish by hand for depth and durability.",
    },
    {
      title: "Human scale",
      text: "Pieces are designed to feel generous without overwhelming the room.",
    },
    {
      title: "Slow releases",
      text: "We release fewer collections each year, making every drop meaningful.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-[#f7f2eb]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#B88E2F]">
              Our story
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1f2937] mt-3">
              Furniture for calm and lived-in spaces.
            </h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Funiro started as a studio experiment to build modern essentials with
              the warmth of heirlooms. We partner with local artisans to bring you
              soft silhouettes, warm timbers, and fabrics that age beautifully.
            </p>
            <Link
              href="/shop"
              className="inline-flex mt-6 rounded-full bg-[#B88E2F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9a7a26] transition"
            >
              Explore the collection
            </Link>
          </div>
          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg">
            <Image src="/assets/pic-1.png" alt="Studio" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-black/5 bg-[#fdfaf6] p-6"
              >
                <h3 className="text-xl font-semibold text-[#1f2937]">
                  {value.title}
                </h3>
                <p className="text-gray-600 mt-2">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1f2937] text-white">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden">
            <Image src="/assets/pic-2.png" alt="Workshop" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              Designed in Dubai, crafted with care.
            </h2>
            <p className="text-white/70 mt-4 leading-relaxed">
              Our collections are produced in small batches to ensure a refined,
              considered finish. Each piece is inspected and tuned before delivery.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-white/50 px-6 py-3 text-sm font-semibold hover:bg-white hover:text-[#1f2937] transition"
              >
                Book a studio visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
