import Link from "next/link";
import { ArrowUpRight, Brain, Terminal } from "@phosphor-icons/react/dist/ssr";

const companies = [
  {
    name: "mimicode",
    tagline: "notebook-first AI coding tool",
    category: "Developer Tools",
    description:
      "Open code.mimi in your editor, write a question, save. The answer lands below a divider in the same file. No chat window. No tab switching. One binary, zero dependencies — and a rubber duck that can search your repo, run commands, and make mechanical edits when you ask.",
    href: "https://mimicode.xyz",
    status: "beta",
    icon: Terminal,
    highlights: [
      "Your editor is the UI — zero context switches",
      "Watch, REPL, TUI, and one-shot modes",
      "Shadow-git undo — your real .git is never touched",
      "Single binary, no Python, no Node, no runtime",
    ],
  },
  {
    name: "plotter",
    tagline: "a canvas for thinking with AI",
    category: "AI Workspace",
    description:
      "Your thinking gets scattered across ChatGPT tabs, Notion pages, Figma comments, and handwritten notes. Plotter brings it all to one infinite canvas. Dump your raw, messy thoughts and an AI agent turns them into a structured visual board — diagrams, groupings, and layout generated for you, so you go from a mess in your head to something you can actually reason about.",
    href: "https://plotter.so",
    status: "beta",
    icon: Brain,
    highlights: [
      "Brain dump → structured visual board in seconds",
      "AI works directly on the canvas, not in a sidebar",
      "Infinite canvas — notes, diagrams, and references in one space",
      "Replaces scattered tabs, AI chats, and sticky notes",
    ],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">what we build</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              tools for the community
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
            we build tools we use ourselves and share freely with the builders we support. mimicode started as a scratch-your-own-itch and grew into something others wanted to use too.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {companies.map((c) => {
            const Icon = c.icon;
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

                {/* Icon */}
                <div className="shrink-0 size-12 rounded-xl border border-border bg-muted flex items-center justify-center">
                  <Icon size={22} className="text-foreground" />
                </div>

                {/* Content */}
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
