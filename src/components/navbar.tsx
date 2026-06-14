"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  EnvelopeSimple,
  List,
  X,
  CurrencyDollar,
  CalendarBlank,
  UsersThree,
} from "@phosphor-icons/react";

/* ─── data ──────────────────────────────────────────────────────────────── */
const products = [
  {
    icon: Terminal,
    name: "mimicode",
    desc: "Notebook-first AI coding tool. Write a question in your editor, save, get the answer in-file.",
    href: "https://mimicode.xyz",
  },
];

const programs = [
  {
    icon: CurrencyDollar,
    name: "Funding",
    desc: "Short grants distributed based on what you actually ship. no pitch deck. no equity.",
    href: "/programs",
  },
  {
    icon: CalendarBlank,
    name: "Events",
    desc: "In-person events in Bangalore. workshops, demo nights, and open hack sessions.",
    href: "/events",
  },
  {
    icon: UsersThree,
    name: "Community",
    desc: "A place for builders, engineers, and founders to connect without gatekeepers.",
    href: "/community",
  },
];

const resources = [
  { icon: Info,           name: "About",   desc: "Who we are, why we started this, and what we're trying to do.", href: "/about"                        },
  { icon: Briefcase,      name: "Volunteer", desc: "Open volunteer and part-time roles across Curious Engine.",     href: "/careers"                      },
  { icon: EnvelopeSimple, name: "Contact", desc: "Say hi, pitch something, or just ask a question.",             href: "mailto:hello@curiousengine.org" },
];

/* ─── transitions for pill morph ───────────────────────────────────────── */
// [0.4, 0, 0.2, 1] — symmetric ease-in-out: motion is visible and slow
// throughout the full duration, not piled at start or end.
const MORPH     = { type: "tween", duration: 1.4, ease: [0, 0, 0.58, 1] } as const;
const MORPH_OUT = { type: "tween", duration: 1.4, ease: [0, 0, 0.58, 1] } as const;
const EASE  = [0.22, 1, 0.36, 1] as const;

