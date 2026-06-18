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
      path: "../../public/Google_Sans_Flex/static/GoogleSansFlex_9pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Google_Sans_Flex/static/GoogleSansFlex_9pt-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gsf-why",
});

const cards = [
  {
    number: "01.",
    title: "Learn",
    description: "Empower yourself with cutting-edge skills and knowledge.",
    icon: "/brain.png",
    bg: "#F5A623",
  },
  {
    number: "02.",
    title: "Graduate",
    description: "Unlock your potential and earn your certification with pride.",
    icon: "/hat.png",
    bg: "#4DD4B8",
  },
  {
    number: "03.",
    title: "Work",
    description: "Launch your career through our tailored placement assistance.",
    icon: "/person.png",
    bg: "#74C9F0",
  },
];

export default function WhyEdversity() {
  return (
    <section
      className={`${googleSansFlex.variable} w-full bg-black pt-14 pb-16 sm:pt-20 sm:pb-28 md:pt-28 md:pb-48`}
      style={{ fontFamily: "var(--font-gsf-why), sans-serif" }}
    >
      {/* Heading */}
      <div className="text-center mb-10 px-4 md:mb-14">
        <h2
          className="text-white text-[28px] leading-tight sm:text-[34px] md:text-[40px]"
          style={{ fontWeight: 600 }}
        >
          Why learn with Edversity?
        </h2>
        <p
          className="text-white/70 text-[15px] mt-2 sm:text-[17px] md:text-[18px] md:mt-3"
          style={{ fontWeight: 400 }}
        >
          Edversity build dreams of believers
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-[24px] flex flex-col items-center text-center px-6 pt-10 pb-10 sm:rounded-[28px] sm:px-8 sm:pt-12 sm:pb-12 md:px-10"
            style={{ backgroundColor: card.bg, minHeight: "320px" }}
          >
            {/* Icon */}
            <div className="relative w-[80px] h-[80px] mb-6 sm:w-[95px] sm:h-[95px] md:w-[110px] md:h-[110px] md:mb-8">
              <Image
                src={card.icon}
                alt={card.title}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 95px, 110px"
              />
            </div>

            {/* Number + Title */}
            <h3
              className="text-[#111] text-[30px] leading-none sm:text-[36px] md:text-[42px]"
              style={{ fontWeight: 500 }}
            >
              {card.number} {card.title}
            </h3>

            {/* Description */}
            <p
              className="text-[#111] text-[14px] mt-4 leading-relaxed sm:text-[15px] md:text-[17px] md:mt-5"
              style={{ fontWeight: 600 }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
