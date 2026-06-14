import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HeroBackground } from "@/components/hero-background";
import { WordCycler } from "@/components/word-cycler";

export function Hero() {
  return (
    <section className="relative h-svh flex flex-col justify-center px-6 overflow-hidden">
      <HeroBackground />

      {/* subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.6)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.6)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-4xl flex flex-col items-center text-center gap-6">

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.12] text-foreground">
          curious about <WordCycler />;<br />
          break barriers.
        </h1>

        <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
          a non-profit for builders, engineers, and founders. validation, short funding, and community — no gatekeepers.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <Button size="lg" className="rounded-full gap-2 px-7" asChild>
            <Link href="/community">
              get involved <ArrowRight size={16} weight="bold" />
            </Link>
          </Button>
          <Button variant="ghost" size="lg" className="rounded-full gap-2 px-7" asChild>
            <Link href="/manifesto">our manifesto →</Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
