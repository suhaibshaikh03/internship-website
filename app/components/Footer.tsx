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
      path: "../../public/Google_Sans_Flex/static/GoogleSansFlex_9pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Google_Sans_Flex/static/GoogleSansFlex_9pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-gsf-footer",
});

const programs = [
  "Cursor AI Coding Bootcamp",
  "Cybersecurity Specialization Program",
  "Ethereum 2.0 Mastery Specialization",
  "Global Leaders Access Program",
  "Solana Developer Specialization",
  "Metaverse Development Program",
];

const categories = ["About us", "neXt", "Contact us", "Refund Policy", "Privacy Policy"];

const information = ["Teach with Us", "Careers", "How to Pay", "Blogs"];

const socials = [
  { icon: "/insta (2).png", alt: "Instagram" },
  { icon: "/twitter.png",  alt: "Twitter / X" },
  { icon: "/linkedin.png", alt: "LinkedIn" },
];

const sectionHeadingClass =
  "text-[#A8B3FF] text-[11px] tracking-[0.3em] uppercase mb-7";
const linkClass =
  "text-white/65 text-[14px] hover:text-white transition-colors duration-150";

export default function Footer() {
  return (
    <footer
      className={`${googleSansFlex.variable} w-full bg-[#111] flex flex-col`}
      style={{ fontFamily: "var(--font-gsf-footer), sans-serif" }}
    >
      {/* ── Top grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-8 md:px-12 lg:px-16 pt-20 pb-16 gap-8 lg:gap-x-8">

        {/* Col 1 — Brand */}
        <div className="flex flex-col flex-shrink-0">
          <div className="relative h-10 w-44 mb-10">
            <Image
              src="/Edversity1.png"
              alt="Edversity"
              fill
              className="object-contain object-left"
              sizes="176px"
              priority
            />
          </div>

          <p
            className="text-white/45 text-[13px] leading-[1.7]"
            style={{ fontWeight: 400 }}
          >
            STZA Technology Park, Pak-Austria<br />
            Fachhochschule, Pakistan.
          </p>

          <p
            className="text-white text-[14px] mt-6"
            style={{ fontWeight: 600 }}
          >
            +(92) 310-9568132
          </p>

          {/* Social buttons */}
          <div className="flex gap-3 mt-7">
            {socials.map((s) => (
              <button
                key={s.alt}
                aria-label={s.alt}
                className="relative w-[38px] h-[38px] flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-150"
              >
                <Image
                  src="/greybox.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="38px"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="relative w-[13px] h-[13px] block">
                    <Image
                      src={s.icon}
                      alt={s.alt}
                      fill
                      className="object-contain"
                      sizes="13px"
                    />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Col 2 — Programs */}
        <div>
          <h3 className={sectionHeadingClass} style={{ fontWeight: 500 }}>
            Programs
          </h3>
          <ul className="space-y-[18px]">
            {programs.map((item) => (
              <li key={item}>
                <a href="#" className={linkClass} style={{ fontWeight: 400 }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Categories */}
        <div>
          <h3 className={sectionHeadingClass} style={{ fontWeight: 500 }}>
            Categories
          </h3>
          <ul className="space-y-[18px]">
            {categories.map((item) => (
              <li key={item}>
                <a href="#" className={linkClass} style={{ fontWeight: 400 }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Information */}
        <div>
          <h3 className={sectionHeadingClass} style={{ fontWeight: 500 }}>
            Information
          </h3>
          <ul className="space-y-[18px]">
            {information.map((item) => (
              <li key={item}>
                <a href="#" className={linkClass} style={{ fontWeight: 400 }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 border-t border-white/[0.12]" />

      {/* ── Bottom bar ── */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-9 gap-6 md:gap-12">
        {/* Left */}
        <div className="flex-shrink-0">
          <p
            className="text-[#A8B3FF] text-[11px] tracking-[0.3em] uppercase"
            style={{ fontWeight: 500 }}
          >
            Get in Touch
          </p>
          <p
            className="text-white/45 text-[12px] mt-[6px]"
            style={{ fontWeight: 400 }}
          >
            We don&apos;t send spam so don&apos;t worry.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 sm:gap-8 w-full md:w-auto">
          <input
            type="email"
            placeholder="Email Opt-in"
            className="bg-transparent border-0 border-b border-white/25 focus:border-white/50 focus:outline-none text-white text-[14px] placeholder-white/30 w-full sm:w-64 md:w-80 pb-[6px] transition-colors duration-150"
            style={{ fontWeight: 400 }}
          />
          <button
            className="flex items-center gap-2 text-[#A8B3FF] text-[11px] tracking-[0.3em] uppercase whitespace-nowrap"
            style={{ fontWeight: 500 }}
          >
            Submit Form
            <span className="relative w-5 h-5 block">
              <Image
                src="/pid.png"
                alt="arrow"
                fill
                className="object-contain"
                sizes="20px"
              />
            </span>
          </button>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 border-t border-white/[0.12]" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 pt-[10px] pb-5 sm:pb-10 gap-1 sm:gap-0">
        <p
          className="text-white/40 text-[11px] sm:text-[12px]"
          style={{ fontWeight: 400 }}
        >
          Copyrights &copy; 2025 Edversity. All Rights Reserved.
        </p>
        <p
          className="text-white/40 text-[11px] sm:text-[13px]"
          style={{ fontWeight: 400 }}
        >
          #TumhariManzilTakk
        </p>
      </div>
    </footer>
  );
}
