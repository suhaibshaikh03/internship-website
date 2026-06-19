"use client";

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
      style={{ height: "calc(95vh + 25px)", fontFamily: "var(--font-gsf-launch), sans-serif" }}
    >
      <style jsx global>{`
        .launch-cta-model {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        @media (max-width: 1024px) {
          .launch-cta-section {
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 80px 24px 0 !important;
          }
          .launch-cta-left {
            position: relative !important;
            left: 0 !important;
            height: auto !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            align-items: center !important;
            text-align: center !important;
            z-index: 10;
          }
          .launch-cta-heading {
            white-space: normal !important;
            text-align: center !important;
            font-size: clamp(2rem, 6vw, 3rem) !important;
          }
          .launch-cta-button {
            width: 100% !important;
            max-width: 320px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .launch-cta-model {
            position: relative !important;
            width: 100% !important;
            margin-top: 28px !important;
            overflow: hidden !important;
          }
          .launch-cta-iframe {
            display: block !important;
            position: relative !important;
            top: auto !important;
            width: 200vw !important;
            max-width: none !important;
            height: 112.5vw !important;
            margin: 0 calc(50% - 100vw) !important;
            transform: translateX(-72vw) !important;
          }
        }

        @media (max-width: 640px) {
          .launch-cta-mobile-fallback {
            height: 78vw;
          }
          .launch-cta-iframe {
            width: 220vw !important;
            max-width: none !important;
            height: 123.75vw !important;
            margin: 0 calc(50% - 110vw) !important;
            transform: translateX(-88vw) !important;
          }
        }

        @media (min-width: 1025px) and (max-width: 1280px) {
          .launch-cta-left {
            padding-left: 48px !important;
          }
          .launch-cta-heading {
            font-size: clamp(2.8rem, 4vw, 3.2rem) !important;
          }
          .launch-cta-iframe {
            transform: translateX(-120px) !important;
          }
        }

        @media (min-width: 1281px) and (max-width: 1535px) {
          .launch-cta-left {
            padding-left: 80px !important;
          }
          .launch-cta-model {
            inset: 0 !important;
          }
          .launch-cta-iframe {
            transform: translateX(10px) !important;
          }
        }

        @media (min-width: 1536px) {
          .launch-cta-left {
            padding-left: 106px !important;
          }
          .launch-cta-model {
            inset: 0 !important;
          }
          .launch-cta-iframe {
            transform: translateX(460px) !important;
          }
        }

      `}</style>

      <div
        className="absolute top-0 flex flex-col justify-center z-10 launch-cta-left"
        style={{ left: "-20px", height: "100%", paddingLeft: "106px", paddingRight: "32px" }}
      >
        <h2
          className="text-white leading-[1.12] text-[3.5rem] whitespace-nowrap overflow-hidden launch-cta-heading"
          style={{ fontWeight: 700 }}
        >
          Join, to launch $100k+
          <br />
          Remote Tech Career in
          <br />
          Web 3.0 &amp; Blockchain!
        </h2>

        <button
          className="mt-9 w-fit px-16 py-3 bg-[#42C5F5] text-black text-[21px] rounded-xl hover:bg-[#25B8EC] transition-colors duration-200 launch-cta-button"
          style={{ fontWeight: 600 }}
        >
          Sign up Now
        </button>
      </div>

      <div className="launch-cta-model">
        <iframe
          src="https://my.spline.design/chatgptkeyboard-syV7Xqh56oD99RW4rH8kTk7Z/"
          title="3D Keyboard"
          allow="autoplay; fullscreen"
          loading="eager"
          className="launch-cta-iframe"
          style={{
            position: "relative",
            top: 0,
            width: "calc(100% + 230px)",
            height: "100%",
            minHeight: "520px",
            border: "none",
            zIndex: 1,
            transform: "translateX(-30px)",
          }}
        />
      </div>

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
