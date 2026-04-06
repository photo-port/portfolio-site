"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { photos } from "@/data/photos";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  }, []);

  return (
    <>
      <section id="work" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-3">Portfolio</p>
          <h2 className="text-4xl font-bold tracking-tight">Selected Work</h2>
        </div>

        <div className="masonry">
          {photos.map((photo, i) => (
            <button
              key={i}
              className="masonry-item group relative overflow-hidden w-full text-left cursor-pointer"
              onClick={() => openLightbox(i)}
              aria-label={`View ${photo.alt}`}
            >
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
            </button>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}
