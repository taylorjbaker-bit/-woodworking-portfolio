'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

interface FeaturedCarouselProps {
  images: string[];
  alt: string;
  onImageClick?: () => void;
}

export default function FeaturedCarousel({ images, alt, onImageClick }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full aspect-video relative bg-gray-50 gallery-image overflow-hidden group cursor-pointer" onClick={onImageClick}>
      <Image
        src={images[currentIndex]}
        alt={alt}
        fill
        className="object-cover transition-opacity duration-1000"
      />

      {/* Image Counter */}
      <div className="absolute bottom-4 left-4 bg-black/40 text-white px-3 py-2 text-xs tracking-widest opacity-0 group-hover:opacity-100 transition">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition pointer-events-none"></div>

      {/* Progress Dots */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex
                ? "bg-white w-6"
                : "bg-white/40 w-2"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
