import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { libreCaslonDisplay } from "@/lib/fonts";

const links = {
  Company: [
    { label: "about", href: "/about" },
    { label: "manifesto", href: "/manifesto" },
    { label: "careers", href: "/careers" },
    { label: "contact", href: "mailto:hello@curiousengine.com" },
  ],
  Products: [
    { label: "mimicode", href: "https://mimicode.xyz" },
  ],
  Solutions: [
    { label: "for founders", href: "#" },
    { label: "for operators", href: "#" },
    { label: "for builders", href: "#" },
  ],
  Legal: [
    { label: "privacy policy", href: "#" },
    { label: "terms of service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="size-5 rounded-md bg-foreground" />
              <span className="font-semibold text-sm tracking-tight">curious engine</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              a small team building tools we wish existed. based in bangalore, working on the internet.
            </p>
            <p className="text-xs text-muted-foreground">Bangalore, India</p>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-3">
              <span className="text-xs font-medium text-foreground">{group.toLowerCase()}</span>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      {...(item.href.startsWith("http") || item.href.startsWith("mailto")
                        ? { target: item.href.startsWith("http") ? "_blank" : undefined, rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined }
                        : {})}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground pb-6">
          <span>© {new Date().getFullYear()} Curious Engine. all rights reserved.</span>
          <span>made with curiosity, from bangalore.</span>
        </div>
      </div>

      {/* Big faded wordmark — bottom of footer, bleeds out */}
      <div className="relative overflow-hidden select-none pointer-events-none" aria-hidden>
        <p className={`${libreCaslonDisplay.className} text-[clamp(5rem,20vw,18rem)] font-bold tracking-tighter leading-none text-center text-foreground/[0.055] whitespace-nowrap pb-0`}>
          CURIOUS ENGINE
        </p>
        {/* fade bottom half to transparent */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>
    </footer>
  );
}
