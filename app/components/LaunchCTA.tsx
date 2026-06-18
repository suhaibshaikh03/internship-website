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
  ],
  variable: "--font-gsf-launch",
});

export default function LaunchCTA() {
  return (
    <section
      className={`${googleSansFlex.variable} relative w-full bg-black overflow-x-hidden launch-cta-section`}
      style={{ height: "95vh", fontFamily: "var(--font-gsf-launch), sans-serif" }}
    >
      <style jsx global>{`
        @media (max-width: 768px) {
          .launch-cta-section {
            height: auto !important;
            display: flex;
            flex-direction: column;
          }
          .launch-cta-left {
            position: relative !important;
            left: 0 !important;
            height: auto !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
            z-index: 10;
          }
          .launch-cta-heading {
            white-space: normal !important;
          }
          .launch-cta-button {
            width: 100% !important;
          }
          .launch-cta-iframe {
            display: none !important;
          }
        }
      `}</style>

      {/* ── Left: heading + button ── */}
      <div
        className="absolute top-0 flex flex-col justify-center z-10 launch-cta-left"
        style={{ left: "-20px", height: "100%", paddingLeft: "106px", paddingRight: "32px" }}
      >
        <h2
          className="text-white leading-[1.12] text-[3.5rem] whitespace-nowrap overflow-hidden launch-cta-heading"
          style={{ fontWeight: 700 }}
        >
          Join, to launch $100k+<br />
          Remote Tech Career in<br />
          Web 3.0 &amp; Blockchain!
        </h2>

        <button
          className="mt-9 w-fit px-16 py-3 bg-[#42C5F5] text-black text-[21px] rounded-xl hover:bg-[#25B8EC] transition-colors duration-200 launch-cta-button"
          style={{ fontWeight: 600 }}
        >
          Sign up Now
        </button>
      </div>

      {/* ── Right: Spline iframe ── */}
      <iframe
        src="https://my.spline.design/chatgptkeyboard-syV7Xqh56oD99RW4rH8kTk7Z/"
        title="3D Keyboard"
        allow="autoplay; fullscreen"
        className="launch-cta-iframe"
        style={{
          position: "relative",
          top: 0,
          width: "calc(100% + 230px)",
          height: "100%",
          border: "none",
          zIndex: 1,
          transform: "translateX(-30px)",
        }}
      />

      {/* ── We're online widget ── */}
      <div
        className="absolute bottom-6 right-6 flex items-center gap-2 bg-[#1c1c1e] border border-white/10 rounded-xl px-4 py-2.5 shadow-xl"
        style={{ zIndex: 20 }}
      >
        <div className="relative w-[18px] h-[18px] flex-shrink-0">
          <Image
            src="/wo.png"
            alt="Online status"
            fill
            className="object-contain"
            sizes="18px"
          />
        </div>
        <span className="text-white text-[13px] whitespace-nowrap" style={{ fontWeight: 400 }}>
          We&apos;re online!
        </span>
      </div>
    </section>
  );
}
