const testimonials = [
  {
    name: "Aisha Karim",
    role: "Interior stylist",
    quote:
      "The Aurora sofa arrived in three days and transformed my studio. The fabric is plush without feeling delicate.",
  },
  {
    name: "Leo Fernandez",
    role: "Architect",
    quote:
      "Every piece feels considered. The oak table is sturdy, minimal, and surprisingly easy to style.",
  },
  {
    name: "Mina Patel",
    role: "Home owner",
    quote:
      "Funiro’s design consult gave me confidence. The room looks curated, not staged.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#f7f3ee]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#B88E2F]">
              Loved by homes
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1f2937] font-bold">
              Stories from real spaces
            </h2>
          </div>
          <button className="hidden sm:inline-flex border border-[#B88E2F] text-[#B88E2F] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#B88E2F] hover:text-white transition">
            Read all
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-black/5"
            >
              <p className="text-gray-600 leading-relaxed mb-6">"{item.quote}"</p>
              <div className="border-t border-black/5 pt-4">
                <p className="font-semibold text-[#1f2937]">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
