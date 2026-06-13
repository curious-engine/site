"use client";

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

export function FAQ() {
  return (
    <section className="py-24 px-6 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">common questions</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
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
              <AccordionTrigger className="text-sm font-medium py-5 hover:no-underline text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
