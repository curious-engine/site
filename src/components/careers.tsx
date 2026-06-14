import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const openRoles = [
  { title: "Community Organiser", team: "Events", location: "Bangalore" },
  { title: "Funding Reviewer", team: "Programs", location: "Remote" },
  { title: "Builder in Residence", team: "Community", location: "Bangalore / Remote" },
  { title: "Content & Docs Volunteer", team: "Growth", location: "Remote" },
];

export function Careers() {
  return (
    <section id="join" className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-md">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">open roles</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              help run the thing
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
            we&apos;re a non-profit. these aren&apos;t jobs — they&apos;re volunteer and part-time roles for people who care about what we&apos;re building and want a hand in it.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border rounded-xl border border-border overflow-hidden">
          {openRoles.map((r) => (
            <Link
              key={r.title}
              href="mailto:hello@curiousengine.org"
              className="group flex items-center justify-between px-6 py-4 bg-card hover:bg-muted transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="text-sm font-medium">{r.title}</span>
                <span className="text-xs text-muted-foreground">{r.team}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-xs text-muted-foreground">{r.location}</span>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <span className="text-xs text-muted-foreground">{openRoles.length} open roles · don&apos;t see a fit? email us anyway.</span>
        </div>
      </div>
    </section>
  );
}
