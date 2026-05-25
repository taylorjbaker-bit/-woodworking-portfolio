'use client';

import Image from "next/image";
import Link from "next/link";
import ImageGallery from "@/app/components/ImageGallery";
import FeaturedCarousel from "@/app/components/FeaturedCarousel";
import { useState } from "react";

export default function WormwoodTablePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const images = [
    "/assets/projects/wormwood-table/ChatGPT Image May 23, 2026, 03_12_42 PM.png",
    "/assets/projects/wormwood-table/ChatGPT Image May 23, 2026, 03_15_14 PM.png",
    "/assets/projects/wormwood-table/ChatGPT Image May 23, 2026, 03_16_22 PM.png",
    "/assets/projects/wormwood-table/ChatGPT Image May 23, 2026, 03_19_28 PM.png",
    "/assets/projects/wormwood-table/ChatGPT Image May 23, 2026, 03_22_14 PM.png",
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
          Wormwood Table
        </h1>
        <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl italic" style={{ fontFamily: 'var(--font-elegant)' }}>
          "This delicate coffee table is more than just wood and epoxy, it is a celebration of survival. Proof that there is beauty in imperfection and the scars we carry."
        </p>
      </section>

      {/* Main Image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 lg:mb-24">
        <FeaturedCarousel images={images} alt="Wormwood Table" onImageClick={() => setSelectedIndex(0)} />
      </section>

      {/* Gallery Lightbox */}
      {selectedIndex !== null && (
        <ImageGallery images={images} alt="Wormwood Table" initialIndex={selectedIndex} onClose={() => setSelectedIndex(null)} />
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
              It started with a bug.
            </p>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              A creature of little malice and even littler significance looking for somewhere warm and dry to stay. It made its home in a piece of wood, not trying to thrive or progress, but merely exist.
            </p>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              For years afterward, the wood sat untouched, weathered by time and quietly carrying the marks of everything it had endured. Beneath the surface, hidden within the grain, was a network of tunnels carved by woodworms long gone. All that remained were small traces of life preserved within the board itself.
            </p>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Rather than cut off the pieces of scarred and hollowed wood, each tunnel was painstakingly cleaned out by hand before being sealed with black epoxy preserving the damage not as a flaw, but as a permanent part of the piece's history.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              It was then finished with a Rubio Monocoat, enriching the texture and depth of the hardwood while allowing its natural character to remain untouched beneath the surface.
            </p>
          </div>

          {/* Right Column - Specifications */}
          <div>
            <div className="space-y-8">
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Dimensions</h3>
                <p className="text-gray-600 font-light">36" L, 19" - 9" W, 17.25" H</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Wood Species</h3>
                <p className="text-gray-600 font-light">Alder</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Design</h3>
                <p className="text-gray-600 font-light">Small Live Edge Coffee Table</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Restoration</h3>
                <p className="text-gray-600 font-light">Preserved with Black Epoxy</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Legs</h3>
                <p className="text-gray-600 font-light">16" Black Metal Legs</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-2">Finish</h3>
                <p className="text-gray-600 font-light">Rubio Monocoat Oil Finish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 mb-20 lg:mb-32">
        <div className="border-l-4 border-black pl-8">
          <h3 className="text-sm tracking-widest uppercase text-gray-700 mb-3">Availability</h3>
          <p className="text-2xl font-light mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Available for Purchase</p>
          <p className="text-gray-600 font-light mb-4">$325</p>
          <p className="text-sm text-gray-600 font-light">Contact us for details on purchasing this piece</p>
          <a
            href="mailto:t.woodwormdesigns@gmail.com"
            className="inline-block mt-4 px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition font-light tracking-widest uppercase text-xs"
          >
            Inquire About This Piece
          </a>
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
        <ImageGallery images={images} alt="Wormwood Table" />
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="text-4xl font-light mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            Interested in This Design?
          </h2>
          <p className="text-gray-600 text-lg font-light mb-12 max-w-2xl">
            Because each piece is uniquely handcrafted, no two pieces can ever be exactly replicated. We can, however, create a custom piece inspired by this design and thoughtfully curated to your space. Contact us for more details.
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
                src="/assets/logo/new-logo.png"
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
