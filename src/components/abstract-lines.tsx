"use client";

import { motion } from "framer-motion";

/*
 * Abstract SVG lines — inspired by lovart.ai's decorative end-of-page curves.
 * Each path is an organic cubic bezier. They draw themselves in when scrolled
 * into view via framer-motion pathLength + whileInView.
 */

const LINES: { d: string; opacity: number; width: number }[] = [
  {
    d: "M -20,320 C 80,120 260,480 480,240 S 760,360 1020,140 S 1160,280 1260,180",
    opacity: 0.09,
    width: 1.2,
  },
  {
    d: "M -20,200 C 120,420 340,80 560,300 S 820,120 1060,340 S 1180,200 1260,260",
    opacity: 0.07,
    width: 1,
  },
  {
    d: "M 60,440 C 200,240 420,460 640,220 S 880,400 1100,180 S 1200,300 1260,240",
    opacity: 0.06,
    width: 0.9,
  },
  {
    d: "M -20,100 C 160,380 380,60 620,360 S 860,100 1080,320 S 1180,160 1260,200",
    opacity: 0.05,
    width: 1.5,
  },
  {
    d: "M 0,380 C 140,160 360,420 580,200 S 840,360 1060,140 S 1200,260 1260,160",
    opacity: 0.08,
    width: 0.8,
  },
  {
    d: "M 100,480 C 280,280 480,440 700,240 S 940,400 1160,200 S 1220,320 1260,280",
    opacity: 0.05,
    width: 1.3,
  },
  {
    d: "M -20,260 C 100,60 300,380 540,160 S 800,320 1020,100 S 1180,240 1260,140",
    opacity: 0.06,
    width: 1,
  },
];

export function AbstractLines() {
  return (
    <div
      className="relative w-full pointer-events-none select-none -mt-16"
      aria-hidden
    >
      <svg
        viewBox="0 0 1240 500"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-[280px] sm:h-[360px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {LINES.map((line, i) => (
          <motion.path
            key={i}
            d={line.d}
            stroke="currentColor"
            strokeWidth={line.width}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: line.opacity }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              pathLength: {
                duration: 3.2,
                ease: "easeInOut",
                delay: i * 0.22,
              },
              opacity: {
                duration: 0.4,
                delay: i * 0.22,
              },
            }}
          />
        ))}
      </svg>
    </div>
  );
}
