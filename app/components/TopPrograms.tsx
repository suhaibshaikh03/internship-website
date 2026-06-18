"use client";

import React from "react";
import localFont from "next/font/local";
import { ProgramCard } from "./ProgramCard";

const googleSansFlex = localFont({
  src: [{ path: "../../public/fonts/GoogleSansFlex_9pt-Medium.ttf", weight: "500", style: "normal" }],
  variable: "--font-google-sans-flex",
});

export default function TopPrograms() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [shouldAnimate, setShouldAnimate] = React.useState(true);

  const programData = [
    { 
      id: 1, 
      mainImage: "/41.png", 
      icon: "/44.png", 
      badge: "Bootcamp", 
      title: "Cursor\nAI Coding\nBootcamp", 
      duration: "4 weeks",
      bgColor: "bg-[#FFC637]"
    },
    { 
      id: 2, 
      mainImage: "/42.png", 
      icon: "/45.png", 
      badge: "Mastery Specialization", 
      title: "Cybersecurity\nMaster\nProgram", 
      duration: "2 Months",
      bgColor: "bg-white" 
    },
    { 
      id: 3, 
      mainImage: "/43.png", 
      icon: "/45.png", 
      badge: "Specialization Program", 
      title: "Solana\nDeveloper\nSpecialization", 
      duration: "3 Months",
      bgColor: "bg-white" 
    },
  ];

  const slides = [...programData, ...programData];

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setShouldAnimate(true);
      setActiveIndex((currentIndex) => currentIndex + 1);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleTransitionEnd = () => {
    if (activeIndex >= programData.length) {
      setShouldAnimate(false);
      setActiveIndex(0);
    }
  };

  return (
    <section className={`${googleSansFlex.variable} w-full bg-black py-12 sm:py-16 md:py-20 overflow-hidden`}>
      <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
        <h2 className="text-white font-medium text-[clamp(24px,6vw,42px)]" style={{ fontFamily: "var(--font-google-sans-flex), sans-serif" }}>
          Our Top Programs
        </h2>
        <p className="text-white/70 font-normal text-[clamp(14px,3vw,18px)] mt-2" style={{ fontFamily: "var(--font-google-sans-flex), sans-serif" }}>
          Unleash your potential and launch your high-paying remote career!
        </p>
      </div>

      <div className="program-carousel mx-auto w-full overflow-hidden pt-4 sm:px-0 sm:max-w-[844px] lg:max-w-[1054px]">
        <div
          className={`flex gap-0 sm:gap-8 ${shouldAnimate ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{ transform: `translateX(calc(-${activeIndex} * var(--program-slide-step)))` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((program, index) => (
            <div key={`${program.id}-${index}`} className="flex-shrink-0">
              <ProgramCard 
                mainImage={program.mainImage}
                icon={program.icon}
                badge={program.badge}
                title={program.title}
                duration={program.duration}
                bgColor={program.bgColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
