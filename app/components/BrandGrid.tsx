"use client";

import Image from "next/image";

export default function BrandGrid() {
  const brands = [
    // Row 1
    { id: 1, src: "/11.svg", alt: "Ministry of IT", bg: "bg-[#121212]" },
    { id: 2, src: "/12.svg", alt: "Google", bg: "bg-[#1C1C1C]" },
    { id: 3, src: "/aws-vector.webp", alt: "AWS", bg: "bg-[#121212]" }, // Swapped to .png
    // Row 2
    { id: 4, src: "/14.png", alt: "Ignite", bg: "bg-[#1C1C1C]" },
    { id: 5, src: "/15.png", alt: "Microsoft", bg: "bg-[#121212]" },
    { id: 6, src: "/16.png", alt: "The Garage", bg: "bg-[#1C1C1C]" },
  ];

  return (
    <section className="w-full bg-black select-none pb-16 overflow-hidden">
      {/* Removed max-w-7xl to let the grid fully break out and cover 100% horizontal viewport width.
        Internal grid borders separate the items smoothly without cropping edge-to-edge continuity.
      */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-zinc-900/60">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className={`${brand.bg} aspect-[16/6.5] min-h-[120px] sm:min-h-[140px] md:min-h-[175px] flex items-center justify-center p-6 sm:p-8 overflow-hidden transition-colors duration-300 hover:brightness-110 border-b border-zinc-900 sm:border-r`}
            style={{
              borderRightColor: brand.id % 3 === 0 ? 'transparent' : undefined
            }}
          >
            <div className="relative overflow-hidden w-full h-full max-w-[clamp(80px,18vw,195px)] max-h-[clamp(30px,6vw,60px)] flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity duration-200">
              <Image
                src={brand.src}
                alt={brand.alt}
                fill
                sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 195px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}