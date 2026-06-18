"use client";

import React from "react";
import Image from "next/image";
import { motion, useTransform, MotionValue } from "framer-motion";

type TestimonialCardData = {
  src: string;
  start: string;
  end: string;
  style?: string;
};

function TestimonialCard({ 
  t, 
  index, 
  scrollYProgress 
}: { 
  t: TestimonialCardData, 
  index: number, 
  scrollYProgress: MotionValue<number> 
}) {
  // Hooks are now at the top level of THIS component
  const opacity = useTransform(scrollYProgress, [index * 0.12, index * 0.12 + 0.1], [0, 1]);
  const transform = useTransform(
    scrollYProgress,
    [index * 0.12, index * 0.12 + 0.2],
    [t.start, t.end]
  );

  return (
    <motion.div 
      style={{ opacity, transform }} 
      className={`absolute z-20 w-[300px] ${t.style}`}
    >
      <Image src={t.src} alt="Testimonial" width={300} height={120} />
    </motion.div>
  );
}
export default TestimonialCard;
