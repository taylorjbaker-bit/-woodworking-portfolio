'use client';

import Image from "next/image";
import Link from "next/link";
import ImageGallery from "@/app/components/ImageGallery";
import FeaturedCarousel from "@/app/components/FeaturedCarousel";
import { useState } from "react";

export default function OakBenchPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const images = [
    "/assets/projects/wormwood-table/IMG_2427.png",
    "/assets/projects/wormwood-table/IMG_2428.png",
    "/assets/projects/wormwood-table/IMG_2429.png",
    "/assets/projects/wormwood-table/IMG_2430.png",
    "/assets/projects/wormwood-table/IMG_2431.png",
  ];

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex justify-between items-center relative">
          <Link href="/" className="w-12 h-12 relative">
            <Image
              src="/assets/logo/new-logo.png"
              alt="Wood+Worm Design"
              fill
              className="object-contain"
            />
          </Link>
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="text-xl font-light" style={{ fontFamily: 'var(--font-elegant)' }}>
              Wood+Worm Design
            </span>
          </Link>
          <Link href="/#portfolio" className="text-sm tracking-widest uppercase text-gray-600 hover:text-black transition">
            Back to Work
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <h1 className="text-6xl lg:text-7xl font-light mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
          Oak Bench
        </h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
          A sculptural seating piece that celebrates the beauty of natural oak grain. Built using traditional joinery techniques, this bench is both a functional gathering space and an artistic statement.
        </p>
      </section>

      {/* Main Image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 lg:mb-24">
        <FeaturedCarousel images={images} alt="Oak Bench" onImageClick={() => setSelectedIndex(0)} />
      </section>

      {/* Gallery Lightbox */}
      {selectedIndex !== null && (
        <ImageGallery images={images} alt="Oak Bench" initialIndex={selectedIndex} onClose={() => setSelectedIndex(null)} />
      )}

      {/* Project Details */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 mb-20 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-2xl font-light mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
              About the Piece
            </h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              The Oak Bench represents a bold exploration of form and material. The dramatic grain patterns of white oak create movement and visual interest, while the sculptural profile invites conversation and contemplation.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              Every curve is intentional, every joint is visible—a celebration of the joinery techniques that have defined fine woodworking for centuries. This piece showcases both comfort and artistry.
            </p>
          </div>

          <div>
            <div className="space-y-8">
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Dimensions</h3>
                <p className="text-gray-600 font-light">Custom lengths available</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Materials</h3>
                <p className="text-gray-600 font-light">Premium white oak with visible joinery</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Technique</h3>
                <p className="text-gray-600 font-light">Traditional mortise and tenon joinery</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Finish</h3>
                <p className="text-gray-600 font-light">Natural oil finish to highlight grain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <h2 className="text-3xl font-light mb-12" style={{ fontFamily: 'var(--font-playfair)' }}>
          Gallery
        </h2>
        <ImageGallery images={images} alt="Oak Bench" />
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="text-4xl font-light mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            Interested in This Design?
          </h2>
          <p className="text-gray-600 text-lg font-light mb-12 max-w-2xl">
            We can create custom variations in different wood species and sizes. Discuss your space and preferences with us.
          </p>
          <a
            href="mailto:t.woodwormdesigns@gmail.com"
            className="inline-block px-12 py-6 border-2 border-black text-black hover:bg-black hover:text-white transition font-light tracking-widest uppercase text-sm"
          >
            Commission This Design
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex flex-col gap-12">
            <div className="flex justify-center">
              <span className="text-gray-300 text-2xl">◆</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="w-24 h-24 relative opacity-15">
                <Image
                  src="/assets/logo/new-logo.png"
                  alt="WoodWorm Design"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center text-center">
                <p className="text-sm text-gray-500 font-light">Handcrafted with intention</p>
              </div>
              <div className="flex flex-col items-end justify-center">
                <p className="text-sm text-gray-600 font-light mb-2">© 2026 WoodWorm Design</p>
                <p className="text-xs text-gray-400">Fine woodworking</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
