import { Navbar } from "@/components/navbar";
import { Careers } from "@/components/careers";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Pen } from "@/components/pen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer — Curious Engine",
  description: "Help run Curious Engine. Open volunteer and part-time roles for people who care.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Page header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">get involved</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight max-w-2xl">
              help us <Pen>run this.</Pen>
              <br />
              <span className="text-muted-foreground font-normal">no experience required. just care.</span>
            </h1>
            <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
              we&apos;re a non-profit. the people who help run curious engine are volunteers and
              part-timers who believe in what we&apos;re building. there&apos;s no hierarchy —
              you own what you work on.
            </p>
            <div className="flex flex-wrap gap-8 pt-2">
              {[
                { value: "volunteer", label: "all roles" },
                { value: "bangalore", label: "home base" },
                { value: "remote ok", label: "for most roles" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="text-base font-semibold tracking-tight">{s.value}</span>
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Careers />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
