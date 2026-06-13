import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const openRoles = [
  { title: "Jr. Researcher", team: "mimicode", location: "Remote" },
  { title: "Head of Growth", team: "mimicode", location: "Remote" },
];

export function Careers() {
  return (
    <section id="careers" className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-md">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">join us</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              build the whole thing, not just a feature
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
            small team, real ownership. you won't be a cog — you'll see how everything connects and have a say in where it goes.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border rounded-xl border border-border overflow-hidden">
          {openRoles.map((r) => (
            <Link
              key={r.title}
              href="#"
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
          <span className="text-xs text-muted-foreground">{openRoles.length} open roles · based in bangalore, working remotely</span>
        </div>
      </div>
    </section>
  );
}
