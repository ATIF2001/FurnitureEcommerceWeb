export const metadata = {
  title: "Contact | Funiro",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#f7f2eb]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#B88E2F]">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1f2937]">
            We’d love to help you style your space.
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl">
            Send a message or book a consultation with our design team.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-2">
          <form className="bg-[#fdfaf6] rounded-3xl p-8 shadow-sm border border-black/5">
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-gray-500">Name</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500">Project type</label>
                <select className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3">
                  <option>Styling consultation</option>
                  <option>Custom order</option>
                  <option>Delivery question</option>
                  <option>Wholesale</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-500">Message</label>
                <textarea
                  rows="5"
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3"
                  placeholder="Tell us about your space..."
                />
              </div>
            </div>
            <button className="mt-6 w-full rounded-full bg-[#B88E2F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9a7a26] transition">
              Send message
            </button>
          </form>

          <div className="space-y-6">
            <div className="rounded-3xl border border-black/5 p-6">
              <h3 className="text-xl font-semibold text-[#1f2937]">Studio</h3>
              <p className="text-gray-600 mt-2">
                Warehouse 19, Dubai Design District
              </p>
              <p className="text-gray-600">Sun-Thu, 10am - 8pm</p>
            </div>
            <div className="rounded-3xl border border-black/5 p-6">
              <h3 className="text-xl font-semibold text-[#1f2937]">Call or email</h3>
              <p className="text-gray-600 mt-2">+971 4 555 2144</p>
              <p className="text-gray-600">hello@funiro.com</p>
            </div>
            <div className="rounded-3xl border border-black/5 p-6">
              <h3 className="text-xl font-semibold text-[#1f2937]">Care guide</h3>
              <p className="text-gray-600 mt-2">
                Ask us for maintenance tips or cleaning kits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
