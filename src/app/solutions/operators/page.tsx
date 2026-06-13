import { Navbar } from "@/components/navbar";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Operators — Curious Engine",
  description: "Run a business inside the Curious Engine ecosystem. No blank-page problem.",
};

const whatItLooksLike = [
  {
    label: "you run the day-to-day",
    body: "we don't want to manage a company — we want someone who does. you come in with the operational instinct and the drive. we give you the business to run and the infrastructure to run it on.",
  },
  {
    label: "shared tooling, zero duplication",
    body: "auth, analytics, billing, design — all of it already exists across our portfolio. you're not rebuilding from scratch. you're running something real from day one.",
  },
  {
    label: "equity that makes sense",
    body: "operator arrangements are bespoke. if you're adding meaningful value, we structure compensation to reflect that. come talk to us before assuming the terms.",
  },
  {
    label: "a small group, not a conglomerate",
    body: "we're two people. there's no HR, no OKR cycles, no quarterly all-hands. if you want that, this probably isn't your place. if you don't, it probably is.",
  },
];

const goodFit = [
  "you've built or run something before, even informally",
  "you're more interested in making something work than in ideating about it",
  "you're comfortable with ambiguity and don't need a lot of structure handed to you",
  "you want ownership, not just a salary",
  "you're based in bangalore or open to it",
];

export default function OperatorsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">for operators</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              run something<br />
              <span className="text-muted-foreground font-normal">inside the engine.</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              we build companies. sometimes we need people to run them. if you&apos;re a strong operator
              who&apos;s better at making things work than starting them from zero — we should talk.
            </p>
            <div className="pt-2">
              <Button size="lg" className="rounded-md" asChild>
                <Link href="mailto:hello@curiousengine.com">let&apos;s talk →</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* What it looks like */}
        <div className="px-6 py-20 border-b border-border">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">the setup</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">what this actually looks like</h2>
            </div>
            <div className="flex flex-col gap-10">
              {whatItLooksLike.map((item) => (
                <div key={item.label} className="flex flex-col gap-3">
                  <Separator />
                  <h3 className="text-base font-semibold pt-4">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Good fit */}
        <div className="px-6 py-20 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-3xl flex flex-col gap-8">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">who fits</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">you&apos;re probably a good fit if...</h2>
            </div>
            <ul className="flex flex-col gap-3">
              {goodFit.map((line, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 size-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-6">
              there&apos;s no formal application process. send us a note about what you&apos;ve done and what
              kind of thing you&apos;d want to run. <a href="mailto:hello@curiousengine.com" className="text-foreground hover:underline underline-offset-4">hello@curiousengine.com</a>
            </p>
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
