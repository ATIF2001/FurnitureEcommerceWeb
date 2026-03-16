export default function RegisterPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#f7f2eb]">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#B88E2F]">
            Register
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1f2937]">
            Create your Funiro account
          </h1>
          <p className="text-gray-600 mt-4">
            Save favorites, track orders, and access exclusive drops.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-lg mx-auto px-6">
          <div className="rounded-3xl border border-black/5 p-8 bg-[#fdfaf6]">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border border-black/10 px-4 py-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-black/10 px-4 py-3"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl border border-black/10 px-4 py-3"
              />
              <button className="w-full rounded-full bg-[#B88E2F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9a7a26] transition">
                Create account
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Already have an account?{" "}
              <a href="/account" className="text-[#B88E2F] hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
