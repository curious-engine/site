"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function HeroBackground() {
  const { scrollY } = useScroll();
  // background drifts down 140px over the first 800px of scroll (~17% speed)
  const y = useTransform(scrollY, [0, 800], [0, 140]);

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      {/* Oversized parallax image — ±15% bleed prevents edge reveal at any scroll depth */}
      <motion.div
        className="absolute"
        style={{
          inset: "-15%",
          y,
        }}
      >
        <img
          src="/thumb-1920-693632.jpg"
          alt=""
          className="w-full h-full object-cover select-none"
          draggable={false}
          style={{
            filter: "grayscale(1) contrast(1.2) brightness(0.75)",
          }}
        />
      </motion.div>

      {/* Ordered-dither overlay — 4px Bayer-style checkerboard */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-conic-gradient(rgb(0 0 0 / 0.6) 0% 25%, transparent 0% 50%)",
          backgroundSize: "4px 4px",
          mixBlendMode: "multiply",
        }}
      />

      {/* Readability veil — keeps text legible over photo */}
      <div className="absolute inset-0 bg-background/55" />
    </div>
  );
}
