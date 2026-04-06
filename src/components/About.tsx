import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src="https://picsum.photos/seed/about/800/1067"
            alt="Photographer portrait"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-3">About</p>
          <h2 className="text-4xl font-bold tracking-tight mb-6">The Photographer</h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              I&apos;m a photographer drawn to the interplay of light and shadow.
              My work spans landscapes, portraits, and street photography — always
              searching for the quiet, honest moments that tell a story.
            </p>
            <p>
              With over a decade behind the lens, I&apos;ve developed a style that
              leans into natural light and muted tones. Every frame is an attempt
              to preserve something fleeting.
            </p>
            <p>
              When I&apos;m not shooting, you&apos;ll find me exploring new cities,
              hiking remote trails, or editing with a cup of coffee in hand.
            </p>
          </div>

          <div className="mt-8 flex gap-12 text-center">
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm text-zinc-500 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm text-zinc-500 mt-1">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm text-zinc-500 mt-1">Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
