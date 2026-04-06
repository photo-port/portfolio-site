export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />

      <div className="relative z-10 text-center max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">
          Photography
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-tight mb-6">
          Capturing Light<br />& Moments
        </h1>
        <p className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto">
          A curated collection of my photographic work — landscapes, portraits, and everything in between.
        </p>
        <a
          href="#work"
          className="inline-block border border-white/30 px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          View Work
        </a>
      </div>
    </section>
  );
}
