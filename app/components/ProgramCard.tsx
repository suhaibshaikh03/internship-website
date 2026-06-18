import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const googleSansFlex = localFont({
  src: [{ path: "../../public/fonts/GoogleSansFlex_9pt-Medium.ttf", weight: "500", style: "normal" }],
  variable: "--font-google-sans-flex",
});

interface ProgramCardProps {
  mainImage: string;
  icon: string;
  badge: string;
  title: string;
  duration: string;
  bgColor: string;
  variant?: "default" | "peek";
}

export function ProgramCard({ mainImage, icon, badge, title, duration, bgColor, variant = "default" }: ProgramCardProps) {
  const textColor = "text-black";
  const badgeBg = bgColor === "bg-[#FFC637]" ? "bg-white/85" : "bg-black/10";
  const isPeek = variant === "peek";

  return (
    <article
      className={`${googleSansFlex.variable} relative flex w-[calc(100vw-56px)] flex-col overflow-hidden rounded-[18px] ${bgColor} shadow-2xl transition-transform duration-300 ease-out hover:-translate-y-3 sm:w-[260px] sm:rounded-[10px] lg:w-[330px] ${
        isPeek
          ? "h-[450px] sm:h-[410px] lg:h-[500px]"
          : "h-[480px] sm:h-[440px] lg:h-[540px]"
      }`}
      style={{ fontFamily: "var(--font-google-sans-flex), sans-serif" }}
    >
      {/* Header with badge and icon */}
      <div className="flex items-start justify-between px-4 pt-4 sm:px-5 sm:pt-5">
        <span className={`${badgeBg} text-black text-[9px] font-medium leading-none px-2 py-1 rounded-[3px]`}>
          {badge}
        </span>
        <div className="relative h-4 w-3 opacity-40 sm:h-5 sm:w-4">
          <Image src={icon} alt="" fill className="object-contain" sizes="16px" />
        </div>
      </div>

      {/* Title and Duration */}
      <div className="px-4 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5 lg:px-7 lg:pb-6">
        <h3 className={`whitespace-pre-line text-[24px] font-semibold leading-[0.95] ${textColor} sm:text-[30px] lg:text-[38px]`}>{title}</h3>
        <p className={`mt-3 text-[10px] font-medium ${textColor} sm:text-xs lg:text-sm`}>{duration} <span className="mx-2 text-black">|</span> Installments Available</p>
      </div>

      {/* Main Image Area - takes remaining space */}
      <div className="relative flex-1 w-full overflow-hidden">
        <Image
          src={mainImage}
          alt={title.replace(/\n/g, " ")}
          fill
          className="object-cover"
          quality={100}
          priority
          sizes="(min-width: 1024px) 330px, (min-width: 640px) 260px, 210px"
        />
        
        {/* Translucent Button at bottom-left */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
          <button className="rounded-[7px] border border-white/35 bg-white/25 px-4 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur-md transition-colors hover:bg-white/35 sm:px-5 sm:text-sm">
            Enroll Now
          </button>
        </div>
      </div>

      {isPeek && (
        <div
          className="pointer-events-none absolute inset-0 z-20 bg-black/55"
          aria-hidden
        />
      )}
    </article>
  );
}
