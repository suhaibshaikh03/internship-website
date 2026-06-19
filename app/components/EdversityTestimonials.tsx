"use client";

import React, { useRef } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const googleSansFlex = localFont({
  src: [{ path: "../../public/Google_Sans_Flex/static/GoogleSansFlex_36pt-SemiBold.ttf", weight: "600", style: "normal" }],
  variable: "--font-edversity-google-sans-flex",
});

type FloatingTestimonial = {
  id: number;
  avatarSrc: string;
  quote: string;
  author: string;
  role: string;
  variant: "compact" | "wide";
  className: string;
  mobileClassName: string;
  range: [number, number];
  revealFrom: {
    x: number;
    y: number;
  };
};

type FloatingTestimonialCardProps = {
  testimonial: FloatingTestimonial;
  scrollYProgress: MotionValue<number>;
};

const testimonials: FloatingTestimonial[] = [
  {
    id: 31,
    avatarSrc: "/51.png",
    quote:
      "I think the support I get from edversity was super phenomenal and it definitely caught me in love with edversity and its vision",
    author: "Abdullah Rizwan",
    role: "Edversity's student",
    variant: "compact",
    className: "left-[calc(11%-15px)] top-[24%] w-[21vw] max-w-[270px]",
    mobileClassName: "left-[2%] top-[26%] w-[44vw]",
    range: [0.07, 0.18],
    revealFrom: { x: -42, y: 18 },
  },
  {
    id: 32,
    avatarSrc: "/52.png",
    quote:
      "I think the support I get from edversity was super phenomenal and it definitely caught me in love with edversity and its vision",
    author: "Abdullah Rizwan",
    role: "Edversity's student",
    variant: "wide",
    className: "left-[4%] top-[45%] w-[29vw] max-w-[390px]",
    mobileClassName: "right-[2%] top-[33%] w-[44vw]",
    range: [0.2, 0.31],
    revealFrom: { x: -46, y: 24 },
  },
  {
    id: 33,
    avatarSrc: "/53.png",
    quote:
      "The whole AI program provided a comprehensive introduction and the hands-on projects helped me grasp complex concepts",
    author: "Sidra Yousufzai",
    role: "Gen AI Student",
    variant: "wide",
    className: "left-[7%] bottom-[2%] w-[31vw] max-w-[430px]",
    mobileClassName: "left-[2%] top-[41%] w-[44vw]",
    range: [0.33, 0.44],
    revealFrom: { x: -48, y: 30 },
  },
  {
    id: 36,
    avatarSrc: "/56.png",
    quote:
      "I think the support I get from edversity was super phenomenal and it definitely caught me in love with edversity and its vision",
    author: "Abdullah Rizwan",
    role: "Edversity's student",
    variant: "wide",
    className: "right-[calc(1.5%-6px)] top-[18%] w-[28vw] max-w-[380px]",
    mobileClassName: "right-[2%] top-[49%] w-[44vw]",
    range: [0.46, 0.57],
    revealFrom: { x: 46, y: 20 },
  },
  {
    id: 35,
    avatarSrc: "/55.png",
    quote:
      "Overall course is good. It enabled me to build real life blockchain applications. I like the way they teach technology",
    author: "Aman Nadeem",
    role: "Student Ethereum 2.0 Program",
    variant: "wide",
    className: "right-[7%] top-[calc(53%-30px)] w-[27vw] max-w-[370px]",
    mobileClassName: "left-[2%] top-[57%] w-[44vw]",
    range: [0.59, 0.7],
    revealFrom: { x: 42, y: 24 },
  },
  {
    id: 34,
    avatarSrc: "/54.png",
    quote:
      "The whole AI program provided a comprehensive introduction and the hands-on projects helped me grasp complex concepts",
    author: "Sidra Yousufzai",
    role: "Gen AI Student",
    variant: "wide",
    className: "right-[4%] bottom-[4%] w-[30vw] max-w-[410px]",
    mobileClassName: "right-[2%] top-[65%] w-[44vw]",
    range: [0.72, 0.84],
    revealFrom: { x: 46, y: 30 },
  },
];

