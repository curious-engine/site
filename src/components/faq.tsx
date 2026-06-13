"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "what is curious engine?",
    a: "we're a small holding company — two builders who kept making things and eventually decided to give the whole operation a name. right now we have one product (mimicode) and a lot of ideas. we build things we actually want to use, and we hold them for as long as they're worth holding.",
  },
  {
    q: "wait, a holding company? aren't those for old money?",
    a: "ha, yeah, the word sounds stuffy. but the structure just means we own what we build instead of raising a fund and returning it to LPs. no clock running down, no forced exits. we build it, we keep it, we keep making it better.",
  },
  {
    q: "what's mimicode?",
    a: "mimicode is an AI coding tool that lives inside your editor. you open a file called code.mimi, write a question, save it, and the answer appears below a divider — in the same file. no chat window. no switching tabs. one binary, zero dependencies. it's in beta and you can try it right now at mimicode.xyz.",
  },
  {
    q: "are you looking for people to work with?",
    a: "always. if you're building something interesting, or you want to build something interesting with us, just email hello@curiousengine.com. we don't have a formal process — we just talk to people who seem cool and go from there.",
  },
  {
    q: "can i pitch you something?",
    a: "sure, but don't stress about it being polished. we care a lot more about what you're actually building and why you can't stop thinking about it than whether your deck has a TAM slide. just tell us what it is.",
  },
  {
    q: "where are you based?",
    a: "bangalore, india. we work remotely and keep weird hours. if you're ever in the city though, let's grab a coffee.",
  },
];

/*
 * Images pop out of the section with a 3D spring effect.
 * negative top/left/right values let them bleed outside the section border —
 * the section has no overflow clip so they're fully visible.
 * rotateTo is the resting angle; the animation starts from 3x that for drama.
 */
const FLOATING_IMAGES = [
  { src: "/art/heart.png",  size: 96,  top: "-10%",  left: "2%",   rotateTo: -18, delay: 0    },
  { src: "/art/saturn.png", size: 118, top: "-8%",   right: "3%",  rotateTo: 16,  delay: 0.1  },
  { src: "/art/star.png",   size: 82,  top: "40%",   left: "-3%",  rotateTo: 10,  delay: 0.18 },
  { src: "/art/ticket.png", size: 90,  top: "38%",   right: "-2%", rotateTo: -14, delay: 0.12 },
  { src: "/art/shoe.png",   size: 100, bottom: "-8%", right: "6%", rotateTo: 12,  delay: 0.22 },
];

export function FAQ() {
  return (
    /* No overflow-hidden — images bleed outside the section boundaries */
    <section className="relative py-24 px-6 border-t border-border bg-muted/30">
      {FLOATING_IMAGES.map((img, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none select-none absolute z-0 hidden sm:block"
          style={{
            top:    "top"    in img ? img.top    : undefined,
            left:   "left"   in img ? img.left   : undefined,
            right:  "right"  in img ? img.right  : undefined,
            bottom: "bottom" in img ? img.bottom : undefined,
          }}
          initial={{ scale: 0.05, opacity: 0, rotate: img.rotateTo * 3 }}
          whileInView={{ scale: 1, opacity: 0.92, rotate: img.rotateTo }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 14,
            delay: img.delay,
          }}
        >
          <Image
            src={img.src}
            alt=""
            width={img.size}
            height={img.size}
            className="object-contain drop-shadow-xl"
          />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-12">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">common questions</p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            things people ask us
          </h2>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-2">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-foreground/20"
            >
              <AccordionTrigger className="text-base font-medium py-5 hover:no-underline text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
