export default function Newsletter() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl bg-[#1f2937] text-white px-8 py-12 md:px-14 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#e4c37f] mb-2">
              Weekly drop
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              New pieces, limited runs.
            </h2>
            <p className="text-gray-300 mt-3 max-w-md">
              Join the list for early access, styling guides, and curated room sets.
            </p>
          </div>
          <form className="flex w-full max-w-md flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full px-5 py-3 text-gray-900"
            />
            <button className="rounded-full bg-[#B88E2F] px-6 py-3 text-sm font-semibold hover:bg-[#a07722] transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
