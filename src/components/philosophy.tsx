"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const paragraphs = [
  `you don't need permission to build. the best thing that ever happened to software was the internet — it removed the gatekeepers. we exist to remove the ones that are left. no committee. no approval process. just the work, and the people doing it.`,
  `most builders never make it to market — not because they lack skill, but because they lack the first connection, the first validation, the first few hundred dollars that makes the thing feel real. that gap is artificial and we're here to close it.`,
  `the funding we distribute isn't a salary and it's not a venture round. it's fuel. it goes to people who are actually shipping — distributed based on what you've built, not what you've promised. donated funds, transparent criteria, no equity taken. no pitch deck. no TAM slide. just work.`,
  `we run events because the internet can't replace a room full of people who care about the same thing. you'll meet your next co-founder there. your next collaborator. maybe just the person who tells you your idea isn't crazy. the community is the engine.`,
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
