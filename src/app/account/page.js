export const metadata = {
  title: "Account | Funiro",
};

export default function AccountPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#f7f2eb]">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#B88E2F]">
            Account
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1f2937]">
            Welcome back
          </h1>
          <p className="text-gray-600 mt-4">
            Sign in to track orders and save your favorites.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-black/5 p-8 bg-[#fdfaf6]">
            <h2 className="text-2xl font-semibold text-[#1f2937]">Sign in</h2>
            <div className="mt-5 space-y-4">
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
                Sign in
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-black/5 p-8">
            <h2 className="text-2xl font-semibold text-[#1f2937]">Create account</h2>
            <p className="text-gray-600 mt-3">
              Save favorites, create mood boards, and sync your wish list.
            </p>
            <button className="mt-6 w-full rounded-full border border-[#B88E2F] px-6 py-3 text-sm font-semibold text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition">
              Start free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
