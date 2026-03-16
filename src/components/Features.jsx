import { Truck, ShieldCheck, Leaf, Sparkles } from "lucide-react";

const features = [
  {
    title: "Free Delivery",
    description: "Across the UAE on orders above $200.",
    icon: Truck,
  },
  {
    title: "Crafted Quality",
    description: "Sustainably sourced woods and fabrics.",
    icon: Leaf,
  },
  {
    title: "Secure Payments",
    description: "Multiple options with buyer protection.",
    icon: ShieldCheck,
  },
  {
    title: "Style Assist",
    description: "Talk to our designers for free.",
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section className="bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, description, icon: Icon }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-2xl bg-[#f4efe7] flex items-center justify-center text-[#B88E2F]">
              <Icon size={20} />
            </div>
            <div>
              <p className="font-semibold text-[#1f2937]">{title}</p>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
