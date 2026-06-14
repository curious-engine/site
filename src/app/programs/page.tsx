import { Navbar } from "@/components/navbar";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Pen } from "@/components/pen";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funding Programs — Curious Engine",
  description: "Short grants for builders distributed based on what you actually ship. No pitch deck. No equity.",
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">funding programs</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight max-w-2xl">
              funding that follows <Pen>the work.</Pen>
            </h1>
            <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
              we distribute donated funds to builders based on productivity — meaning what you&apos;ve
              actually shipped. no pitch deck. no equity. no investor relationship. just fuel for
              people who are already moving.
            </p>
            <div className="flex gap-3 pt-2">
              <Button size="lg" className="rounded-full gap-2 px-7" asChild>
                <Link href="mailto:hello@curiousengine.org">apply for funding →</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="px-6 py-20 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">how it works</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">simple criteria. <Pen>real money.</Pen></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  step: "01",
                  title: "apply",
                  body: "tell us what you're building and show us the work so far. a github repo, a demo, a changelog. something real. no deck required.",
                },
                {
                  step: "02",
                  title: "ship",
                  body: "keep building. document your progress openly. the distribution criteria are simple: active builders who are visibly shipping get funded. stalled projects don't.",
                },
                {
                  step: "03",
                  title: "get funded",
                  body: "funds are distributed as short grants — not a salary, not an investment. no equity taken, no strings attached. the only expectation is that you keep building.",
                },
              ].map((v) => (
                <div key={v.step} className="flex flex-col gap-3">
                  <Separator />
                  <span className="text-xs font-mono text-muted-foreground pt-4">{v.step}</span>
                  <h3 className="text-base font-semibold">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What we fund */}
        <div className="px-6 py-20 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">who this is for</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">builders at any stage</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "solo engineers",
                  desc: "working on a project in your spare time. you've got the skills, you're making progress, but the money pressure is real. this is designed for you.",
                },
                {
                  title: "early founders",
                  desc: "zero revenue, pre-validation, but the idea is solid and you're already building. we fund the work, not the pitch.",
                },
                {
                  title: "open source maintainers",
                  desc: "you're shipping useful software that people actually use but there's no business model attached yet. we support that kind of work.",
                },
                {
                  title: "student builders",
                  desc: "you're in college or recently out. you have time and skills but not capital. no credentials required here — just show the work.",
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-8">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="px-6 py-20 border-b border-border">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">questions</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">funding FAQ</h2>
            </div>
            <div className="flex flex-col gap-6">
              {[
                {
                  q: "where does the money come from?",
                  a: "entirely from donations. curious engine is a non-profit. we don't raise VC funds or make returns. donors support the mission and the funds go directly to builders.",
                },
                {
                  q: "do you take equity?",
                  a: "no. this is a grant, not an investment. we take nothing back. no equity, no revenue share, no future obligation.",
                },
                {
                  q: "how much can i get?",
                  a: "amounts vary based on available funds and where you are in your build. we're transparent about what's in the pool. this is fuel money, not a salary — enough to reduce the pressure while you're building.",
                },
                {
                  q: "what counts as 'productivity'?",
                  a: "shipping things. commits with substance, deployed builds, documented progress, demos. we're not counting vanity metrics. we want to see real forward movement on the thing you said you'd build.",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <Separator />
                  <h3 className="text-base font-semibold pt-4">{item.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
