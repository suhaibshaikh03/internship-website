"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const googleSansFlex = localFont({
  src: [
    {
      path: "../../public/fonts/GoogleSansFlex_9pt-Medium.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-google-sans-flex",
  fallback: ["sans-serif"],
});

const navLinks = [
  { href: "/",       label: "Home",    color: "text-[#00A3FF]" },
  { href: "/courses", label: "Courses", color: "text-[#828282]" },
  { href: "/about",  label: "About",   color: "text-[#828282]" },
  { href: "/blogs",  label: "Blogs",   color: "text-[#828282]" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`${googleSansFlex.variable} relative z-50 w-full bg-black text-white select-none`}
      style={{ fontFamily: "var(--font-google-sans-flex), sans-serif" }}
    >
      {/* ── Desktop layout ── */}
      <div className="hidden md:flex h-24 items-center justify-center px-8 lg:px-12">
        <div className="w-full max-w-7xl grid grid-cols-3 items-center">

          {/* Left links */}
          <div className="flex items-center space-x-10 lg:space-x-14 justify-end pr-[17px] lg:pr-[33px]">
            <Link href="/" className="text-[#00A3FF] font-normal text-[15px] hover:opacity-80 transition-opacity tracking-wide">
              Home
            </Link>
            <Link href="/courses" className="text-[#828282] font-normal text-[15px] hover:text-white transition-colors tracking-wide">
              Courses
            </Link>
          </div>

          {/* Center logo */}
          <div className="flex justify-center">
            <Link href="/">
              <Image src="/Edversity.png" alt="Edversity Logo" width={160} height={40} priority style={{ height: "auto" }} className="object-contain" />
            </Link>
          </div>

          {/* Right links + Innovate logo */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-10 lg:space-x-14 pl-[17px] lg:pl-[33px]">
              <Link href="/about" className="text-[#828282] font-normal text-[15px] hover:text-white transition-colors tracking-wide">
                About
              </Link>
              <Link href="/about" className="text-[#828282] font-normal text-[15px] hover:text-white transition-colors tracking-wide">
                Blogs
              </Link>
            </div>
            <div className="flex-shrink-0">
              <Image src="/Vector.svg" alt="Innovate 4.0" width={105} height={26} priority style={{ height: "auto" }} className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile top bar ── */}
      <div className="flex md:hidden items-center justify-between px-5 h-20">
        {/* Edversity logo */}
        <Link href="/">
          <Image src="/Edversity.png" alt="Edversity Logo" width={120} height={30} priority style={{ height: "auto" }} className="object-contain" />
        </Link>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle menu"
          className="flex flex-col justify-center items-center gap-[5px] w-9 h-9"
        >
          <span className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="absolute left-3 right-3 top-full z-50 flex md:hidden flex-col items-end rounded-b-2xl border border-t-0 border-white/12 bg-black/90 px-6 pb-7 pt-5 text-right shadow-[0_22px_60px_rgba(0,0,0,0.65)] backdrop-blur-md">
          {/* Nav links */}
          <div className="flex w-[96px] flex-col items-start gap-1.5 mb-auto text-left">
            {navLinks.map(link => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${link.color} w-full rounded-md px-2 py-2 text-left text-[16px] font-normal tracking-wide transition-colors hover:bg-white/8 hover:text-white`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Innovate 4.0 logo at bottom */}
          <div className="mt-6 flex w-[96px] justify-start border-t border-white/10 px-2 pt-5">
            <Image src="/Vector.svg" alt="Innovate 4.0" width={110} height={28} style={{ height: "auto" }} className="object-contain" />
          </div>
        </div>
      )}
    </nav>
  );
}
