import { Navbar } from "@/components/navbar";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Enterprises — Curious Engine",
  description: "Custom deployments and partnerships across the Curious Engine portfolio.",
};

const offerings = [
  {
    label: "mimicode for teams",
    body: "mimicode is built for individual engineers, but we've had teams ask for shared context, org-level config, and self-hosted deployments. if your team is big enough to need that, we'll talk.",
  },
  {
    label: "custom integrations",
    body: "if your stack has specific requirements — internal models, private repos, custom auth flows — we can build for that. we don't do it out of the box. we do it when it makes sense.",
  },
  {
    label: "portfolio partnerships",
    body: "if there's a strategic fit between your business and something in our portfolio, we're open to a conversation. no cold decks. just tell us what you're thinking.",
  },
  {
    label: "tooling consultancy",
    body: "occasionally we advise engineering teams on their AI tooling choices. we're opinionated and we'll tell you what we actually think, not what you want to hear.",
  },
];

const notUs = [
  "volume licensing with a 60-page MSA and a 3-month negotiation",
  "whitelabelled versions of our products that lose everything that makes them good",
  "integrations that compromise the core product experience for individual users",
];

export default function EnterprisesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">for enterprises</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              our tools,<br />
              <span className="text-muted-foreground font-normal">at your scale.</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              we&apos;re a small team. we don&apos;t have an enterprise sales motion. but if something
              in our portfolio is genuinely useful at scale — we&apos;re willing to make it work.
            </p>
            <div className="pt-2">
              <Button size="lg" className="rounded-md" asChild>
                <Link href="mailto:hello@curiousengine.com">reach out →</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Offerings */}
        <div className="px-6 py-20 border-b border-border">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">what&apos;s available</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">things we can actually do</h2>
            </div>
            <div className="flex flex-col gap-10">
              {offerings.map((item) => (
                <div key={item.label} className="flex flex-col gap-3">
                  <Separator />
                  <h3 className="text-base font-semibold pt-4">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What we won't do */}
        <div className="px-6 py-20 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-3xl flex flex-col gap-8">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">honesty</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">what we won&apos;t do</h2>
            </div>
            <ul className="flex flex-col gap-3">
              {notUs.map((line, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 size-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-6">
              if what you need is outside that and still sounds reasonable, email us and we&apos;ll tell you
              honestly if we can help. <a href="mailto:hello@curiousengine.com" className="text-foreground hover:underline underline-offset-4">hello@curiousengine.com</a>
            </p>
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
