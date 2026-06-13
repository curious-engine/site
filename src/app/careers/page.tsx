import { Navbar } from "@/components/navbar";
import { Careers } from "@/components/careers";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Pen } from "@/components/pen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Curious Engine",
  description: "we're small and we like it that way. but we're always open to talking to good people.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Page header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">come work with us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight max-w-2xl">
              we&apos;re <Pen>small.</Pen>
              <br />
              <span className="text-muted-foreground font-normal">we like it that way.</span>
            </h1>
            <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
              we don&apos;t have a big team or a fancy office. we have a group chat, a shared love of
              building things, and a lot of problems we want to solve. if that sounds good to you,
              we&apos;d love to talk.
            </p>
            <div className="flex flex-wrap gap-8 pt-2">
              {[
                { value: "small team", label: "on purpose" },
                { value: "bangalore", label: "home base" },
                { value: "remote ok", label: "for the right person" },
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
