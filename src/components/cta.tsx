import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export function CTA() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-2xl border border-border bg-foreground text-background overflow-hidden px-10 py-16 md:px-20 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* background noise texture overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"
          />

          <div className="relative flex flex-col gap-4 max-w-lg">
            <p className="text-xs text-background/50 uppercase tracking-widest">say hi</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-background">
              if you&apos;re building something cool, hit us up!
            </h2>
            <p className="text-sm text-background/70 leading-relaxed">
              seriously. whether you&apos;re a builder, a tinkerer, someone who wants to work with us,
              or just someone who found what we&apos;re doing interesting — we&apos;d love to hear from you.
              no pitch deck required.
            </p>
          </div>

          <div className="relative flex flex-col gap-3 shrink-0">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-md gap-2 px-6 bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link href="mailto:hello@curiousengine.com">
                <EnvelopeSimple size={16} />
                drop us a message
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-md gap-2 px-6 text-background/70 hover:text-background hover:bg-background/10"
              asChild
            >
              <Link href="/portfolio">
                see what we&apos;re building <ArrowRight size={16} weight="bold" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
