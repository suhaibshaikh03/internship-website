"use client";

import { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";

const googleSansFlex = localFont({
  src: [
    {
      path: "../../public/fonts/GoogleSansFlex_9pt-Medium.ttf",
      weight: "500",
      style: "normal",
    }
  ],
  variable: "--font-google-sans-flex",
  fallback: ["sans-serif"],
});

export default function HeroCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`${googleSansFlex.variable} w-full bg-black text-white flex flex-col items-center justify-center px-4 py-16 sm:py-20 md:py-24 lg:pb-24 select-none hero-cta-section`}
    >
      <style jsx>{`
        @media (max-width: 640px) {
          .hero-cta-section {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>
      <div className="w-full max-w-6xl flex flex-col items-center text-center">
        
        {/* =========================================================================
            SECTION HEADER TEXT - Tightened margins to align closer to silhouette base
           ========================================================================= */}
        <h2 
          className={`text-[clamp(20px,5vw,42px)] font-bold tracking-tight leading-tight transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Learn Web3 & Blockchain Skills with <span className="text-[#FFC700]">Top 1% Educators!</span>
        </h2>

        {/* =========================================================================
            SECTION SUB-HEADING DESCRIPTION
           ========================================================================= */}
        <p 
          className={`text-zinc-400 font-normal text-[clamp(13px,2.5vw,15px)] mt-4 px-0 sm:px-2 leading-relaxed transition-all duration-1000 ease-out delay-200 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get high-quality Web 3.0 education from industry experts. Refine your skills and launch your remote career.
        </p>

        {/* =========================================================================
            INTERACTIVE CTA BUTTONS COMPONENT
           ========================================================================= */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10 w-full transition-all duration-1000 ease-out delay-400 transform ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
          }`}
        >
          <button className="w-full max-w-[240px] sm:w-auto sm:max-w-none px-6 sm:px-8 py-3 bg-[#40AFFF] text-black font-semibold text-[clamp(13px,3vw,15px)] rounded-xl hover:bg-[#359ee6] transition-all duration-200 shadow-lg shadow-[#40AFFF]/10">
            Sign up Now
          </button>

          <button className="w-full max-w-[240px] sm:w-auto sm:max-w-none px-6 sm:px-8 py-3 bg-transparent text-white font-semibold text-[clamp(13px,3vw,15px)] rounded-xl border border-zinc-700 hover:bg-zinc-900 transition-all duration-200">
            Find Programs
          </button>
        </div>

        {/* =========================================================================
            FOOTER BRAND DISCLOSURE BADGE
           ========================================================================= */}
        <div 
          className={`mt-16 sm:mt-20 md:mt-24 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <p 
            className="text-white font-medium text-xs sm:text-sm md:text-[15px] tracking-normal normal-case"
            style={{ 
              fontFamily: "var(--font-google-sans-flex), sans-serif",
              lineHeight: "1.6" 
            }}
          >
            Trusted by the tech giants
          </p>
        </div>

      </div>
    </section>
  );
}