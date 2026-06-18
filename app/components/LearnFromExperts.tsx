"use client";

import { useState } from "react";
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
  variable: "--font-google-sans-flex-experts",
});

type Expert = {
  id: number;
  image: string;
  name: string;
  role: string;
  alt: string;
  imageClassName?: string;
};

const experts: Expert[] = [
  {
    id: 71,
    image: "/71.png",
    name: "Talal Ahmad",
    role: "Chief Executive Officer",
    alt: "Talal Ahmad holding a microphone",
    imageClassName: "object-[50%_18%]",
  },
  {
    id: 72,
    image: "/72.png",
    name: "Talal Ahmad",
    role: "Chief Executive Officer",
    alt: "Expert portrait",
  },
  {
    id: 73,
    image: "/73.png",
    name: "Talal Ahmad",
    role: "Chief Executive Officer",
    alt: "Expert portrait",
  },
];

const logos = [
  { src: "/microsoft.png", alt: "Microsoft" },
  { src: "/google.png", alt: "Google" },
  { src: "/garage.png", alt: "Garage" },
];

function ExpertLogos() {
  return (
    <div className="relative h-[58px] w-[150px] learn-expert-logos">
      <Image
        src={logos[0].src}
        alt={logos[0].alt}
        width={83}
        height={18}
        className="absolute bottom-0 left-8 h-[18px] w-auto object-contain"
      />
      <Image
        src={logos[1].src}
        alt={logos[1].alt}
        width={64}
        height={20}
        className="absolute right-0 top-[9px] h-5 w-auto object-contain"
      />
      <Image
        src={logos[2].src}
        alt={logos[2].alt}
        width={51}
        height={28}
        className="absolute left-0 top-0 h-7 w-auto object-contain"
      />
    </div>
  );
}

