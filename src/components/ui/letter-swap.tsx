"use client";

import { useState } from "react";
import {
  AnimationOptions,
  motion,
  stagger,
  useAnimate,
} from "framer-motion";
import { debounce } from "lodash";
import { cn } from "@/lib/utils";

interface TextProps {
  label: string;
  reverse?: boolean;
  transition?: AnimationOptions;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | number;
  className?: string;
  onClick?: () => void;
}

export function LetterSwapForward({
  label,
  reverse = true,
  transition = { type: "spring", duration: 0.7 } as AnimationOptions,
  staggerDuration = 0.03,
  staggerFrom = "first",
  className,
  onClick,
}: TextProps) {
  const [scope, animate] = useAnimate();
  const [blocked, setBlocked] = useState(false);

  const mergeTransition = (base: AnimationOptions) => ({
    ...base,
    delay: stagger(staggerDuration, { from: staggerFrom }),
  });

  const hoverStart = () => {
    if (blocked) return;
    setBlocked(true);

    animate(".letter", { y: reverse ? "100%" : "-100%" }, mergeTransition(transition)).then(
      () => {
        animate(".letter", { y: 0 }, { duration: 0 }).then(() =>
          setBlocked(false)
        );
      }
    );

    animate(
      ".letter-secondary",
      { top: "0%" },
      mergeTransition(transition)
    ).then(() => {
      animate(
        ".letter-secondary",
        { top: reverse ? "-100%" : "100%" },
        { duration: 0 }
      );
    });
  };

  return (
    <motion.span
      ref={scope}
      className={cn("relative inline-flex overflow-hidden", className)}
      onHoverStart={hoverStart}
      onClick={onClick}
    >
      <span className="sr-only">{label}</span>
      {label.split("").map((letter, i) => (
        <span key={i} className="relative inline-flex overflow-hidden">
          <motion.span className="letter inline-flex">
            {letter === " " ? "\u00a0" : letter}
          </motion.span>
          <motion.span
            className="letter-secondary absolute left-0"
            style={{ top: reverse ? "-100%" : "100%" }}
          >
            {letter === " " ? "\u00a0" : letter}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function LetterSwapPingPong({
  label,
  reverse = true,
  transition = { type: "spring", duration: 0.7 } as AnimationOptions,
  staggerDuration = 0.03,
  staggerFrom = "first",
  className,
  onClick,
}: TextProps) {
  const [scope, animate] = useAnimate();
  const [isHovered, setIsHovered] = useState(false);

  const mergeTransition = (base: AnimationOptions) => ({
    ...base,
    delay: stagger(staggerDuration, { from: staggerFrom }),
  });

  const hoverStart = debounce(
    () => {
      if (isHovered) return;
      setIsHovered(true);
      animate(".letter", { y: reverse ? "100%" : "-100%" }, mergeTransition(transition));
      animate(".letter-secondary", { top: "0%" }, mergeTransition(transition));
    },
    100,
    { leading: true, trailing: true }
  );

  const hoverEnd = debounce(
    () => {
      setIsHovered(false);
      animate(".letter", { y: 0 }, mergeTransition(transition));
      animate(
        ".letter-secondary",
        { top: reverse ? "-100%" : "100%" },
        mergeTransition(transition)
      );
    },
    100,
    { leading: true, trailing: true }
  );

  return (
    <motion.span
      ref={scope}
      className={cn("relative inline-flex overflow-hidden", className)}
      onHoverStart={hoverStart}
      onHoverEnd={hoverEnd}
      onClick={onClick}
    >
      <span className="sr-only">{label}</span>
      {label.split("").map((letter, i) => (
        <span key={i} className="relative inline-flex overflow-hidden">
          <motion.span className="letter inline-flex">
            {letter === " " ? "\u00a0" : letter}
          </motion.span>
          <motion.span
            className="letter-secondary absolute left-0"
            style={{ top: reverse ? "-100%" : "100%" }}
          >
            {letter === " " ? "\u00a0" : letter}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