/* ─── Navbar ─────────────────────────────────────────────────────────────── */
export function Navbar() {
  const [scrolled,    setScrolled]    = React.useState(false);
  const [mobileOpen,  setMobileOpen]  = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /*
     * Outer shell — fixed, full-viewport-width, flex-centered.
     * pointer-events-none so the transparent area at the top
     * doesn't block page interaction.
     */
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none">

      {/* Width wrapper: animates from full → 768 px on scroll */}
      <motion.div
        className="w-full pointer-events-auto"
        initial={{ maxWidth: 1920, paddingLeft: 0, paddingRight: 0, paddingTop: 0 }}
        animate={{
          maxWidth: scrolled ? 784 : 1920,
          paddingLeft:  scrolled ? 16 : 0,
          paddingRight: scrolled ? 16 : 0,
          paddingTop:   scrolled ? 14 : 0,
        }}
        transition={scrolled ? MORPH : MORPH_OUT}
      >
        {/* ── Pill / bar ───────────────────────────────────────────────── */}
        <motion.header
          /* colours transition via CSS; geometry via framer */
          className={cn(
            "w-full flex items-center border",
            "transition-colors duration-500",
            scrolled
              ? "bg-background/82 border-border/25 shadow-[0_2px_24px_0_rgb(0_0_0_/_.06)] backdrop-blur-xl"
              : "bg-transparent border-transparent shadow-none"
          )}
          animate={{
            borderRadius: scrolled ? 9999 : 0,
            height:       scrolled ? 48   : 64,
            paddingLeft:  scrolled ? 20   : 24,
            paddingRight: scrolled ? 8    : 24,
          }}
          initial={{
            borderRadius: 0,
            height:       64,
            paddingLeft:  24,
            paddingRight: 24,
          }}
          transition={scrolled ? MORPH : MORPH_OUT}
        >
          <div className="mx-auto max-w-6xl w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <motion.span
              className="rounded-md bg-foreground"
              animate={{ width: scrolled ? 18 : 22, height: scrolled ? 18 : 22 }}
              transition={scrolled ? MORPH : MORPH_OUT}
              style={{ display: "inline-block" }}
            />
            <span className="font-semibold tracking-tight text-sm">curious engine</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center min-w-0">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">

                <NavItem label="products">
                  <ul className="flex flex-col w-[340px] gap-2 p-4">
                    {products.map((p) => (
                      <ListItem key={p.name} href={p.href} title={p.name} icon={p.icon}>
                        {p.desc}
                      </ListItem>
                    ))}
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/portfolio" className="flex items-center gap-2 rounded-md px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                          view all companies →
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavItem>

                <NavItem label="programs">
                  <ul className="flex flex-col w-[340px] gap-2 p-4">
                    {programs.map((p) => (
                      <ListItem key={p.name} href={p.href} title={p.name} icon={p.icon}>
                        {p.desc}
                      </ListItem>
                    ))}
                  </ul>
                </NavItem>

                <NavItem label="resources">
                  <ul className="flex flex-col w-[340px] gap-2 p-4">
                    {resources.map((r) => (
                      <ListItem key={r.name} href={r.href} title={r.name} icon={r.icon}>
                        {r.desc}
                      </ListItem>
                    ))}
                  </ul>
                </NavItem>

                <PlainLink href="/manifesto">manifesto</PlainLink>

              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-1 shrink-0">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Button size="sm" className="text-sm rounded-full px-4" asChild>
                <Link href="/community">get involved →</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-muted transition-colors mr-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "x" : "list"}
                initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0,   scale: 1   }}
                exit={{    opacity: 0, rotate:  45, scale: 0.6 }}
                transition={{ duration: 0.16 }}
                className="flex"
              >
                {mobileOpen ? <X size={18} /> : <List size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
          </div>
        </motion.header>

        {/* ── Mobile menu ──────────────────────────────────────────────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden mt-2 rounded-2xl border border-border/30 bg-background/92 backdrop-blur-xl shadow-lg px-5 py-4 flex flex-col gap-3"
              initial={{ opacity: 0, y: -12, scale: 0.96, filter: "blur(4px)" }}
              animate={{ opacity: 1, y:   0, scale: 1,    filter: "blur(0px)" }}
              exit={{    opacity: 0, y: -12, scale: 0.96, filter: "blur(4px)" }}
              transition={{ duration: 0.26, ease: EASE }}
            >
              {[
                { href: "/programs",  label: "funding"    },
                { href: "/events",   label: "events"     },
                { href: "/community",label: "community"  },
                { href: "/about",    label: "about"      },
                { href: "/manifesto",label: "manifesto"  },
                { href: "/careers",  label: "volunteer"  },
              ].map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0   }}
                  transition={{ delay: i * 0.04, duration: 0.28, ease: EASE }}
                >
                  <Link
                    href={href}
                    className="block text-sm font-medium text-foreground/70 hover:text-foreground py-1 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="pt-2 border-t border-border flex flex-col gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.24, duration: 0.3 }}
              >
                  <Link href="/community" onClick={() => setMobileOpen(false)} className="w-full">
                    <Button size="sm" className="w-full justify-center rounded-full" asChild>
                      <span>get involved →</span>
                    </Button>
                  </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}

/* ─── helpers ────────────────────────────────────────────────────────────── */

function NavItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-sm font-medium text-foreground/60 bg-transparent hover:text-foreground hover:bg-muted/60 data-[state=open]:text-foreground data-[state=open]:bg-muted/60 rounded-full h-8 px-3 transition-colors">
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>{children}</NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function PlainLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            navigationMenuTriggerStyle(),
            "text-sm font-medium text-foreground/60 bg-transparent hover:text-foreground hover:bg-muted/60 rounded-full h-8 px-3 transition-colors"
          )}
        >
          {children}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
  }
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
