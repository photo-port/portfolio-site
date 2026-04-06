import Image from "next/image";

const photos = [
  { src: "https://picsum.photos/seed/p1/800/1200", alt: "Portrait in natural light", w: 800, h: 1200 },
  { src: "https://picsum.photos/seed/p2/800/600", alt: "Urban landscape at dusk", w: 800, h: 600 },
  { src: "https://picsum.photos/seed/p3/800/1000", alt: "Mountain range at sunrise", w: 800, h: 1000 },
  { src: "https://picsum.photos/seed/p4/800/800", alt: "Street photography downtown", w: 800, h: 800 },
  { src: "https://picsum.photos/seed/p5/800/1100", alt: "Misty forest trail", w: 800, h: 1100 },
  { src: "https://picsum.photos/seed/p6/800/600", alt: "Ocean waves at golden hour", w: 800, h: 600 },
  { src: "https://picsum.photos/seed/p7/800/900", alt: "Architectural detail", w: 800, h: 900 },
  { src: "https://picsum.photos/seed/p8/800/700", alt: "Desert landscape", w: 800, h: 700 },
  { src: "https://picsum.photos/seed/p9/800/1200", alt: "Portrait with dramatic lighting", w: 800, h: 1200 },
];

export default function Gallery() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-3">Portfolio</p>
        <h2 className="text-4xl font-bold tracking-tight">Selected Work</h2>
      </div>

      <div className="masonry">
        {photos.map((photo, i) => (
          <div key={i} className="masonry-item group relative overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
              <p className="p-4 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
