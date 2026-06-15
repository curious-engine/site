import { Navbar } from "@/components/navbar";
import { Team } from "@/components/team";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Pen } from "@/components/pen";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Curious Engine",
  description: "A non-profit for builders, engineers, and founders. We close the gap between an idea and the market. Based in Bangalore, open to everyone.",
  alternates: { canonical: "https://curiousengine.org/about" },
  openGraph: {
    url: "https://curiousengine.org/about",
    title: "About — Curious Engine",
    description: "A non-profit for builders, engineers, and founders in Bangalore. No gatekeepers. No equity taken. We close the gap between an idea and the market.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Curious Engine",
    description: "A non-profit for builders in Bangalore. No gatekeepers, no equity, no permission needed.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Page header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">about</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight max-w-2xl">
              a non-profit for <Pen>builders.</Pen>
              <br />
              <span className="text-muted-foreground font-normal">no gatekeepers. no permission needed.</span>
            </h1>
            <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
              curious engine helps engineers, founders, and builders break into the market through
              short funding, events, and community. based in bangalore. open to everyone building something real.
            </p>
          </div>
        </div>

        {/* Origin story */}
        <div className="px-6 py-20 border-b border-border">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
                how it <Pen>started</Pen>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                we kept watching builders around us get stuck — not because they lacked skill or ideas,
                but because the path to market has too many locks on it. investors want traction.
                networks are closed. validation feels impossible without already being inside.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                so we decided to build the thing that removes those locks. not another accelerator
                with cohorts and demo days. a non-profit with a simple mission: put resources,
                connections, and community in front of builders who are already doing the work.
              </p>
              <Link
                href="/manifesto"
                className="text-sm font-medium hover:text-muted-foreground transition-colors mt-2 w-fit"
              >
                read the full manifesto →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-px border border-border rounded-xl overflow-hidden bg-border">
              {[
                { value: "2024", label: "started building" },
                { value: "BLR", label: "based in" },
                { value: "free", label: "to join" },
                { value: "0%", label: "equity taken" },
              ].map((s) => (
                <div key={s.label} className="bg-background flex flex-col justify-center px-6 py-8 gap-1">
                  <span className="text-2xl font-semibold tracking-tight">{s.value}</span>
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="px-6 py-20 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">how we operate</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">the principles we <Pen>actually</Pen> follow</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "autonomy first",
                  body: "you don't ask permission here. you act, then share what you did. the only authority is basic community moderation. everything else is yours.",
                },
                {
                  title: "funding follows work",
                  body: "donated funds are distributed based on what you've shipped. no pitch deck, no equity, no investor pressure. just show the work.",
                },
                {
                  title: "community is the point",
                  body: "the events, the connections, the room full of builders — that's not a side effect of what we do. it's the whole thing.",
                },
              ].map((v) => (
                <div key={v.title} className="flex flex-col gap-3">
                  <Separator />
                  <h3 className="text-base font-semibold pt-4">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
