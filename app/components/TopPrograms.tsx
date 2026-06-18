"use client";

import React from "react";
import localFont from "next/font/local";
import { ProgramCard } from "./ProgramCard";

const googleSansFlex = localFont({
  src: [{ path: "../../public/fonts/GoogleSansFlex_9pt-Medium.ttf", weight: "500", style: "normal" }],
  variable: "--font-google-sans-flex",
});

const indicatorButtons = [-2, -1, 0, 1, 2];
const indicatorSlotStep = 34;

export default function TopPrograms() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [shouldAnimate, setShouldAnimate] = React.useState(true);
  const [indicatorPosition, setIndicatorPosition] = React.useState(2);

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

  const slides = [...programData, ...programData, ...programData];

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndicatorPosition((currentPosition) => (currentPosition + 1) % indicatorButtons.length);
      setShouldAnimate(true);
      setActiveIndex((currentIndex) => currentIndex + 1);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleTransitionEnd = () => {
    if (activeIndex >= programData.length) {
      setShouldAnimate(false);
      setActiveIndex(0);
    }
  };

  const moveSlides = (targetPosition: number) => {
    const offset = targetPosition - indicatorPosition;
    if (offset === 0) return;

    setIndicatorPosition(targetPosition);
    setShouldAnimate(true);
    setActiveIndex((currentIndex) => {
      const nextIndex = currentIndex + offset;
      return nextIndex < 0
        ? (nextIndex + programData.length) % programData.length
        : nextIndex;
    });
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

      <div className="program-carousel mx-auto w-full overflow-hidden pt-4 sm:px-0 sm:max-w-[936px] lg:max-w-[1196px]">
        <div
          className={`flex items-start gap-0 sm:gap-8 ${shouldAnimate ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{ transform: `translateX(calc(-${activeIndex} * var(--program-slide-step)))` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((program, index) => {
            const isPeek = index - activeIndex === 3;

            return (
            <div
              key={`${program.id}-${index}`}
              className={`flex-shrink-0 ${isPeek ? "self-center" : ""}`}
            >
              <ProgramCard 
                mainImage={program.mainImage}
                icon={program.icon}
                badge={program.badge}
                title={program.title}
                duration={program.duration}
                bgColor={program.bgColor}
                variant={isPeek ? "peek" : "default"}
              />
            </div>
            );
          })}
        </div>
      </div>

      <div
        className="mt-4 flex items-center justify-center"
      >
        <div className="relative flex items-center justify-center gap-4">
          <span
            className="pointer-events-none absolute left-0 top-0 h-[9px] w-[36px] rounded-full bg-white transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${indicatorPosition * indicatorSlotStep - 9}px)` }}
          />
          {indicatorButtons.map((offset) => {
            const buttonPosition = offset + 2;
            const opacityClass = buttonPosition === indicatorPosition
              ? "opacity-0"
              : Math.abs(buttonPosition - indicatorPosition) === 1
                ? "opacity-50"
                : "opacity-30";

            return (
            <button
              key={offset}
              type="button"
              aria-label={offset < 0 ? "Previous program slide" : offset > 0 ? "Next program slide" : "Current program slide"}
              onClick={() => moveSlides(buttonPosition)}
              className={`relative z-10 h-[9px] w-[18px] cursor-pointer rounded-full bg-white transition-opacity duration-500 ${opacityClass}`}
            />
            );
          })}
        </div>
      </div>
    </section>
  );
}
