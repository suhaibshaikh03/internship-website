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

const boxes: {
  text: string;
  className: string;
  floatClass: string;
  delay: string;
}[] = [
  {
    text: "Tailored Learning",
    className: "top-[17%] right-[8%]",
    floatClass: "hero-float-1",
    delay: "0s",
  },
  {
    text: "Industry-Aligned Curriculum",
    className: "top-[28%] left-[5%]",
    floatClass: "hero-float-2",
    delay: "1s",
  },
  {
    text: "Expert Guidance",
    className: "top-[62%] left-[16%]",
    floatClass: "hero-float-3",
    delay: "0.5s",
  },
  {
    text: "Career Acceleration",
    className: "top-[70%] right-[8%]",
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
          50% { transform: translateY(-12px); }
        }
        @keyframes heroFloatTwo {
          0%, 100% { transform: translateY(-8px); }
          50% { transform: translateY(4px); }
        }
        @keyframes heroFloatThree {
          0%, 100% { transform: translateY(4px); }
          50% { transform: translateY(-8px); }
        }

        .hero-float-1 { animation: heroFloatOne 5s ease-in-out infinite; }
        .hero-float-2 { animation: heroFloatTwo 6s ease-in-out infinite; }
        .hero-float-3 { animation: heroFloatThree 5.5s ease-in-out infinite; }

        @media (max-width: 1024px) {
          .hero-main-section {
            flex-direction: column;
            height: auto;
            overflow: visible;
          }
          .hero-left-panel {
            width: 100% !important;
            height: auto !important;
            flex-shrink: 0;
            order: 2;
            display: flex;
            justify-content: center;
            padding: 0 16px 0;
          }
          .hero-right-panel {
            width: 100% !important;
            min-height: auto;
            order: 1;
            justify-content: center;
            padding: 56px 20px 24px;
          }
          .hero-right-content {
            width: 100%;
            max-width: 420px;
            padding: 0 !important;
            text-align: center;
          }
          .hero-heading {
            font-size: clamp(2.2rem, 9vw, 3.4rem) !important;
          }
          .hero-copy {
            margin-top: 16px !important;
            font-size: 15px !important;
          }
          .hero-cta {
            margin-top: 24px !important;
          }
          .hero-visual {
            position: relative !important;
            width: 100% !important;
            max-width: 420px;
            aspect-ratio: 0.95;
            min-height: 360px;
            overflow: hidden;
            border-radius: 20px;
            background: #f5f5f5;
          }
          .hero-box {
            padding: 10px 12px !important;
            gap: 8px !important;
          }
          .hero-box-text {
            font-size: 12px !important;
          }
          .hero-box-1 {
            top: 10% !important;
            right: 5% !important;
            left: auto !important;
          }
          .hero-box-2 {
            top: 28% !important;
            left: 4% !important;
            right: auto !important;
          }
          .hero-box-3 {
            top: 56% !important;
            left: 7% !important;
            right: auto !important;
          }
          .hero-box-4 {
            top: 74% !important;
            right: 4% !important;
            left: auto !important;
          }
        }
      `}</style>

      <div className="relative w-[52%] h-full flex-shrink-0 hero-left-panel">
        <div className="hero-visual relative w-full h-full">
          <Image
            src="/91.png"
            alt="Futuristic figure"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
          />

          {boxes.map((box, index) => (
            <div
              key={box.text}
              className={`absolute flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-white/50 shadow-md rounded-lg px-3.5 py-2.5 hero-box hero-box-${index + 1} ${box.floatClass} ${box.className}`}
              style={{ animationDelay: box.delay }}
            >
              <CheckBadge />
              <span
                className="text-[13px] text-[#111] whitespace-nowrap hero-box-text"
                style={{ fontWeight: 400 }}
              >
                {box.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 h-full flex items-center hero-right-panel">
        <div className="pl-14 pr-10 hero-right-content">
          <h1
            className="text-[#0d0d0d] leading-[1.04] text-[clamp(2.6rem,5vw,4.2rem)] hero-heading"
            style={{ fontWeight: 600 }}
          >
            Redefining the
            <br />
            Future with Web
            <br />
            3.0 education!
          </h1>

          <p className="mt-5 text-[#555] text-[15px] hero-copy" style={{ fontWeight: 400 }}>
            Get worthwhile education from Industry Experts
          </p>

          <button
            className="mt-8 px-12 py-2 bg-[#023035] text-white text-[14px] rounded-lg transition-colors duration-200 hover:bg-[#03484f] hero-cta"
            style={{ fontWeight: 500 }}
          >
            Sign up Now
          </button>
        </div>
      </div>
    </section>
  );
}
