import { Pen } from "@/components/pen";

const quotes = [
  {
    text: "curiosity doesn't kill the cat but it sure as hell makes it stronger.",
    author: "Alvin Liju",
    role: "co-founder · alvinliju.me",
    href: "https://alvinliju.me",
  },
  {
    text: "i just mess with my computer all day, i build things, i learn things, i break things, i fix things.",
    author: "Alvin Liju",
    role: "co-founder · alvinliju.me",
    href: "https://alvinliju.me",
  },
  {
    text: "finding or getting something to work is a joy I cannot get anywhere else!",
    author: "Paulyn",
    role: "co-founder · paulyn.lol",
    href: "https://paulyn.lol",
  },
  {
    text: "I am always open to learning new things, because they basically are new ports to my creativity.",
    author: "Paulyn",
    role: "co-founder · paulyn.lol/about",
    href: "https://paulyn.lol/about",
  },
];

export function Quotes() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">in their own words</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            the people <Pen>running</Pen> this thing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quotes.map((q) => (
            <figure
              key={q.text}
              className="rounded-xl border border-border bg-card p-7 flex flex-col gap-5"
            >
              <blockquote className="text-sm leading-relaxed text-foreground">
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <figcaption className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">{q.author}</span>
                <a
                  href={q.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {q.role}
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
