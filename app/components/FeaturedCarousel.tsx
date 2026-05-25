'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface FeaturedCarouselProps {
  images: string[];
  alt: string;
  onImageClick?: () => void;
}

export default function FeaturedCarousel({ images, alt, onImageClick }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [images.length]);

  const handleNext = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetAutoplay();
  };

  const handlePrev = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetAutoplay();
  };

  const handleDotClick = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(idx);
    resetAutoplay();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      resetAutoplay();
    } else if (diff < -threshold) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      resetAutoplay();
    }
  };

  return (
    <div
      className="w-full aspect-video relative bg-gray-50 gallery-image overflow-hidden group cursor-pointer select-none"
      onClick={onImageClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Image
        src={images[currentIndex]}
        alt={alt}
        fill
        className="object-cover transition-opacity duration-1000"
        draggable={false}
      />

      {/* Image Counter */}
      <div className="absolute bottom-4 left-4 bg-black/40 text-white px-3 py-2 text-xs tracking-widest opacity-0 group-hover:opacity-100 transition">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition text-2xl lg:text-3xl leading-none p-2 z-10 opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition text-2xl lg:text-3xl leading-none p-2 z-10 opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        ›
      </button>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition pointer-events-none"></div>

      {/* Progress Dots - Now Clickable */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => handleDotClick(idx, e)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              idx === currentIndex
                ? "bg-white w-6"
                : "bg-white/40 w-2 hover:bg-white/60"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
