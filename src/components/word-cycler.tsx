"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["everything", "community"];

export function WordCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      2800
    );
    return () => clearInterval(id);
  }, []);

  const word = words[index];

  return (
    // ghost "everything" holds the max width so layout never shifts
    <span className="relative inline-flex justify-center">
      <span aria-hidden className="invisible select-none">everything</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={word}
          aria-label={word}
          className="absolute inset-0 inline-flex justify-center"
        >
          {word.split("").map((ch, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden"
              style={{ lineHeight: "inherit" }}
            >
              <motion.span
                className="inline-block"
                initial={{ y: "-110%" }}
                animate={{ y: 0 }}
                exit={{ y: "110%" }}
                transition={{
                  type: "spring",
                  duration: 0.4,
                  delay: i * 0.025,
                }}
              >
                {ch}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
