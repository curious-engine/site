import { Navbar } from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Pen } from "@/components/pen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools — Curious Engine",
  description: "The tools we build for builders.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Page header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">what we build</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight max-w-2xl">
              tools for <Pen>builders,</Pen>
              <br />
              <span className="text-muted-foreground font-normal">built by builders.</span>
            </h1>
            <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
              the things we build start as something we needed ourselves. if it&apos;s useful to us,
              it&apos;s probably useful to others. we build them, share them, and keep making them better.
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
