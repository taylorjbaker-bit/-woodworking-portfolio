'use client';

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface ImageGalleryProps {
  images: string[];
  alt: string;
  initialIndex?: number;
  onClose?: () => void;
}

export default function ImageGallery({ images, alt, initialIndex, onClose }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(initialIndex ?? null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === "ArrowRight") handleNext(e as any);
    if (e.key === "ArrowLeft") handlePrev(e as any);
    if (e.key === "Escape") {
      setSelectedIndex(null);
      onClose?.();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (selectedIndex === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    } else if (diff < -threshold) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const handleClose = () => {
    setSelectedIndex(null);
    onClose?.();
  };

  return (
    <>
      {/* Grid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {images.map((image, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className="aspect-square relative bg-gray-50 gallery-image overflow-hidden cursor-pointer group"
          >
            <Image
              src={image}
              alt={`${alt} detail ${idx + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition text-white text-2xl">+</span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 lg:top-6 lg:right-6 text-white hover:text-gray-300 transition text-3xl lg:text-4xl leading-none z-10"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] flex items-center justify-center select-none">
            <Image
              src={images[selectedIndex]}
              alt={`${alt} ${selectedIndex + 1}`}
              fill
              className="object-contain"
              priority
              draggable={false}
            />
          </div>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition text-3xl lg:text-4xl leading-none p-2 lg:p-4"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition text-3xl lg:text-4xl leading-none p-2 lg:p-4"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 text-white text-xs lg:text-sm tracking-widest">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
