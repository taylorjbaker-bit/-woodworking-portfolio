'use client';

import Image from "next/image";
import Link from "next/link";
import ImageGallery from "@/app/components/ImageGallery";
import FeaturedCarousel from "@/app/components/FeaturedCarousel";
import { useState } from "react";

export default function MapleCabinetPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const images = [
    "/assets/projects/wormwood-table/IMG_2433.png",
    "/assets/projects/wormwood-table/IMG_2434.png",
    "/assets/projects/wormwood-table/IMG_2435.png",
    "/assets/projects/wormwood-table/IMG_2436.png",
    "/assets/projects/wormwood-table/IMG_2437.png",
  ];

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex justify-between items-center relative">
          <Link href="/" className="w-12 h-12 relative">
            <Image
              src="/assets/logo/ww-logo.png"
              alt="Wood+Worm Design"
              fill
              className="object-contain"
            />
          </Link>
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
            <span className="text-xl font-light" style={{ fontFamily: 'var(--font-elegant)' }}>
              Wood+Worm Design
            </span>
          </Link>
          <Link href="/#portfolio" className="text-xs lg:text-sm tracking-widest uppercase text-gray-600 hover:text-black transition">
            Back to Work
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <h1 className="text-6xl lg:text-7xl font-light mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
          Maple Cabinet
        </h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
          An elegant storage solution in gleaming hard maple with brass hardware accents. This cabinet brings timeless refinement to any room while providing substantial storage capacity.
        </p>
      </section>

      {/* Main Image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 lg:mb-24">
        <FeaturedCarousel images={images} alt="Maple Cabinet" onImageClick={() => setSelectedIndex(0)} />
      </section>

      {/* Gallery Lightbox */}
      {selectedIndex !== null && (
        <ImageGallery images={images} alt="Maple Cabinet" initialIndex={selectedIndex} onClose={() => setSelectedIndex(null)} />
      )}

      {/* Project Details */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 mb-20 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-2xl font-light mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
              About the Piece
            </h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              The Maple Cabinet exemplifies refined storage design. The warm, honey-toned maple is paired with carefully selected brass hardware that provides both functional beauty and visual interest.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              With adjustable shelving and deep drawers, this cabinet is as practical as it is beautiful. Perfect for display, storage, or as a striking focal point in any interior.
            </p>
          </div>

          <div>
            <div className="space-y-8">
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Dimensions</h3>
                <p className="text-gray-600 font-light">Customizable sizing available</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Materials</h3>
                <p className="text-gray-600 font-light">Hard maple with brass hardware</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Features</h3>
                <p className="text-gray-600 font-light">Adjustable shelving, deep drawers, soft-close hinges</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Finish</h3>
                <p className="text-gray-600 font-light">Hand-applied lacquer with protective topcoat</p>
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
        <ImageGallery images={images} alt="Maple Cabinet" />
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="text-4xl font-light mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            Interested in This Design?
          </h2>
          <p className="text-gray-600 text-lg font-light mb-12 max-w-2xl">
            We create custom cabinets tailored to your space and needs. Let's discuss wood species, hardware options, and interior configuration.
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
                  src="/assets/logo/ww-logo.png"
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