function ExpertCard({
  expert,
  isActive,
  onHover,
}: {
  expert: Expert;
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <article
      onMouseEnter={onHover}
      onFocus={onHover}
      tabIndex={0}
      className={`relative flex-shrink-0 overflow-hidden outline-none ring-1 ring-white/5 transition-[width,filter,opacity] duration-500 ease-out ${
        isActive
          ? "h-[340px] sm:h-[420px] lg:h-[520px] w-[56vw] sm:w-[340px] lg:w-[450px] rounded-[14px] opacity-100"
          : "h-[340px] sm:h-[420px] lg:h-[520px] w-[26vw] sm:w-[160px] lg:w-[220px] rounded-[10px] opacity-100"
      }`}
    >
      <div className="absolute -inset-5">
        <Image
          src={expert.image}
          alt={expert.alt}
          fill
          sizes={isActive ? "500px" : "250px"}
          className={`object-cover ${expert.imageClassName ?? "object-center"}`}
          quality={100}
          priority={expert.id === 71}
          unoptimized
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/12 to-transparent" />

      <div
        className={`absolute inset-x-0 bottom-0 p-8 text-white transition-opacity duration-300 learn-expert-overlay ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[280px] learn-expert-copy">
          <h3 className="text-[34px] font-semibold leading-none tracking-[-0.02em] learn-expert-name">
            {expert.name}
          </h3>
          <p className="mt-4 text-[16px] font-medium leading-none text-white/90 learn-expert-role">
            {expert.role}
          </p>
        </div>
        <div className="absolute bottom-[44px] right-[10px] learn-expert-logo-wrap">
          <ExpertLogos />
        </div>
      </div>
    </article>
  );
}

export default function LearnFromExperts() {
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredLocal, setHoveredLocal] = useState(0);

  const visibleExperts = [0, 1, 2].map((i) => experts[(startIndex + i) % experts.length]);

  const goNext = () => {
    setStartIndex((prev) => (prev + 1) % experts.length);
    setHoveredLocal(0);
  };

  const goPrev = () => {
    setStartIndex((prev) => (prev - 1 + experts.length) % experts.length);
    setHoveredLocal(0);
  };

  return (
    <section className={`${googleSansFlex.variable} w-full bg-black px-4 py-20 sm:px-8 lg:px-[52px]`}>
      <style jsx global>{`
        @media (max-width: 1024px) {
          .learn-experts-shell {
            gap: 28px !important;
          }
          .learn-experts-sidebar {
            justify-content: flex-start !important;
            gap: 18px !important;
          }
          .learn-experts-heading {
            margin-bottom: 0 !important;
          }
          .learn-experts-cta {
            width: 100% !important;
            max-width: 100% !important;
          }
          .learn-experts-nav-desktop {
            display: none !important;
          }
          .learn-experts-nav-mobile {
            display: flex !important;
            justify-content: center !important;
            margin-top: 14px !important;
          }
          .learn-experts-cards {
            margin-left: 0 !important;
            align-items: flex-start !important;
            padding-bottom: 4px !important;
          }
          .learn-expert-overlay {
            padding: 16px !important;
          }
          .learn-expert-copy {
            max-width: 145px !important;
          }
          .learn-expert-name {
            font-size: 18px !important;
            line-height: 0.95 !important;
          }
          .learn-expert-role {
            margin-top: 8px !important;
            font-size: 10px !important;
            line-height: 1.15 !important;
          }
          .learn-expert-logo-wrap {
            right: 8px !important;
            bottom: 18px !important;
          }
          .learn-expert-logos {
            width: 92px !important;
            height: 38px !important;
          }
          .learn-expert-logos img:nth-of-type(1) {
            left: 18px !important;
            height: 12px !important;
          }
          .learn-expert-logos img:nth-of-type(2) {
            top: 6px !important;
            height: 13px !important;
          }
          .learn-expert-logos img:nth-of-type(3) {
            height: 18px !important;
          }
        }
      `}</style>

      <div
        className="mx-auto flex flex-col lg:flex-row min-h-auto lg:min-h-[628px] max-w-full lg:max-w-[1248px] overflow-hidden rounded-[28px] bg-[#082F43] px-6 py-11 sm:px-8 lg:px-14 gap-8 lg:gap-0 learn-experts-shell"
        style={{ fontFamily: "var(--font-google-sans-flex-experts), sans-serif" }}
      >
        <div className="relative z-30 flex w-full lg:w-[280px] flex-shrink-0 flex-col justify-between text-white learn-experts-sidebar">
          <h2 className="text-[clamp(32px,6vw,58px)] font-semibold leading-[0.95] tracking-[-0.04em] learn-experts-heading">
            Learn
            <br />
            from the
            <br />
            Top 1%
          </h2>

          <div className="flex flex-col gap-5">
            <button
              className="flex h-14 w-full lg:w-80 items-center justify-start gap-3 rounded-[8px] border border-white/10 bg-white/10 px-5 text-left text-[14px] font-medium leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-colors hover:bg-white/15 learn-experts-cta"
              style={{ fontVariationSettings: '"wght" 500, "opsz" 14' }}
            >
              <span>Learn with vetted experts and devs!</span>
              <Image
                src="/yellowarrow.png"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] flex-shrink-0"
              />
            </button>

            <div className="flex gap-3 learn-experts-nav-desktop">
              <button
                onClick={goPrev}
                aria-label="Previous"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10 3L5 8L10 13"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={goNext}
                aria-label="Next"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex min-w-0 flex-1 items-center gap-2 overflow-x-auto lg:ml-6 lg:overflow-hidden learn-experts-cards">
          {visibleExperts.map((expert, i) => (
            <ExpertCard
              key={`${startIndex}-${i}`}
              expert={expert}
              isActive={hoveredLocal === i}
              onHover={() => setHoveredLocal(i)}
            />
          ))}
        </div>

        <div className="hidden gap-3 learn-experts-nav-mobile">
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 3L5 8L10 13"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={goNext}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 3L11 8L6 13"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
