import { Navbar } from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Curious Engine",
  description: "the things we're building right now.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Page header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">what we&apos;re building</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight max-w-2xl">
              one thing, done well.
            </h1>
            <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
              we started with mimicode because it was the thing bugging us the most.
              we&apos;re not trying to build twenty products — we&apos;re trying to build
              one really good one and see what comes after that.
            </p>
          </div>
        </div>

        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
