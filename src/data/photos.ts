export interface Photo {
  src: string;
  alt: string;
  w: number;
  h: number;
}

export const photos: Photo[] = [
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
