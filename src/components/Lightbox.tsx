"use client";

import { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";
import type { Photo } from "@/data/photos";

interface LightboxProps {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ photos, index, onClose, onPrev, onNext }: LightboxProps) {
  const photo = photos[index];
  const [visible, setVisible] = useState(false);
  const [imageKey, setImageKey] = useState(index);
  const [fadeImage, setFadeImage] = useState(true);
  const closingRef = useRef(false);

  // Fade in on mount
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  // Crossfade when index changes
  useEffect(() => {
    setFadeImage(false);
    const t = setTimeout(() => {
      setImageKey(index);
      setFadeImage(true);
    }, 150);
    return () => clearTimeout(t);
  }, [index]);

  const handleClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [handleClose, onPrev, onNext]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  const displayPhoto = photos[imageKey];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ease-out"
      style={{
        backgroundColor: visible ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0)",
      }}
      onClick={handleClose}
      role="dialog"
      aria-label="Image lightbox"
    >
      {/* Close */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-10 text-white/60 hover:text-white transition-colors duration-200"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 z-10 text-white/60 hover:text-white transition-colors duration-200"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
        aria-label="Previous image"
      >
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
        style={{
          opacity: visible && fadeImage ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.92)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <Image
          src={displayPhoto.src}
          alt={displayPhoto.alt}
          width={displayPhoto.w}
          height={displayPhoto.h}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
          priority
        />
        <p
          className="absolute bottom-0 left-0 right-0 text-center text-sm text-zinc-400 py-3 bg-gradient-to-t from-black/60 to-transparent"
          style={{ opacity: visible && fadeImage ? 1 : 0, transition: "opacity 0.2s ease 0.1s" }}
        >
          {displayPhoto.alt} — {index + 1} / {photos.length}
        </p>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 z-10 text-white/60 hover:text-white transition-colors duration-200"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
        aria-label="Next image"
      >
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
