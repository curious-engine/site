import type { ComponentType } from "react";
import Link from "next/link";
import { ArrowUpRight, Brain, Terminal } from "@phosphor-icons/react/dist/ssr";
import { companies, type CompanyIcon } from "@/content/companies";

const iconMap = {
  terminal: Terminal,
  brain: Brain,
} satisfies Record<CompanyIcon, ComponentType<{ size?: number; className?: string }>>;

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">our portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              what we&apos;ve built
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
            a growing collection of products and companies born out of curious engine &mdash; each one solving a real problem we or our community ran into.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {companies.map((c) => {
            const Icon = iconMap[c.icon];
            return (
              <Link
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col md:flex-row md:items-start gap-8 rounded-xl border border-border bg-card p-8 hover:border-foreground/30 transition-colors duration-200"
              >
                {c.status === "beta" && (
                  <span className="absolute top-6 right-6 text-[10px] font-medium uppercase tracking-widest text-muted-foreground bg-muted rounded-full px-2 py-0.5">
                    beta
                  </span>
                )}

                <div className="shrink-0 size-12 rounded-xl border border-border bg-muted flex items-center justify-center">
                  <Icon size={22} className="text-foreground" />
                </div>

                <div className="flex flex-col gap-4 flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-semibold leading-snug">{c.name}</h3>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                        {c.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{c.tagline}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{c.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-6">
                    {c.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="mt-1 size-1 rounded-full bg-foreground/40 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors shrink-0 self-end md:self-start mt-1">
                  visit {c.href.replace("https://", "")} <ArrowUpRight size={12} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
