'use client';

import Image from "next/image";
import Link from "next/link";
import ImageGallery from "@/app/components/ImageGallery";
import FeaturedCarousel from "@/app/components/FeaturedCarousel";
import { useState } from "react";

export default function CheeseBoardPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // Image order: styled board first, then detail shots
  const images = [
    "/assets/projects/cheese-board/Final.Image-5.png",
    "/assets/projects/cheese-board/Final.Image-1.png",
    "/assets/projects/cheese-board/Final.Image-3.png",
    "/assets/projects/cheese-board/Final.Image-4.png",
  ];

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex justify-between items-center relative">
          {/* Monogram - Left */}
          <Link href="/" className="w-12 h-12 lg:w-16 lg:h-16 relative flex-shrink-0">
            <Image
              src="/assets/logo/ww-logo-monogram.png"
              alt="Wood+Worm Design"
              fill
              className="object-contain"
            />
          </Link>

          {/* Text Logo - Centered */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center">
            <div className="text-sm font-light tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
              WOOD + WORM
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-6 h-px bg-black"></div>
              <span className="text-xs tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>DESIGNS</span>
              <div className="w-6 h-px bg-black"></div>
            </div>
          </Link>

          <Link href="/#portfolio" className="ml-auto text-xs lg:text-sm tracking-widest uppercase text-gray-600 hover:text-black transition">
            Back to Work
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <h1 className="text-6xl lg:text-7xl font-light mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
          Black Walnut Cheese Boards
        </h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
          Elegantly crafted serving pieces that celebrate the rich, deep tones of black walnut. Each board is finished to enhance the wood's natural character while providing a practical, functional surface for entertaining.
        </p>
      </section>

      {/* Main Image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 lg:mb-24">
        <FeaturedCarousel images={images} alt="Black Walnut Cheese Boards" onImageClick={() => setSelectedIndex(0)} />
      </section>

      {/* Gallery Lightbox */}
      {selectedIndex !== null && (
        <ImageGallery images={images} alt="Black Walnut Cheese Boards" initialIndex={selectedIndex} onClose={() => setSelectedIndex(null)} />
      )}

      {/* Project Details */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 mb-20 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Information */}
          <div>
            <h2 className="text-2xl font-light mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
              About the Piece
            </h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Our Black Walnut Cheese Boards are crafted from carefully selected Walnut, one of the finest domestic hardwoods. The deep chocolate tones and striking grain patterns make each piece visually distinctive.
            </p>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Each cheese board has been carefully sanded up to 320 grit for an ultra-smooth finish while still preserving the natural live edge feel. Rubber feet bottom have been added for stability along with subtle finger grooves on the sides for easier carrying and serving.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              Finished with a food-safe oil, these boards are perfect for charcuterie nights, centerpieces, dinner parties, or simply adding a little craftsmanship to your kitchen.
            </p>
          </div>

          {/* Right Column - Specifications */}
          <div>
            <div className="space-y-8">
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Dimensions</h3>
                <p className="text-gray-600 font-light">Customizable sizes available</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Wood Species</h3>
                <p className="text-gray-600 font-light">Black Walnut</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Design</h3>
                <p className="text-gray-600 font-light">Serving and Cheese Boards</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Features</h3>
                <p className="text-gray-600 font-light">Hand-finished, food-safe surface</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Finish</h3>
                <p className="text-gray-600 font-light">Food-grade mineral oil and beeswax</p>
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
        <ImageGallery images={images} alt="Black Walnut Cheese Boards" />
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="text-4xl font-light mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            Interested in This Design?
          </h2>
          <p className="text-gray-600 text-lg font-light mb-12 max-w-2xl">
            Each cheese board is uniquely handcrafted. We can create custom boards in various sizes with personalized touches. Contact us to discuss your perfect serving piece.
          </p>
          <a
            href="mailto:t.woodwormdesigns@gmail.com"
            className="inline-block px-12 py-6 border-2 border-black text-black hover:bg-black hover:text-white transition font-light tracking-widest uppercase text-sm"
          >
            Commission A Design
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="w-24 h-24 relative opacity-20">
              <Image
                src="/assets/logo/ww-logo.png"
                alt="WoodWorm Design"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-end gap-6 text-sm text-gray-500">
              <p>© 2026 WoodWorm Design</p>
              <p>Handcrafted with intention</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
