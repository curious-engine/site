import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Pen } from "@/components/pen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto — Curious Engine",
  description: "Why we exist, what annoys us, and what we're trying to build about it.",
};

const sections: { index: string; heading: React.ReactNode; body: string[] }[] = [
  {
    index: "01",
    heading: <>it started with <Pen>annoyance</Pen></>,
    body: [
      "most things we've built started the same way. something bugged us. we looked around for something that fixed it. nothing did. so we built it ourselves.",
      "curious engine is that pattern, turned into a company.",
      "we're not here because we spotted a market gap or ran a TAM analysis. we're here because we kept building things and at some point it made sense to give the whole operation a name.",
    ],
  },
  {
    index: "02",
    heading: "we don't think AI should be your co-pilot",
    body: [
      "this is the thing that annoys us most right now. every AI coding tool is trying to be your pair programmer. suggesting things you didn't ask for. debating architecture. picking approaches. volunteering opinions.",
      "we think that's wrong. not just wrong in principle — wrong in practice. the more an AI does the thinking for you, the worse a programmer you become. the joy of it is figuring things out. that's the whole point.",
      "mimicode is our answer to that. it's a tool in the unix sense — a rubber duck that can actually run commands. you write a question in a file. you save it. the answer appears below a divider. that's it. no chat tab. no sidebar. no opinion on what you should build.",
    ],
  },
  {
    index: "03",
    heading: <>we build things we&apos;d <Pen>actually use</Pen></>,
    body: [
      "this one sounds obvious but it's surprisingly rare.",
      "a lot of software gets built by people who understand the market but don't use the product. we do the opposite — we build things we use every day and then see if other people want to use them too.",
      "if we stop using it, we stop building it. and if we can't stop using it, we keep making it better until it's exactly what we need.",
    ],
  },
  {
    index: "04",
    heading: "we're not going anywhere",
    body: [
      "we don't have a fund with a 10-year life. no LPs asking for distributions. no exit timeline.",
      "when we build something, we're planning to own it for a long time. that changes how we make decisions. we're not optimising for a series A or an acquisition — we're optimising for a product that people actually love using in five years.",
      "it also means we can say no to stuff. no to bad partnerships. no to moving fast on the wrong thing. no to the kind of growth that hollows a product out.",
    ],
  },
  {
    index: "05",
    heading: <>curiosity is the <Pen>only filter</Pen></>,
    body: [
      "we work in things we find genuinely interesting. that's it.",
      "we're not trying to be in every vertical. we're not chasing whatever the hot space is right now. if we're not curious about it — like, actually curious, losing-sleep curious — we're not building it.",
      "alvin puts it well on his website: \"curiosity doesn't kill the cat but it sure as hell makes it stronger.\" that's more or less the thesis.",
    ],
  },
  {
    index: "06",
    heading: "what we're actually trying to do",
    body: [
      "build a small number of things really well. keep them around for a long time. hire people who care about the work, not the optics.",
      "and keep asking questions we can't stop thinking about.",
      "that's it. no grand vision deck. no category-defining nonsense. just two builders from bangalore who got really annoyed about something and decided to fix it. if that sounds like you, we'd love to talk.",
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
              our <Pen>story</Pen>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              why we exist, what annoys us, and what we&apos;re trying to build about it.
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
                if you made it this far and something here resonated — just email us. hello@curiousengine.com.
                we&apos;re pretty responsive.
              </p>
              <div className="flex items-center gap-6 pt-1">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium">Alvin Liju</span>
                  <a href="https://alvinliju.me" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">alvinliju.me</a>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium">Paulyn</span>
                  <a href="https://paulyn.lol" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">paulyn.lol</a>
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
