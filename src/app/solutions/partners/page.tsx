import { Navbar } from "@/components/navbar";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners — Curious Engine",
  description: "Strategic partners, service providers, and co-builders in the Curious Engine ecosystem.",
};

const partnerTypes = [
  {
    label: "infrastructure & tooling",
    body: "the platforms and services we run on. if you're building developer infrastructure and want to work with a team that uses their own tools every day — reach out.",
  },
  {
    label: "service providers",
    body: "lawyers, accountants, designers, recruiters who understand early-stage companies. we refer within the ecosystem. if you work with small technical teams and do it well, we want to know you.",
  },
  {
    label: "co-builders",
    body: "people or studios who want to build something alongside us rather than for us. we're not looking for agencies. we're looking for people who care about the output.",
  },
  {
    label: "distribution partners",
    body: "communities, newsletters, platforms that reach developers and builders. if our products fit your audience and you want to work together on that, let's talk.",
  },
];

const currentPartners: { name: string; description: string; url: string }[] = [
  // intentionally empty — we'll populate this as partners come on board
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">partners</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              people who<br />
              <span className="text-muted-foreground font-normal">build with us.</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              we&apos;re early. our partner ecosystem is small and intentional. we&apos;d rather
              work closely with a few people than loosely with many.
            </p>
            <div className="pt-2">
              <Button size="lg" className="rounded-md" asChild>
                <Link href="mailto:hello@curiousengine.com">become a partner →</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Partner types */}
        <div className="px-6 py-20 border-b border-border">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">who we partner with</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">what kinds of partnerships we do</h2>
            </div>
            <div className="flex flex-col gap-10">
              {partnerTypes.map((item) => (
                <div key={item.label} className="flex flex-col gap-3">
                  <Separator />
                  <h3 className="text-base font-semibold pt-4">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current partners or placeholder */}
        <div className="px-6 py-20 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-3xl flex flex-col gap-8">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">current partners</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">who we work with</h2>
            </div>
            {currentPartners.length === 0 ? (
              <div className="border border-dashed border-border rounded-xl px-8 py-12 flex flex-col items-center text-center gap-3">
                <p className="text-sm font-medium">nothing here yet</p>
                <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                  we&apos;re in the process of formalising our first partner relationships.
                  if you want to be among the first, reach out.
                </p>
                <Button variant="outline" size="sm" className="rounded-md mt-2" asChild>
                  <Link href="mailto:hello@curiousengine.com">get in touch</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentPartners.map((p) => (
                  <Link
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-1 p-4 border border-border rounded-xl hover:bg-muted transition-colors"
                  >
                    <span className="text-sm font-medium">{p.name}</span>
                    <span className="text-xs text-muted-foreground leading-snug">{p.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* How to become one */}
        <div className="px-6 py-20 border-b border-border">
          <div className="mx-auto max-w-3xl flex flex-col gap-6">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">process</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">how to become a partner</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              there&apos;s no form. no partnership portal. no tier system.
              email us, tell us who you are, what you&apos;re building or offering, and why you think there&apos;s a fit.
              we respond to everything. <a href="mailto:hello@curiousengine.com" className="text-foreground hover:underline underline-offset-4">hello@curiousengine.com</a>
            </p>
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
