'use client';

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  alt: string;
  initialIndex?: number;
  onClose?: () => void;
}

export default function ImageGallery({ images, alt, initialIndex, onClose }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(initialIndex ?? null);

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
          onClick={handleClose}
          onKeyDown={handleKeyDown}
          role="dialog"
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition text-4xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] flex items-center justify-center">
            <Image
              src={images[selectedIndex]}
              alt={`${alt} ${selectedIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition text-4xl leading-none"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition text-4xl leading-none"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm tracking-widest">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
