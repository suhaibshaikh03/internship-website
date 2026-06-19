import Image from "next/image";
import localFont from "next/font/local";

const googleSansFlex = localFont({
  src: [
    {
      path: "../../public/Google_Sans_Flex/GoogleSansFlex-VariableFont_GRAD,ROND,opsz,slnt,wdth,wght.ttf",
      weight: "100 1000",
      style: "normal",
    },
  ],
  variable: "--font-google-sans-flex-grid",
});

type GridTile =
  | {
      type: "stat";
      value: string;
      label: string;
      bgColor: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
    };

const tiles: GridTile[] = [
  { type: "stat", value: "12,000+", label: "Students\nworldwide", bgColor: "bg-[#59B6EA]" },
  { type: "image", src: "/57.png", alt: "Students sitting together" },
  { type: "image", src: "/58.png", alt: "Student using a phone" },
  { type: "stat", value: "$3M+", label: "Generated\nby Students", bgColor: "bg-[#F3B82E]" },
  { type: "stat", value: "45+", label: "Industry\nExperts", bgColor: "bg-[#42CE82]" },
  { type: "image", src: "/59.png", alt: "Industry expert speaking at an event" },
  { type: "image", src: "/60.png", alt: "Student founder using a laptop" },
  { type: "stat", value: "150+", label: "Student-led\nStartups", bgColor: "bg-[#EF7B5E]" },
];

function StatTile({ value, label, bgColor }: Extract<GridTile, { type: "stat" }>) {
  return (
    <div
      className={`relative overflow-hidden ${bgColor} text-white`}
      style={{
        height: "100%",
        width: "100%",
        minHeight: 0,
        fontFamily: "var(--font-google-sans-flex-grid), var(--font-google-sans-flex), sans-serif",
        fontVariationSettings: '"wght" 500, "opsz" 36',
      }}
    >
      {/* Equal padding on every side keeps the stat block centered in the tile. */}
      <div
        className="absolute inset-[-1px] flex flex-col items-center justify-center p-[10%] text-center"
      >
        <p className="text-[clamp(16px,5.6vw,78px)] font-medium leading-[0.88] tracking-normal">
          {value}
        </p>
        <p className="mt-2 whitespace-pre-line text-[clamp(9px,2.35vw,34px)] font-medium leading-[1.08] tracking-normal">
          {label}
        </p>
      </div>
    </div>
  );
}

function ImageTile({ src, alt }: Extract<GridTile, { type: "image" }>) {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) calc((100vw - 104px) / 2), calc((100vw - 32px) / 2)"
        className="scale-[1.02] object-cover"
        quality={100}
      />
    </div>
  );
}

export default function IndustryStatsGrid() {
  return (
    <section className={`${googleSansFlex.variable} w-full bg-black pb-0 pt-16 sm:pt-20 lg:pt-24`}>
      <div className="mx-auto w-full px-0 sm:px-8 lg:px-[52px]">
        <div
          className="grid w-full grid-cols-2 grid-rows-4 gap-0 overflow-hidden [&>*]:h-full [&>*]:w-full"
          style={{ aspectRatio: "826/1076" }}
        >
          {tiles.map((tile, index) =>
            tile.type === "stat" ? (
              <StatTile key={`${tile.value}-${index}`} {...tile} />
            ) : (
              <ImageTile key={`${tile.src}-${index}`} {...tile} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
