import { Navbar } from "@/components/navbar";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Curious Engine",
  description: "How we build, what we've learned, and where we went wrong.",
};

const mimicodeSections = [
  {
    index: "01",
    heading: "the problem we were actually solving",
    body: [
      "every AI coding tool we tried had the same shape: a chat panel somewhere on the side. you describe the problem, it writes code, you copy it over, it's slightly wrong, you iterate. the model is the center of gravity. you're orbiting it.",
      "we wanted something that felt more like a unix tool. you write a question, you get an answer, you stay in your editor. the model is a lookup — not a collaborator.",
    ],
  },
  {
    index: "02",
    heading: "what we built and how fast",
    body: [
      "first working version: two weekends. it watched a file for a special divider, ran everything above it against an llm, and wrote the response below. that was it.",
      "we used it every day for a month before touching it again. that's the only feedback mechanism we trust — if you're reaching for it, it works. if you're routing around it, it doesn't.",
    ],
  },
  {
    index: "03",
    heading: "shared infrastructure in practice",
    body: [
      "mimicode runs on the same auth, billing, and deployment stack we're building for every curious engine product. we didn't build it in isolation — we built it as the first real test of the infrastructure.",
      "everything we had to do twice became a shared primitive. auth flows, subscription webhooks, error monitoring, deployment pipelines. mimicode was the proof that the infrastructure worked.",
    ],
  },
  {
    index: "04",
    heading: "what we got wrong",
    body: [
      "we overbuilt the first editor integration. spent two weeks on something users never mentioned in a single piece of feedback. shipped it. nobody cared. pulled it back.",
      "the lesson we already knew but had to relearn: if you're building features you expect people to appreciate, you're building the wrong features. build what makes it obviously more useful, then check.",
    ],
  },
  {
    index: "05",
    heading: "where it is now",
    body: [
      "mimicode is live. people use it. it works. we keep making it better based on what we notice, not what we plan.",
      "that's the case study. it's not a hockey stick story yet. it's a thing that works, that we built in a short time, that we're proud of. more on the way.",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">case studies</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              from the field.<br />
              <span className="text-muted-foreground font-normal">what we built and what we learned.</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              we&apos;ve got one product live. so there&apos;s one case study. it&apos;s honest — including the parts
              where we got it wrong. we&apos;ll add more as the portfolio grows.
            </p>
          </div>
        </div>

        {/* Case study: mimicode */}
        <div className="px-6 py-20 border-b border-border">
          <div className="mx-auto max-w-3xl">
            {/* Case study header */}
            <div className="mb-14 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">case study 001</span>
                <span className="text-xs text-muted-foreground">2024 → present</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">mimicode</h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                an AI coding tool that lives in your editor. write a question, save the file, get the answer in-file.
                no chat tab. no sidebar. no opinion about your architecture.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-border rounded-xl overflow-hidden bg-border w-fit">
                {[
                  { value: "2wks", label: "to first build" },
                  { value: "1", label: "product, live" },
                  { value: "2", label: "builders" },
                  { value: "BLR", label: "based in" },
                ].map((s) => (
                  <div key={s.label} className="bg-background flex flex-col items-center justify-center py-5 px-6 gap-1">
                    <span className="text-xl font-semibold tracking-tight">{s.value}</span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-16">
              {mimicodeSections.map((s) => (
                <div key={s.index}>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-muted-foreground">{s.index}</span>
                      <Separator className="flex-1" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight leading-snug">
                      {s.heading}
                    </h3>
                    <div className="flex flex-col gap-4">
                      {s.body.map((p, j) => (
                        <p key={j} className="text-sm text-muted-foreground leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Link out */}
            <div className="mt-16 pt-8 border-t border-border flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">want to see what we built?</p>
              <Button variant="outline" className="rounded-md w-fit" asChild>
                <Link href="https://mimicode.xyz" target="_blank" rel="noopener noreferrer">
                  go to mimicode →
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
