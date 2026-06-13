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
  description: "Two builders from bangalore. one product live. more on the way.",
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
              two <Pen>builders.</Pen>
              <br />
              <span className="text-muted-foreground font-normal">one product. more coming.</span>
            </h1>
            <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
              curious engine is a small holding company from bangalore. we build tools we
              actually want to use and hold onto them for as long as they&apos;re worth holding.
              right now that&apos;s mimicode. more things on the way.
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
                we were both annoyed at the same thing — AI coding tools that want to be your
                pair programmer, constantly jumping in, suggesting things you didn&apos;t ask for,
                making you feel like the junior dev on your own project.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                so we built mimicode. it lives in your editor, answers when asked, and shuts
                up otherwise. and once we had it, we needed a home to keep building from.
                that&apos;s curious engine.
              </p>
              <Link
                href="/manifesto"
                className="text-sm font-medium hover:text-muted-foreground transition-colors mt-2 w-fit"
              >
                read the full story →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-px border border-border rounded-xl overflow-hidden bg-border">
              {[
                { value: "2024", label: "started building" },
                { value: "1", label: "product live" },
                { value: "2", label: "founders" },
                { value: "BLR", label: "based in" },
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
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">how we think</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">the stuff we <Pen>actually</Pen> care about</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "build things you'd use",
                  body: "sounds obvious. surprisingly rare. we don't build for markets, we build for ourselves and then see who else wants it.",
                },
                {
                  title: "hold, don't flip",
                  body: "no fund, no LPs, no exit timeline. if we build it, we keep it. that changes every decision downstream — for the better.",
                },
                {
                  title: "curiosity first",
                  body: "we only work on things we actually find interesting. if we're not losing sleep about it, we're probably not the right people to build it.",
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
