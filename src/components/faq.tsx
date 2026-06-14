"use client";

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
    a: "curious engine is a non-profit organisation based in bangalore. we help engineers, builders, and founders break into the market — through funding, events, and community. the barrier between a good idea and a working product shouldn't be money or connections. we work to remove it.",
  },
  {
    q: "how does the funding work?",
    a: "funding comes entirely from donations. we distribute it based on productivity — meaning what you've actually shipped, not what you've promised. there's no pitch deck required, no equity taken, no investor relationship. you apply, you build, and the funds follow the work.",
  },
  {
    q: "who can apply?",
    a: "anyone building something. engineers working on side projects, founders at zero revenue, solo builders with an idea they can't let go of. if you're making something real and you can show the work, you can apply. we don't care about credentials.",
  },
  {
    q: "do you take equity or have any conditions?",
    a: "no. we're a non-profit. we don't take equity, we don't take a cut, we don't ask for anything back. the funds are a grant, not an investment. the only thing we ask is that you keep building.",
  },
  {
    q: "what kind of events do you run?",
    a: "in-person events in bangalore, run by the head of curious engine. think workshops, builder meetups, demo nights, and open hack sessions. the goal is simple — put builders in the same room and get out of the way. no formal structure, no permission needed to show up.",
  },
  {
    q: "what does 'no permission needed' mean?",
    a: "it's our core philosophy. inside the curious engine community, you don't ask permission to take action — you act, then report. the only authority is moderation for basic community rules. everything else is up to you. if you want to start a project, organise something, or collaborate with someone, just do it.",
  },
  {
    q: "where are you based?",
    a: "bangalore, india. events happen here in person. the community and funding programs are open to builders everywhere, but if you're in bangalore — come to the events. there's no substitute for being in the room.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 px-6 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">common questions</p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            things people ask us
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="flex flex-col gap-2">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.06 }}
            >
              <AccordionItem
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
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
