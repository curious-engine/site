import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HeroBackground } from "@/components/hero-background";
import { WordCycler } from "@/components/word-cycler";
import { Pen } from "@/components/pen";

export function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col justify-center px-6 overflow-hidden">
      <HeroBackground />
      {/* subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.6)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.6)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-4xl flex flex-col items-center text-center gap-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.08] text-white">
          curious about <WordCycler />.
          <br />
          <span className="text-white/60 font-normal">building <Pen>what&rsquo;s next.</Pen></span>
        </h1>

        <p className="max-w-xl text-base sm:text-lg text-white/70 leading-relaxed">
          we&apos;re a small team out of bangalore building tools we wish existed.
          right now that&apos;s mimicode — an AI coding tool that lives in your editor,
          not in a chat tab. more things on the way.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <Button size="lg" className="rounded-md gap-2 px-6" asChild>
            <Link href="/portfolio">
              see what we&apos;re building <ArrowRight size={16} weight="bold" />
            </Link>
          </Button>
          <Button variant="ghost" size="lg" className="rounded-md text-white/70 gap-2 px-6" asChild>
            <Link href="/manifesto">our story →</Link>
          </Button>
        </div>

      </div>

    </section>
  );
}
