import { Navbar } from "@/components/navbar";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Pen } from "@/components/pen";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community — Curious Engine",
  description: "A community for builders, engineers, and founders in Bangalore. No gatekeepers, no permission needed. Start it, build it, ship it.",
  alternates: { canonical: "https://curiousengine.org/community" },
  openGraph: {
    url: "https://curiousengine.org/community",
    title: "Community — Curious Engine",
    description: "Builders who move without asking. A free, open community for engineers, founders, and makers in Bangalore and beyond.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community — Curious Engine",
    description: "Builders who move without asking. Free, open, no gatekeepers.",
  },
};

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">community</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight max-w-2xl">
              builders who move <Pen>without asking.</Pen>
            </h1>
            <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
              curious engine is a community for engineers, founders, and builders who are done waiting
              for permission. the only rules here are basic human decency. everything else — start it,
              build it, ship it.
            </p>
            <div className="flex gap-3 pt-2">
              <Button size="lg" className="rounded-full gap-2 px-7" asChild>
                <Link href="mailto:hello@curiousengine.org">join the community →</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* What the community is */}
        <div className="px-6 py-20 border-b border-border">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
                what it <Pen>actually is</Pen>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                a network of builders based in bangalore and beyond. some are working on side projects,
                some are founding companies, some are just getting started. what they have in common
                is they&apos;re making things instead of waiting.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                inside the community you can start projects, find collaborators, get funding, attend
                events, and connect with people solving the same problems you are. no committee
                approves your next step. you just take it.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px border border-border rounded-xl overflow-hidden bg-border">
              {[
                { value: "free", label: "to join" },
                { value: "0%", label: "equity taken" },
                { value: "BLR", label: "home base" },
                { value: "open", label: "to everyone building" },
              ].map((s) => (
                <div key={s.label} className="bg-background flex flex-col justify-center px-6 py-8 gap-1">
                  <span className="text-2xl font-semibold tracking-tight">{s.value}</span>
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="px-6 py-20 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">the model</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">your authority, <Pen>your call</Pen></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "no permission culture",
                  body: "want to start something? start it. want to collaborate? reach out directly. the community doesn't have approval processes. it has people who act.",
                },
                {
                  title: "show the work",
                  body: "the expectation is simple: build and share. document what you're making. the funding, the connections, the opportunities — they follow builders who are visibly shipping.",
                },
                {
                  title: "light moderation, heavy autonomy",
                  body: "moderation exists to keep the space functional and respectful. that's all. the community doesn't tell you what to build, how fast, or who to work with.",
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

        {/* Links to programs and events */}
        <div className="px-6 py-20 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">what&apos;s inside</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "funding programs",
                  desc: "short grants based on what you ship. donated funds, no equity, transparent criteria.",
                  href: "/programs",
                  cta: "learn how funding works →",
                },
                {
                  title: "events",
                  desc: "in-person meetups, hack sessions, and demo nights in bangalore.",
                  href: "/events",
                  cta: "see upcoming events →",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-8 hover:border-foreground/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                  <span className="text-sm font-medium group-hover:text-muted-foreground transition-colors">{item.cta}</span>
                </Link>
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
