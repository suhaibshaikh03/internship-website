"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

export default function HeroConstellation() {
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
    <main 
      ref={sectionRef}
      className={`${googleSansFlex.variable} w-full bg-black text-white flex flex-col items-center justify-center relative overflow-hidden select-none px-4 pt-20 pb-4`}
    >
      <style jsx global>{`
        @keyframes slowFloatOne {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes slowFloatTwo {
          0%, 100% { transform: translateY(-8px); }
          50% { transform: translateY(4px); }
        }
        @keyframes slowFloatThree {
          0%, 100% { transform: translateY(4px); }
          50% { transform: translateY(-8px); }
        }

        .float-anim-1 { animation: slowFloatOne 5s ease-in-out infinite; }
        .float-anim-2 { animation: slowFloatTwo 6s ease-in-out infinite; }
        .float-anim-3 { animation: slowFloatThree 5.5s ease-in-out infinite; }
      `}</style>

      {/* Main Grid Graphic Frame Layout - Fixed max-h to prevent massive empty vertical space */}
      <div className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-[16/9] max-h-[680px] flex items-center justify-center">
        
        {/* =========================================================================
            CENTERPIECE BACKGROUND PROFILE LUNA GLOW
           ========================================================================= */}
        <div 
          className={`relative w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] z-10 flex items-center justify-center transition-all duration-1000 ease-out delay-100 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ containerType: "inline-size" }}
        >
          {/* Radial mask container layer */}
          <div 
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            style={{
              maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 70%)',
              WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 70%)'
            }}
          >
            <Image
              src="/middle picture.png"
              alt="Ecosystem Silhouette Frame"
              fill
              priority
              sizes="(max-width: 768px) 380px, 580px"
              className="object-cover"
            />
          </div>

          {/* =========================================================================
              TEXT OVERLAY
             ========================================================================= */}
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-[30%] text-center px-4 z-20 pointer-events-none">
            <h1 
              className="font-medium text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]" 
              style={{ 
                fontFamily: "var(--font-google-sans-flex), sans-serif",
                fontSize: "5.8cqw",
                lineHeight: "0.98",
                letterSpacing: "-0.035em"
              }}
            >
              <span className="block">Start</span>
              <span className="block">Building</span>
              <span className="block">Tomorrow</span>
            </h1>
          </div>
        </div>

        {/* =========================================================================
            LEFT FLANK ELEMENTS
           ========================================================================= */}

        {/* 1. Curly Hair Man Avatar */}
        <div 
          className={`absolute top-[8%] left-[23%] z-20 float-anim-1 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-16 h-16 md:w-[100px] md:h-[100px] rounded-full overflow-hidden border border-zinc-700 shadow-2xl relative">
            <Image
              src="/nav1.png"
              alt="Team Member"
              fill
              sizes="(max-width: 768px) 64px, 100px"
              className="object-cover"
            />
          </div>
        </div>

        {/* 2. Tesla Dynamic Brand Badge */}
        <div 
          className={`absolute top-[25%] left-[5%] z-20 float-anim-2 transition-all duration-1000 ease-out delay-400 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-16 h-16 md:w-[90px] md:h-[90px] rounded-full border border-white/30 shadow-2xl bg-white/10 backdrop-blur-md flex items-center justify-center relative">
            <div className="relative w-[55%] h-[55%]">
              <Image
                src="/2.png"
                alt="Tesla Brand Anchor"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* 3. Curly Hair Woman Avatar */}
        <div 
          className={`absolute bottom-[20%] left-[10%] z-20 float-anim-3 transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-16 h-16 md:w-[95px] md:h-[95px] rounded-full overflow-hidden border border-zinc-700 shadow-2xl relative filter brightness-105">
            <Image
              src="/3.png"
              alt="Network Contributor"
              fill
              sizes="(max-width: 768px) 64px, 95px"
              className="object-cover" 
            />
          </div>
        </div>

        {/* 4. Layered Google Brand Module */}
        <div 
          className={`absolute -bottom-[2%] left-[32%] z-30 float-anim-1 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-14 h-14 md:w-[74px] md:h-[74px] rounded-full border border-white/30 shadow-2xl bg-white/10 backdrop-blur-md flex items-center justify-center relative">
            <div className="absolute w-[55%] h-[55%] flex items-center justify-center">
              <Image src="/4b.png" alt="Google Identity Asset" fill sizes="40px" className="object-contain" />
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT FLANK ELEMENTS
           ========================================================================= */}

        {/* 8. Layered Nvidia Brand Module */}
        <div
          className={`absolute top-[22%] right-[23%] z-30 float-anim-2 transition-all duration-1000 ease-out delay-350 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div
            className="w-14 h-14 md:w-[66px] md:h-[66px] rounded-full border border-white/15 shadow-2xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: "radial-gradient(circle at 38% 34%, rgba(52,58,70,0.96), rgba(20,22,29,0.96) 62%, rgba(11,12,17,0.98))",
              backdropFilter: "blur(14px)",
              boxShadow: "-12px 8px 18px rgba(46,155,255,0.38), inset 0 1px 0 rgba(255,255,255,0.16)",
            }}
          >
            {/* Blue-light reflection highlight */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle at 13% 74%, rgba(54,151,255,0.95), rgba(43,132,255,0.28) 23%, transparent 45%)",
              }}
            />
            <div className="relative z-10 w-[45%] h-[45%] flex items-center justify-center">
              <Image src="/8b.png" alt="Nvidia Logo Asset" fill sizes="30px" className="object-contain" />
            </div>
          </div>
        </div>

        {/* 7. Professional Woman Profile Avatar */}
        <div 
          className={`absolute top-[8%] right-[12%] z-20 float-anim-3 transition-all duration-1000 ease-out delay-450 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border border-zinc-700 shadow-2xl relative">
            <Image
              src="/nav2.png"
              alt="Community Mentor Profile"
              fill
              sizes="(max-width: 768px) 56px, 80px"
              className="object-cover"
            />
          </div>
        </div>

        {/* 6. Layered Apple Corporation Node */}
        <div 
          className={`absolute top-[50%] -translate-y-1/2 right-[5%] z-30 float-anim-1 transition-all duration-1000 ease-out delay-550 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-14 h-14 md:w-[74px] md:h-[74px] rounded-full border border-white/30 shadow-2xl bg-white/10 backdrop-blur-md flex items-center justify-center relative">
            <div className="absolute w-[55%] h-[55%] flex items-center justify-center">
              <Image src="/6b.png" alt="Apple Logo Vector" fill sizes="40px" className="object-contain" />
            </div>
          </div>
        </div>

        {/* 5. Layered Solana Ecosystem Node */}
        <div 
          className={`absolute bottom-[10%] right-[22%] z-30 float-anim-2 transition-all duration-1000 ease-out delay-650 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-14 h-14 md:w-[74px] md:h-[74px] rounded-full border border-white/30 shadow-2xl bg-white/10 backdrop-blur-md flex items-center justify-center relative">
            <div className="absolute w-[55%] h-[55%] flex items-center justify-center">
              <Image src="/5b.png" alt="Solana Brand Identity Vector" fill sizes="40px" className="object-contain" />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
