"use client";

import Image from "next/image";

type Brand = {
  id: number;
  src: string;
  alt: string;
  bg: string;
  width: number;
  height: number;
};

const brands: Brand[] = [
  { id: 1, src: "/11.svg", alt: "Ministry of IT", bg: "bg-[#121212]", width: 118, height: 28 },
  { id: 2, src: "/12.svg", alt: "Google", bg: "bg-[#1C1C1C]", width: 78, height: 18 },
  { id: 3, src: "/aws-vector.webp", alt: "AWS", bg: "bg-[#121212]", width: 52, height: 26 },
  { id: 4, src: "/14.png", alt: "Ignite", bg: "bg-[#1C1C1C]", width: 72, height: 22 },
  { id: 5, src: "/15.png", alt: "Microsoft", bg: "bg-[#121212]", width: 78, height: 16 },
  { id: 6, src: "/16.png", alt: "The Garage", bg: "bg-[#1C1C1C]", width: 70, height: 28 },
];

function BrandTile({
  brand,
  className,
}: {
  brand: Brand;
  className?: string;
}) {
  return (
    <div
      className={`${brand.bg} flex items-center justify-center overflow-hidden border-zinc-900 transition-colors duration-300 hover:brightness-110 ${className ?? ""}`}
    >
      <div className="flex h-full w-full items-center justify-center px-4">
        <Image
          src={brand.src}
          alt={brand.alt}
          width={brand.width}
          height={brand.height}
          sizes="(max-width: 767px) 90px, (max-width: 1023px) 130px, 180px"
          className="block h-auto max-h-[32px] w-auto max-w-[118px] object-contain md:max-h-[40px] md:max-w-[150px] xl:max-h-[48px] xl:max-w-[180px]"
        />
      </div>
    </div>
  );
}

export default function BrandGrid() {
  return (
    <section className="w-full select-none overflow-hidden bg-black pb-16">
      <div className="mx-auto block w-full md:hidden">
        <div className="grid grid-cols-2 grid-rows-3 border-t border-zinc-900/60">
          {brands.map((brand, index) => {
            const isRowEnd = (index + 1) % 2 === 0;

            return (
              <BrandTile
                key={brand.id}
                brand={brand}
                className={`h-[92px] border-b ${isRowEnd ? "border-r-0" : "border-r"}`}
              />
            );
          })}
        </div>
      </div>

      <div className="mx-auto hidden w-full md:block">
        <div className="grid grid-cols-3 border-t border-zinc-900/60">
          {brands.map((brand, index) => {
            const isColEnd = (index + 1) % 3 === 0;

            return (
              <BrandTile
                key={brand.id}
                brand={brand}
                className={`min-h-[150px] border-b p-6 lg:min-h-[175px] ${isColEnd ? "border-r-0" : "border-r"}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