function TestimonialGlassCard({ testimonial }: { testimonial: FloatingTestimonial }) {
  const isCompact = testimonial.variant === "compact";

  return (
    <div className="relative">
      <div
        className="absolute -inset-5 rounded-[26px] bg-[#8fc8ff]/35 blur-2xl"
        aria-hidden
      />
      <article
        className={`relative flex w-full items-start border border-white/75 bg-white/70 text-black shadow-[0_22px_70px_rgba(70,143,222,0.34)] backdrop-blur-xl ${
          isCompact
            ? "gap-2.5 rounded-[12px] px-3.5 py-3"
            : "gap-4 rounded-[18px] px-5 py-4"
        }`}
        style={{ fontFamily: "var(--font-edversity-google-sans-flex), sans-serif" }}
      >
        <div
          className={`relative flex-shrink-0 overflow-hidden rounded-full bg-[#e8eff7] ${
            isCompact ? "h-8 w-8" : "h-12 w-12"
          }`}
        >
          <Image
            src={testimonial.avatarSrc}
            alt={`${testimonial.author} avatar`}
            fill
            sizes={isCompact ? "32px" : "48px"}
            className="object-cover"
            quality={100}
          />
        </div>

        <div className="min-w-0 flex-1">
          <p
            className={`font-medium leading-snug text-[#1b1f25] ${
              isCompact ? "text-[10px]" : "text-[14px]"
            }`}
          >
            {testimonial.quote}
          </p>
          <div className={`h-px bg-black/5 ${isCompact ? "my-1.5" : "my-3"}`} />
          <p className={`leading-none ${isCompact ? "text-[7px]" : "text-[10px]"}`}>
            <span className="font-black text-[#252a31]">{testimonial.author}</span>
            <span className="mx-1 text-black/35">|</span>
            <span className="font-medium text-[#7c848f]">{testimonial.role}</span>
          </p>
        </div>
      </article>
    </div>
  );
}

function MobileFloatingTestimonialCard({
  testimonial,
  scrollYProgress,
  nextRange,
}: FloatingTestimonialCardProps & { nextRange?: [number, number] }) {
  const [start, end] = testimonial.range;

  // Fade in during this card's range, fade out when next card starts appearing.
  // Last card stays at opacity 1.
  const inputRange  = nextRange
    ? [0, start, end, nextRange[0], nextRange[1]]
    : [0, start, end, 1];
  const outputRange = nextRange ? [0, 0, 1, 1, 0] : [0, 0, 1, 1];
  const opacity = useTransform(scrollYProgress, inputRange, outputRange);

  return (
    <motion.div
      className="absolute z-30 pointer-events-none md:hidden"
      style={{
        opacity,
        top: "28%",
        left: "7.5%",
        width: "85vw",
        willChange: "opacity",
      }}
    >
      <TestimonialGlassCard testimonial={testimonial} />
    </motion.div>
  );
}

function FloatingTestimonialCard({ testimonial, scrollYProgress }: FloatingTestimonialCardProps) {
  const [start, end] = testimonial.range;
  const opacity = useTransform(scrollYProgress, [0, start, end, 1], [0, 0, 1, 1]);
  const x = useTransform(scrollYProgress, [0, start, end, 1], [testimonial.revealFrom.x, testimonial.revealFrom.x, 0, 0]);
  const y = useTransform(scrollYProgress, [0, start, end, 1], [testimonial.revealFrom.y, testimonial.revealFrom.y, 0, 0]);

  return (
    <motion.div
      className={`absolute z-30 hidden pointer-events-none md:block 2xl:scale-[1.5] ${testimonial.className}`}
      style={{ opacity, x, y, willChange: "transform, opacity" }}
    >
      <TestimonialGlassCard testimonial={testimonial} />
    </motion.div>
  );
}


export default function EdversityTestimonials() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className={`${googleSansFlex.variable} relative h-[520vh] bg-[#f7fbff]`}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_58%,rgba(194,220,250,0.9)_0%,rgba(231,243,255,0.7)_29%,rgba(255,255,255,1)_68%)]">
        <div
          className="absolute left-1/2 top-[11%] z-10 w-full -translate-x-1/2 px-4 text-center md:top-[10%]"
          style={{ fontFamily: "var(--font-edversity-google-sans-flex), sans-serif" }}
        >
          <h2 className="text-[22px] font-semibold leading-tight text-black sm:text-[28px] md:text-[32px]">
            What Students Say about
          </h2>
          <h1 className="mt-2 text-[70px] font-semibold leading-none tracking-[-0.04em] text-black sm:text-[104px] md:text-[132px] lg:text-[150px] xl:text-[150px]">
            Edversity
          </h1>
        </div>

        <div className="absolute bottom-[-18%] left-1/2 z-20 h-[80vh] w-[84vw] max-w-[680px] -translate-x-1/2 sm:bottom-[-19%] md:h-[84vh] md:max-w-[760px] lg:bottom-[-20%] lg:h-[88vh]">
          <Image
            src="/middle 1.png"
            alt="Smiling student holding a phone"
            fill
            sizes="(min-width: 768px) 650px, 72vw"
            className="object-contain object-bottom"
            quality={100}
            priority
          />
        </div>

        {testimonials.map((testimonial, i) => (
          <React.Fragment key={testimonial.id}>
            <FloatingTestimonialCard testimonial={testimonial} scrollYProgress={scrollYProgress} />
            <MobileFloatingTestimonialCard
              testimonial={testimonial}
              scrollYProgress={scrollYProgress}
              nextRange={testimonials[i + 1]?.range}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
