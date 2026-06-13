"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  HandWaving,
  Wrench,
  Buildings,
  BookOpen,
  Handshake,
  Terminal,
  Info,
  Briefcase,
  List,
  X,
} from "@phosphor-icons/react";

const products = [
  {
    icon: Terminal,
    name: "mimicode",
    desc: "Notebook-first AI coding tool. Write a question in your editor, save, get the answer in-file.",
    href: "https://mimicode.xyz",
  },
];

const resources = [
  {
    icon: Info,
    name: "About",
    desc: "Who we are, where we're based, and why we started Curious Engine.",
    href: "/about",
  },
  {
    icon: Briefcase,
    name: "Careers",
    desc: "Open roles across the Curious Engine family of companies.",
    href: "/careers",
  },
];

const solutions = [
  {
    icon: HandWaving,
    name: "For Founders",
    desc: "Capital, infrastructure, and a permanent home for your company.",
    href: "/solutions/founders",
  },
  {
    icon: Wrench,
    name: "For Operators",
    desc: "Join the group and run a business inside the Curious Engine ecosystem.",
    href: "/solutions/operators",
  },
  {
    icon: Buildings,
    name: "For Enterprises",
    desc: "Custom deployments and partnerships across our portfolio.",
    href: "/solutions/enterprises",
  },
  {
    icon: BookOpen,
    name: "Case Studies",
    desc: "How our portfolio companies have grown with shared infrastructure.",
    href: "/solutions/case-studies",
  },
  {
    icon: Handshake,
    name: "Partners",
    desc: "Strategic partners, service providers, and co-builders.",
    href: "/solutions/partners",
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300", scrolled ? "border-border/40 bg-background/35 backdrop-blur-md" : "border-transparent bg-transparent")}>
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="size-6 rounded-md bg-foreground" />
          <span className="font-semibold tracking-tight text-sm">curious engine</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Products dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-foreground/70 bg-transparent hover:text-foreground data-[state=open]:text-foreground">
                  products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[340px] gap-2 p-4">
                    {products.map((p) => (
                      <ListItem key={p.name} href={p.href} title={p.name} icon={p.icon}>
                        {p.desc}
                      </ListItem>
                    ))}
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/portfolio"
                          className="flex items-center gap-2 rounded-md px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          view all companies →
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-foreground/70 bg-transparent hover:text-foreground data-[state=open]:text-foreground">
                  solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[520px] grid-cols-2 gap-2 p-4">
                    {solutions.map((s) => (
                      <ListItem key={s.name} href={s.href} title={s.name} icon={s.icon}>
                        {s.desc}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-foreground/70 bg-transparent hover:text-foreground data-[state=open]:text-foreground">
                  resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[340px] gap-2 p-4">
                    {resources.map((r) => (
                      <ListItem key={r.name} href={r.href} title={r.name} icon={r.icon}>
                        {r.desc}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Community */}
              <NavigationMenuItem>
                <Link href="/community" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-sm font-medium text-foreground/70 bg-transparent hover:text-foreground hover:bg-transparent"
                    )}
                  >
                    community
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Manifesto */}
              <NavigationMenuItem>
                <Link href="/manifesto" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-sm font-medium text-foreground/70 bg-transparent hover:text-foreground hover:bg-transparent"
                    )}
                  >
                    manifesto
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-sm font-normal text-muted-foreground" asChild>
            <Link href="/#contact">contact us</Link>
          </Button>
          <Button size="sm" className="text-sm rounded-md" asChild>
            <Link href="/portfolio">explore portfolio →</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 rounded-md hover:bg-muted transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/45 backdrop-blur-md px-6 py-4 flex flex-col gap-3">
          <Link href="/portfolio" className="text-sm font-medium text-foreground/70 hover:text-foreground py-1" onClick={() => setMobileOpen(false)}>products</Link>
          <Link href="/solutions/founders" className="text-sm font-medium text-foreground/70 hover:text-foreground py-1" onClick={() => setMobileOpen(false)}>solutions</Link>
          <Link href="/about" className="text-sm font-medium text-foreground/70 hover:text-foreground py-1" onClick={() => setMobileOpen(false)}>about</Link>
          <Link href="/careers" className="text-sm font-medium text-foreground/70 hover:text-foreground py-1" onClick={() => setMobileOpen(false)}>careers</Link>
          <Link href="/community" className="text-sm font-medium text-foreground/70 hover:text-foreground py-1" onClick={() => setMobileOpen(false)}>community</Link>
          <Link href="/manifesto" className="text-sm font-medium text-foreground/70 hover:text-foreground py-1" onClick={() => setMobileOpen(false)}>manifesto</Link>
          <div className="pt-2 border-t border-border flex flex-col gap-2">
            <Button variant="outline" size="sm" className="w-full justify-center" asChild>
              <Link href="/#contact">contact us</Link>
            </Button>
            <Button size="sm" className="w-full justify-center" asChild>
              <Link href="/portfolio">explore portfolio →</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---- helpers ---- */
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ComponentType<{ size?: number; className?: string }>; title: string }
>(({ className, title, children, icon: Icon, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "flex gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted select-none",
          className
        )}
        {...props}
      >
        <Icon size={18} className="mt-0.5 shrink-0 text-muted-foreground" />
        <div>
          <div className="mb-0.5 text-sm font-medium leading-none">{title}</div>
          <p className="text-xs leading-snug text-muted-foreground">{children}</p>
        </div>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";
