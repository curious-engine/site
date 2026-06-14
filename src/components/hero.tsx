"use client";

import { useRef } from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";
import { HeroBackground } from "@/components/hero-background";
import { WordCycler } from "@/components/word-cycler";

/* ─── amigo.ai: curtain reveal per headline line ─────────────────────────── */
function RevealLine({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden leading-[inherit]">
      <motion.span
        className="block"
        initial={{ y: "106%", rotate: 0.4 }}
        animate={{ y: "0%", rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 62,
          damping: 16,
          delay,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ─── lovart.ai: blur-fade in for body copy & CTA ───────────────────────── */
function BlurFade({
  children,
  delay = 0,
  y = 22,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
        delay,
        filter: { duration: 0.55, delay },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const borderRadius = useTransform(scrollYProgress, [0, 0.7], [0, 28]);
  const scale        = useTransform(scrollYProgress, [0, 0.7], [1, 0.93]);
  const marginTop    = useTransform(scrollYProgress, [0, 0.7], ["0px", "10px"]);

  return (
    <div ref={containerRef} className="relative h-[150svh]">
      <motion.section
        style={{ borderRadius, scale, marginTop, overflow: "hidden" }}
        className="sticky top-0 h-svh relative flex flex-col justify-center px-6"
      >
      <HeroBackground />

      {/* subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.6)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.6)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-4xl flex flex-col items-center text-center gap-6">

        {/* ── Headline: amigo curtain reveal, line by line ─────────────────── */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.12] text-foreground">
          <RevealLine delay={0.05}>
            curious about <WordCycler />.
          </RevealLine>
        </h1>

        {/* ── Body copy: lovart blur-fade ───────────────────────────────────── */}
        <BlurFade delay={0.42} y={18}>
          <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            we&apos;re a small team out of bangalore building tools we wish existed.
            right now that&apos;s mimicode — an AI coding tool that lives in your editor,
            not in a chat tab. more things on the way.
          </p>
        </BlurFade>

        {/* ── CTA: lovart scale pop ────────────────────────────────────────── */}
        <BlurFade delay={0.58} y={14} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Button size="lg" className="rounded-full gap-2 px-7" asChild>
              <Link href="/portfolio">
                see what we&apos;re building <ArrowRight size={16} weight="bold" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            <Button variant="ghost" size="lg" className="rounded-full gap-2 px-7" asChild>
              <Link href="/manifesto">our story →</Link>
            </Button>
          </motion.div>
        </BlurFade>

      </div>
      </motion.section>
    </div>
  );
}
