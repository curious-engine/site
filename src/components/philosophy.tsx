"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const paragraphs = [
  `we don't build tools that think for you. we build tools that make you think better. the best engineers stay curious — not because they have to, but because they can't help it. curiosity doesn't replace skill. it sharpens it.`,
  `most software is built by people who never use it. we build things we reach for every day. when the problem is yours, the solution is better. that's not a philosophy we chose — it's the only way we know how to work.`,
  `we're not a lab. we don't do three-year roadmaps. we build something, ship it, watch what happens, and fix it fast. the gap between an idea and working software should be hours, not quarters.`,
  `everything we make starts with a question we couldn't stop thinking about. that's the engine — not funding, not market research, not a pitch deck. just two people who can't leave a problem alone.`,
];

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const paraEls = Array.from(
      section.querySelectorAll<HTMLElement>("[data-para]")
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=3000",
        scrub: 0.8,
        pin: true,
        anticipatePin: 1,
      },
    });

    paraEls.forEach((para, i) => {
      const words = para.querySelectorAll<HTMLElement>(".word");
      tl.fromTo(
        words,
        { opacity: 0.06, filter: "blur(8px)" },
        { opacity: 1, filter: "blur(0px)", stagger: 0.03, ease: "none" },
        i === 0 ? 0 : "+=0.12"
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-10">
          what we believe
        </p>
        <div className="flex flex-col gap-8">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              data-para=""
              className="text-lg sm:text-xl font-medium leading-relaxed tracking-tight"
            >
              {text.split(/(\s+)/).map((chunk, j) =>
                /^\s+$/.test(chunk) ? (
                  chunk
                ) : (
                  <span key={j} className="word inline-block" style={{ opacity: 0.06 }}>
                    {chunk}
                  </span>
                )
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
