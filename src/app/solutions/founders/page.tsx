import { Navbar } from "@/components/navbar";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Founders — Curious Engine",
  description: "Not VC. Not an accelerator. A permanent home for what you're building.",
};

const whatWeOffer = [
  {
    label: "a permanent home",
    body: "we don't flip companies. if we back something, we're in it for as long as it makes sense to be. no fund life, no LP pressure, no exit timeline baked in from day one.",
  },
  {
    label: "shared infrastructure",
    body: "auth, payments, infra, design systems — we've already built it once. you don't start from scratch. you plug in and focus on the thing that's actually yours.",
  },
  {
    label: "two builders on call",
    body: "not advisors who reply in two weeks. alvin and paulyn are active, available, and building their own stuff at the same time. they'll tell you what they actually think.",
  },
  {
    label: "zero opinion on your equity",
    body: "we structure things differently for every company depending on what makes sense. we're not running a template. come talk to us.",
  },
];

const notForYou = [
  "you need a $5M seed round and 18 months of runway to \"figure it out\"",
  "you're looking for a board that'll manage you",
  "you want someone to tell you what to build",
  "you're optimising for a series A in 18 months",
];

export default function FoundersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">for founders</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              a home for what<br />
              <span className="text-muted-foreground font-normal">you&apos;re building.</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              we&apos;re not a VC fund. not an accelerator. not a studio. we&apos;re a small holding company
              that backs founders we believe in and sticks around for the whole thing — not just the parts that look good on a deck.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-md" asChild>
                <Link href="mailto:hello@curiousengine.com">get in touch →</Link>
              </Button>
              <Button variant="ghost" size="lg" className="rounded-md text-muted-foreground" asChild>
                <Link href="/manifesto">read our manifesto</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* What we offer */}
        <div className="px-6 py-20 border-b border-border">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">what you get</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">what working with us actually means</h2>
            </div>
            <div className="flex flex-col gap-10">
              {whatWeOffer.map((item) => (
                <div key={item.label} className="flex flex-col gap-3">
                  <Separator />
                  <h3 className="text-base font-semibold pt-4">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Not for you */}
        <div className="px-6 py-20 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-3xl flex flex-col gap-8">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">honesty</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">this is probably not for you if...</h2>
            </div>
            <ul className="flex flex-col gap-3">
              {notForYou.map((line, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 size-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-6">
              if none of that is you and something here landed — just email us.
              no pitch deck required. no intro needed. <a href="mailto:hello@curiousengine.com" className="text-foreground hover:underline underline-offset-4">hello@curiousengine.com</a>
            </p>
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
