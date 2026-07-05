import { Navbar } from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Pen } from "@/components/pen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Curious Engine",
  description: "A look at the companies and products we've built at Curious Engine.",
  alternates: { canonical: "https://curiousengine.org/portfolio" },
  openGraph: {
    url: "https://curiousengine.org/portfolio",
    title: "Portfolio — Curious Engine",
    description: "A look at the companies and products we've built at Curious Engine.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Curious Engine",
    description: "A look at the companies and products we've built at Curious Engine.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Page header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">our portfolio</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight max-w-2xl">
              companies we&apos;ve <Pen>built.</Pen>
            </h1>
            <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
              a growing collection of products and companies that came out of curious engine. each one started as a real problem worth solving — and grew from there.
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
