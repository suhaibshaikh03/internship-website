"use client";

import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const googleSansFlex = localFont({
  src: [
    {
      path: "../../public/Google_Sans_Flex/static/GoogleSansFlex_9pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Google_Sans_Flex/static/GoogleSansFlex_72pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-gsf-hero",
});

const boxes: { text: string; style: React.CSSProperties; floatClass: string; delay: string }[] = [
  {
    text: "Tailored Learning",
    style: { top: "23%", left: "64%" },
    floatClass: "hero-float-1",
    delay: "0s",
  },
  {
    text: "Industry-Aligned Curriculum",
    style: { top: "36%", left: "4%" },
    floatClass: "hero-float-2",
    delay: "1s",
  },
  {
    text: "Expert Guidance",
    style: { top: "67%", left: "15%" },
    floatClass: "hero-float-3",
    delay: "0.5s",
  },
  {
    text: "Career Acceleration",
    style: { top: "77%", left: "64%" },
    floatClass: "hero-float-1",
    delay: "1.5s",
  },
];

function CheckBadge() {
  return (
    <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[#111] flex items-center justify-center">
      <svg width="11" height="8" viewBox="0 0 11 8" fill="none" aria-hidden="true">
        <path
          d="M1 3.8L4 6.8L10 1"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function HeroMain() {
  return (
    <section
      className={`${googleSansFlex.variable} w-full h-screen bg-white flex flex-row overflow-hidden hero-main-section`}
      style={{ fontFamily: "var(--font-gsf-hero), sans-serif" }}
    >
      <style jsx global>{`
        @keyframes heroFloatOne {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes heroFloatTwo {
          0%, 100% { transform: translateY(-8px); }
          50%       { transform: translateY(4px); }
        }
        @keyframes heroFloatThree {
          0%, 100% { transform: translateY(4px); }
          50%       { transform: translateY(-8px); }
        }

        .hero-float-1 { animation: heroFloatOne   5s ease-in-out infinite; }
        .hero-float-2 { animation: heroFloatTwo   6s ease-in-out infinite; }
        .hero-float-3 { animation: heroFloatThree 5.5s ease-in-out infinite; }

        @media (max-width: 768px) {
          .hero-main-section {
            flex-direction: column;
            height: auto;
            overflow-y: auto;
          }
          .hero-left-panel {
            width: 100% !important;
            height: 300px !important;
            flex-shrink: 0;
            margin-bottom: 24px;
          }
          .hero-right-panel {
            min-height: 300px;
            padding: 0 16px;
          }
        }
      `}</style>

      {/* ── Left panel: creature image + floating label boxes ── */}
      <div className="relative w-[52%] h-full flex-shrink-0 hero-left-panel">
        <Image
          src="/91.png"
          alt="Futuristic figure"
          fill
          className="object-cover object-center"
          priority
          sizes="52vw"
        />

        {boxes.map((box) => (
          <div
            key={box.text}
            className={`absolute flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-white/50 shadow-md rounded-lg px-3.5 py-2.5 hero-box ${box.floatClass}`}
            style={{ ...box.style, animationDelay: box.delay }}
          >
            <CheckBadge />
            <span
              className="text-[13px] text-[#111] whitespace-nowrap"
              style={{ fontWeight: 400 }}
            >
              {box.text}
            </span>
          </div>
        ))}
      </div>

      {/* ── Right panel: heading, subtitle, CTA ── */}
      <div className="flex-1 h-full flex items-center hero-right-panel">
        <div className="pl-14 pr-10">
          <h1
            className="text-[#0d0d0d] leading-[1.04] text-[clamp(2.6rem,5vw,4.2rem)]"
            style={{ fontWeight: 600 }}
          >
            Redefining the
            <br />
            Future with Web
            <br />
            3.0 education!
          </h1>

          <p
            className="mt-5 text-[#555] text-[15px]"
            style={{ fontWeight: 400 }}
          >
            Get worthwhile education from Industry Experts
          </p>

          <button
            className="mt-8 px-12 py-2 bg-[#023035] text-white text-[14px] rounded-lg transition-colors duration-200 hover:bg-[#03484f]"
            style={{ fontWeight: 500 }}
          >
            Sign up Now
          </button>
        </div>
      </div>
    </section>
  );
}
