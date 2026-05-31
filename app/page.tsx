import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      id: "wormwood-table",
      name: "Wormwood Table",
      category: "Dining",
      description: "A delicate coffee table restored with black epoxy and timeless craftsmanship",
      image: "/assets/projects/wormwood-table/ChatGPT Image May 23, 2026, 03_12_42 PM.png",
    },
    {
      id: "cheese-board",
      name: "Black Walnut Cheese Boards",
      category: "Serveware",
      description: "Elegant serving pieces crafted from rich black walnut with hand-finished details",
      image: "/assets/projects/cheese-board/Final.Image-5.png",
    },
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

          {/* Navigation - Right */}
          <div className="flex gap-4 lg:gap-12 text-xs lg:text-sm tracking-widest uppercase ml-auto">
            <a href="#portfolio" className="text-gray-700 hover:text-black transition">
              Work
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black transition">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section - Split Layout */}
      <section className="w-full flex flex-col lg:flex-row lg:min-h-screen lg:items-stretch">
        {/* Mobile Image - Shows first on mobile */}
        <div className="lg:hidden w-full h-64 relative">
          <Image
            src="/assets/projects/wormwood-table/ChatGPT Image May 23, 2026, 03_15_14 PM.png"
            alt="WoodWorm Design Showcase"
            fill
            className="object-cover"
          />
          {/* Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50"></div>
        </div>

        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 bg-gray-50 px-6 lg:px-12 py-24 lg:py-32 flex flex-col justify-center">
          <h1 className="text-5xl lg:text-6xl font-light mb-6 text-center" style={{ fontFamily: 'var(--font-playfair)' }}>
            The Art of Preservation
          </h1>

          {/* Ornamental Divider - Tree Branch */}
          <div className="mb-10 flex justify-center">
            <Image
              src="/assets/decorative/tree-branch.png"
              alt="Decorative tree branch"
              width={150}
              height={50}
            />
          </div>

          <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
            Long before it becomes furniture, wood has already lived a life of its own.
          </p>

          <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
            Each grain carries the marks of weather and time. Every knot tells a story of growth long before the hours of sanding, shaping, and finishing begin.
          </p>

          <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
            Just like every one of us, wood holds a history.
          </p>

          <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
            At <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-elegant)' }}>Wood+Worm Design</span>, we believe furniture should be more than functional. Every piece we create is thoughtfully crafted to honor the natural beauty, character, and individuality that cannot be replicated through mass production.
          </p>

          <p className="text-lg text-gray-700 font-light leading-relaxed mb-12">
            Preserving the story within the wood, so it can become part of yours.
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="#portfolio"
              className="inline-block px-10 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition font-light tracking-widest uppercase text-sm"
            >
              Explore Our Work
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block w-1/2 relative">
          <Image
            src="/assets/projects/wormwood-table/ChatGPT Image May 23, 2026, 03_15_14 PM.png"
            alt="WoodWorm Design Showcase"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-50"></div>
        </div>
      </section>

      {/* Portfolio Section */}
      <div style={{ backgroundColor: '#f5ede0' }}>
        <section id="portfolio" className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="mb-20">
          <h2 className="text-5xl font-light mb-4 text-center" style={{ fontFamily: 'var(--font-playfair)' }}>
            Curated Collections
          </h2>
          <div className="mb-12 flex justify-center">
            <Image
              src="/assets/decorative/tree-branch.png"
              alt="Decorative tree branch"
              width={150}
              height={50}
            />
          </div>
          <p className="text-gray-600 font-light text-lg max-w-2xl">
            Handcrafted furniture that values artistry over mass production and character over perfection.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group"
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-square gallery-image mb-6">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition duration-500"></div>
              </div>
              <div className="space-y-3">
                <span className="inline-block text-xs tracking-widest uppercase text-gray-500">
                  {project.category}
                </span>
                <h3 className="text-2xl font-light group-hover:text-gray-600 transition" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {project.name}
                </h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-3 flex items-center gap-2 text-xs tracking-widest uppercase text-gray-500 group-hover:text-black transition">
                  View Project
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
          <div className="flex items-center justify-center aspect-square" style={{ backgroundColor: '#faf5ed' }}>
            <p className="text-2xl font-light text-center text-gray-400" style={{ fontFamily: 'var(--font-playfair)' }}>
              More Collections<br />Coming Soon
            </p>
          </div>
        </div>

        </section>
      </div>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-light mb-8 text-center" style={{ fontFamily: 'var(--font-playfair)' }}>
              Let's Create
            </h2>
            <div className="mb-8 flex justify-center">
              <Image
                src="/assets/decorative/tree-branch.png"
                alt="Decorative tree branch"
                width={150}
                height={50}
              />
            </div>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Interested in commissioning a bespoke piece? We'd love to discuss your vision and create something extraordinary together.
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <a
              href="mailto:t.woodwormdesigns@gmail.com"
              className="inline-block px-12 py-6 border-2 border-black text-black hover:bg-black hover:text-white transition font-light tracking-widest uppercase text-sm w-fit"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Artful Elements */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex flex-col gap-12">
            {/* Footer Content */}
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
                <p className="text-sm text-gray-500 font-light">
                  Handcrafted with intention and precision
                </p>
              </div>
              <div className="flex flex-col items-end justify-center">
                <p className="text-sm text-gray-600 font-light mb-2">© 2026 WoodWorm Design</p>
                <p className="text-xs text-gray-400">Fine woodworking since 2026</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
