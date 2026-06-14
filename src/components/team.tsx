import Image from "next/image";
import { GithubLogo, TwitterLogo, LinkedinLogo, Globe, Envelope } from "@phosphor-icons/react/dist/ssr";
import { Pen } from "@/components/pen";
import { libreCaslonText } from "@/lib/fonts";

const team = [
  {
    name: "Paulyn",
    handle: "JakeOJeff",
    role: "CEO",
    avatar: "https://avatars.githubusercontent.com/u/87922888?v=4",
    bio: "started coding at 11 on a 4GB RAM windows 7 box — no game engine would run, so he found LÖVE and built everything from scratch. shipped a language compiler, a private chat app with no database, a 2D physics engine, and a full RPG before turning 18. does offensive and defensive pentesting, designs PCBs, plays three guitars, and still finds time to write poetry. runs the company the same way he builds software: constraints are just the starting point.",
    links: [
      { icon: GithubLogo, href: "https://github.com/JakeOJeff", label: "GitHub" },
      { icon: TwitterLogo, href: "https://x.com/JakeOJeffYT", label: "Twitter" },
      { icon: Globe, href: "https://paulyn.lol", label: "Website" },
      { icon: LinkedinLogo, href: "#", label: "LinkedIn" },
      { icon: Envelope, href: "mailto:jake@curiousengine.org", label: "Email" },
    ],
  },
  {
    name: "Alvin Liju",
    handle: "alvinliju",
    role: "CTO",
    avatar: "https://avatars.githubusercontent.com/u/89293506?v=4",
    bio: "started by taking things apart, then modding games, then realising he could build anything. writes go, kotlin, javascript, solidity — backend, distributed systems, blockchain, whatever the problem needs. currently reverse-engineering computer science from first principles, one repo at a time. thinks AI will probably take over the world, and is completely fine with that.",
    links: [
      { icon: GithubLogo, href: "https://github.com/alvinliju", label: "GitHub" },
      { icon: LinkedinLogo, href: "https://in.linkedin.com/in/alvin-liju-0aab55307", label: "LinkedIn" },
      { icon: TwitterLogo, href: "#", label: "Twitter" },
      { icon: Globe, href: "https://alvinliju.me", label: "Portfolio" },
      { icon: Envelope, href: "mailto:alvin@curiousengine.org", label: "Email" },
    ],
  },
];

export function Team() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-md">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">who&apos;s behind this</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              the people behind <Pen>the engine</Pen>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              two builders from bangalore. running curious engine and building tools for the community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col gap-4">
              <div className="relative size-[120px] rounded-xl overflow-hidden border border-border bg-muted shrink-0">
                <Image
                  src={m.avatar}
                  alt={m.name}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-sm">{m.name}</span>
                <span className="text-xs text-muted-foreground font-mono">@{m.handle}</span>
                <span className={`${libreCaslonText.className} text-xs text-muted-foreground mt-0.5 italic`}>{m.role}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{m.bio}</p>
              <div className="flex items-center gap-2">
                {m.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href !== "#" ? "_blank" : undefined}
                    rel={l.href !== "#" ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={l.label}
                  >
                    <l.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
