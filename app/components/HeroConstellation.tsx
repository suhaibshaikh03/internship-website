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
      className={`${googleSansFlex.variable} w-full bg-black text-white flex flex-col items-center justify-center relative overflow-hidden select-none px-2 pt-20 pb-10 sm:px-4 sm:pb-4`}
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

        .hero-node {
          position: absolute;
          translate: -50% -50%;
        }

        .hero-node-man { top: calc(14% - 50px); left: calc(20% - 100px); }
        .hero-node-tesla { top: 31%; left: calc(14% - 170px); }
        .hero-node-woman-left { top: 62%; left: calc(18% - 70px); }
        .hero-node-google { top: 84%; left: 36%; }
        .hero-node-nvidia { top: calc(25% - 94px); left: calc(74% - 18px); }
        .hero-node-woman-right { top: calc(14% - 100px); left: calc(82% + 150px); }
        .hero-node-apple { top: 52%; left: calc(88% + 150px); }
        .hero-node-solana { top: 75%; left: calc(73% + 100px); }

        @media (max-width: 1180px) {
          .hero-node-man { top: 14%; left: 11%; }
          .hero-node-tesla { top: 29%; left: 8%; }
          .hero-node-woman-left { top: 72%; left: 13%; }
          .hero-node-google { top: 86%; left: 32%; }
          .hero-node-nvidia { top: 23%; left: 71%; }
          .hero-node-woman-right { top: 13%; left: 88%; }
          .hero-node-apple { top: 51%; left: 90%; }
          .hero-node-solana { top: 79%; left: 79%; }
        }

        @media (max-width: 1024px) {
          .hero-node-man { top: 13%; left: 14%; }
          .hero-node-tesla { top: 28%; left: 10%; }
          .hero-node-woman-left { top: 76%; left: 15%; }
          .hero-node-google { top: 88%; left: 31%; }
          .hero-node-nvidia { top: 22%; left: 72%; }
          .hero-node-woman-right { top: 12%; left: 86%; }
          .hero-node-apple { top: 50%; left: 88%; }
          .hero-node-solana { top: 82%; left: 76%; }
        }

        @media (max-width: 820px) {
          .hero-node-man { top: 11%; left: 16%; }
          .hero-node-tesla { top: 27%; left: 11%; }
          .hero-node-woman-left { top: 78%; left: 16%; }
          .hero-node-google { top: 90%; left: 33%; }
          .hero-node-nvidia { top: 21%; left: 74%; }
          .hero-node-woman-right { top: 10%; left: 85%; }
          .hero-node-apple { top: 49%; left: 87%; }
          .hero-node-solana { top: 86%; left: 77%; }
        }

        @media (max-width: 639px) {
          .hero-node-man { top: 8%; left: 23%; }
          .hero-node-tesla { top: 25%; left: 12%; }
          .hero-node-woman-left { top: 80%; left: 15%; }
          .hero-node-google { top: 94%; left: 36%; }
          .hero-node-nvidia { top: 22%; left: 77%; }
          .hero-node-woman-right { top: 8%; left: 88%; }
          .hero-node-apple { top: 50%; left: 88%; }
          .hero-node-solana { top: 90%; left: 78%; }
        }
      `}</style>

      {/* Main Grid Graphic Frame Layout - Fixed max-h to prevent massive empty vertical space */}
      <div className="relative w-full max-w-5xl aspect-[4/3] max-h-[760px] flex items-center justify-center sm:aspect-[16/9]">
        
        {/* =========================================================================
            CENTERPIECE BACKGROUND PROFILE LUNA GLOW
           ========================================================================= */}
        <div 
          className={`relative w-[380px] h-[380px] sm:w-[540px] sm:h-[540px] md:w-[650px] md:h-[650px] z-10 flex items-center justify-center transition-all duration-1000 ease-out delay-100 ${
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
              sizes="(max-width: 640px) 380px, (max-width: 768px) 540px, 650px"
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
          className={`hero-node hero-node-man z-20 float-anim-1 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-16 h-16 sm:w-[74px] sm:h-[74px] md:w-[116px] md:h-[116px] rounded-full overflow-hidden border border-zinc-700 shadow-2xl relative">
            <Image
              src="/nav1.png"
              alt="Team Member"
              fill
              sizes="(max-width: 768px) 74px, 116px"
              className="object-cover"
            />
          </div>
        </div>

        {/* 2. Tesla Transparent Brand Badge */}
        <div 
          className={`hero-node hero-node-tesla z-20 float-anim-2 transition-all duration-1000 ease-out delay-400 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-md sm:h-[74px] sm:w-[74px] md:h-[104px] md:w-[104px]">
            <div className="relative h-[52%] w-[52%]">
              <Image
                src="/tesla-icon 1.png"
                alt="Tesla logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* 3. Curly Hair Woman Avatar */}
        <div 
          className={`hero-node hero-node-woman-left z-20 float-anim-3 transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-16 h-16 sm:w-[74px] sm:h-[74px] md:w-[110px] md:h-[110px] rounded-full overflow-hidden border border-zinc-700 shadow-2xl relative filter brightness-105">
            <Image
              src="/3.png"
              alt="Network Contributor"
              fill
              sizes="(max-width: 768px) 74px, 110px"
              className="object-cover" 
            />
          </div>
        </div>

        {/* 4. Layered Google Brand Module */}
        <div 
          className={`hero-node hero-node-google z-30 float-anim-1 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-14 h-14 sm:w-[66px] sm:h-[66px] md:w-[86px] md:h-[86px] rounded-full border border-white/30 shadow-2xl bg-white/10 backdrop-blur-md flex items-center justify-center relative">
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
          className={`hero-node hero-node-nvidia z-30 float-anim-2 transition-all duration-1000 ease-out delay-350 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div
            className="w-14 h-14 sm:w-[66px] sm:h-[66px] md:w-[78px] md:h-[78px] rounded-full border border-white/15 shadow-2xl flex items-center justify-center relative overflow-hidden"
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
          className={`hero-node hero-node-woman-right z-20 float-anim-3 transition-all duration-1000 ease-out delay-450 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-14 h-14 sm:w-[66px] sm:h-[66px] md:w-[94px] md:h-[94px] rounded-full overflow-hidden border border-zinc-700 shadow-2xl relative">
            <Image
              src="/nav2.png"
              alt="Community Mentor Profile"
              fill
              sizes="(max-width: 768px) 66px, 94px"
              className="object-cover"
            />
          </div>
        </div>

        {/* 6. Layered Apple Corporation Node */}
        <div 
          className={`hero-node hero-node-apple z-30 float-anim-1 transition-all duration-1000 ease-out delay-550 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-14 h-14 sm:w-[66px] sm:h-[66px] md:w-[86px] md:h-[86px] rounded-full border border-white/30 shadow-2xl bg-white/10 backdrop-blur-md flex items-center justify-center relative">
            <div className="absolute w-[55%] h-[55%] flex items-center justify-center">
              <Image src="/6b.png" alt="Apple Logo Vector" fill sizes="40px" className="object-contain" />
            </div>
          </div>
        </div>

        {/* 5. Layered Solana Ecosystem Node */}
        <div 
          className={`hero-node hero-node-solana z-30 float-anim-2 transition-all duration-1000 ease-out delay-650 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-14 h-14 sm:w-[66px] sm:h-[66px] md:w-[86px] md:h-[86px] rounded-full border border-white/30 shadow-2xl bg-white/10 backdrop-blur-md flex items-center justify-center relative">
            <div className="absolute w-[55%] h-[55%] flex items-center justify-center">
              <Image src="/5b.png" alt="Solana Brand Identity Vector" fill sizes="40px" className="object-contain" />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
