function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-blue-400">LAPTO</span>MANIA
          </h1>
          <nav className="flex gap-4 text-sm">
            <a href="#products" className="hover:text-blue-400 transition">
              Laptops
            </a>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">
              Startup • Laptop Store
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Power up your grind with{" "}
              <span className="text-blue-400">Laptomania</span>.
            </h2>
            <p className="text-sm text-slate-300 mb-6">
              Curated laptops for gamers, creators and students who actually
              need their device to keep up. No cringe upsells, just solid tech.
            </p>
            <div className="flex gap-3 text-sm">
              <button className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition font-medium">
                Browse laptops
              </button>
              <button className="px-4 py-2 rounded-md border border-slate-600 hover:border-blue-400 hover:text-blue-300 transition">
                Get a quote
              </button>
            </div>
          </div>

          <div className="border border-slate-800 rounded-xl p-5 bg-slate-900/60">
            <div className="aspect-video rounded-lg bg-linear-to-tr from-blue-500/30 via-slate-700 to-purple-500/30 flex items-center justify-center text-sm text-slate-100">
              Laptomania • Laptop Preview
            </div>
            <div className="mt-4 text-xs text-slate-300 space-y-1">
              <p>• RTX-ready builds for gaming</p>
              <p>• Lightweight ultrabooks for school & work</p>
              <p>• Custom recommendations based on your budget</p>
            </div>
          </div>
        </section>

        <section id="products" className="space-y-4">
          <h3 className="text-xl font-semibold">Popular picks</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="border border-slate-800 rounded-lg p-4 bg-slate-900/60 text-sm">
              <h4 className="font-semibold mb-1">Laptomania Core</h4>
              <p className="text-slate-300 text-xs mb-2">
                Perfect for school and everyday use.
              </p>
              <ul className="text-[11px] text-slate-400 space-y-1 mb-3">
                <li>• i5 / Ryzen 5</li>
                <li>• 16GB RAM, 512GB SSD</li>
                <li>• 15.6&quot; Full HD</li>
              </ul>
              <p className="font-semibold text-sm">$799</p>
            </article>

            <article className="border border-slate-800 rounded-lg p-4 bg-slate-900/60 text-sm">
              <h4 className="font-semibold mb-1">Creator Pro</h4>
              <p className="text-slate-300 text-xs mb-2">
                For editing, design and content creation.
              </p>
              <ul className="text-[11px] text-slate-400 space-y-1 mb-3">
                <li>• i7 / Ryzen 7</li>
                <li>• 32GB RAM, 1TB SSD</li>
                <li>• Color-accurate display</li>
              </ul>
              <p className="font-semibold text-sm">$1,499</p>
            </article>

            <article className="border border-slate-800 rounded-lg p-4 bg-slate-900/60 text-sm">
              <h4 className="font-semibold mb-1">Laptomania X Gaming</h4>
              <p className="text-slate-300 text-xs mb-2">
                High refresh rate, high FPS, low excuses.
              </p>
              <ul className="text-[11px] text-slate-400 space-y-1 mb-3">
                <li>• RTX GPU</li>
                <li>• 16–32GB RAM</li>
                <li>• 144Hz+ display</li>
              </ul>
              <p className="font-semibold text-sm">$1,699</p>
            </article>
          </div>
        </section>

        {/* About & Contact */}
        <section
          id="about"
          className="grid gap-8 md:grid-cols-[2fr,1.3fr] items-start"
        >
          <div className="space-y-2 text-sm">
            <h3 className="text-xl font-semibold mb-1">Why Laptomania?</h3>
            <p className="text-slate-300">
              We&apos;re a small laptop-focused startup obsessed with performance
              per dollar. We test real workloads: gaming sessions, dev tools,
              editing software and school apps, not just benchmarks.
            </p>
            <p className="text-slate-300">
              Tell us what you do, your budget, and how badly your current
              laptop makes you rage, and we&apos;ll match you with the right
              setup.
            </p>
          </div>

          <div id="contact" className="border border-slate-800 rounded-lg p-4 bg-slate-900/60 text-sm">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-slate-300 text-xs mb-3">
              Drop your email and we&apos;ll send you 2–3 laptop options that
              fit your budget.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 rounded-md bg-slate-950 border border-slate-700 text-xs focus:outline-none focus:border-blue-400"
              />
              <textarea
                placeholder="Tell us your budget and what you use a laptop for..."
                rows="3"
                className="w-full px-3 py-2 rounded-md bg-slate-950 border border-slate-700 text-xs focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                className="w-full px-3 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition text-xs font-medium"
              >
                Get recommendations
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
