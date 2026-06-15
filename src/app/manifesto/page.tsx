import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Pen } from "@/components/pen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto — Curious Engine",
  description: "Why Curious Engine exists, what we believe, and how we think the world should work for builders. No gatekeepers. Funding follows the work.",
  alternates: { canonical: "https://curiousengine.org/manifesto" },
  openGraph: {
    url: "https://curiousengine.org/manifesto",
    title: "Manifesto — Curious Engine",
    description: "Why we exist, what we believe, and how we think the world should work for builders. No gatekeepers. Funding follows the work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manifesto — Curious Engine",
    description: "Why we exist and what we believe. No gatekeepers. Funding follows the work.",
  },
};

const sections: { index: string; heading: React.ReactNode; body: string[] }[] = [
  {
    index: "01",
    heading: <>it started with <Pen>a barrier</Pen></>,
    body: [
      "every engineer has had the moment. the idea is clear. the skills are there. but the path from idea to market is littered with gatekeepers — investors who want traction before they fund you, networks you don't have access to, validation you can't get because you're not already inside.",
      "curious engine is our answer to that. not an accelerator, not a VC, not a networking event. a non-profit that exists to close the gap between a builder and their first real step.",
    ],
  },
  {
    index: "02",
    heading: "you don't need permission",
    body: [
      "this is the core of everything we do. the traditional model asks you to wait — wait for funding, wait for the right connection, wait until the idea is validated by someone with more credentials than you.",
      "we think that model is broken. not just inefficient — actively harmful. the best builders we know built first and asked for permission later. the worst advice they ever got was to wait.",
      "inside curious engine, the default answer is go. you want to start a project, organise something, collaborate with someone? do it. the only rules are community moderation basics. everything else is up to you.",
    ],
  },
  {
    index: "03",
    heading: <>funding should follow <Pen>the work</Pen></>,
    body: [
      "we distribute funds from donations. no equity, no returns, no investor relationship. the only thing we track is what you've shipped.",
      "we call it productivity-based distribution. if you're building, documenting it, shipping things — the funding follows. if you're stuck on a deck and not actually making anything, it doesn't. simple.",
      "this isn't a grant application process. it's closer to a stipend for people already doing the work. we want to remove the money anxiety, not replace it with a different kind of paperwork.",
    ],
  },
  {
    index: "04",
    heading: <>community is the <Pen>actual product</Pen></>,
    body: [
      "we run in-person events in bangalore. workshops, demo nights, open hack sessions. the format is loose — because loose formats produce better conversations than structured ones.",
      "the goal is to put builders in the same room. you'll find your next co-founder at one of these. or someone who's solved the exact problem you're stuck on. or just confirmation that the thing you're building isn't crazy.",
      "the internet is good for a lot of things. it is not good for the specific moment when you look across a table at someone and realise they're trying to build the same future you are.",
    ],
  },
  {
    index: "05",
    heading: "we exist for the long run",
    body: [
      "we're not trying to graduate you into a VC round. we're not measuring success by how many companies we've 'accelerated'. we want to build a permanent community of builders in bangalore and beyond — one that compounds over years, not quarters.",
      "the people who went through this thing in year one should still be connected to the people going through it in year five. that's the value. the community itself.",
    ],
  },
  {
    index: "06",
    heading: "what we're actually asking you to do",
    body: [
      "show up. build something. document the work. connect with the people around you.",
      "that's it. no grand vision deck. no category pitch. no proof of market. just make the thing, show us it's moving, and we'll make sure the resources are there.",
      "if that sounds like you — we'd love to have you.",
    ],
  },
];

export default function ManifestoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">manifesto</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              why we <Pen>exist</Pen>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              what we believe, and how we think the world should work for builders.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-20">
          <div className="mx-auto max-w-3xl flex flex-col gap-20">
            {sections.map((s) => (
              <div key={s.index}>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-muted-foreground">{s.index}</span>
                    <Separator className="flex-1" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
                    {s.heading}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {s.body.map((p, j) => (
                      <p key={j} className="text-base text-muted-foreground leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Closing */}
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                if something here resonated — come to an event, apply for funding, or just email us.
                hello@curiousengine.org. we&apos;re pretty responsive.
              </p>
              <div className="flex items-center gap-6 pt-1">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium">Paulyn</span>
                  <a href="https://paulyn.lol" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">paulyn.lol</a>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium">Alvin Liju</span>
                  <a href="https://alvinliju.me" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">alvinliju.me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
