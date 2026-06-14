import { Navbar } from "@/components/navbar";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Pen } from "@/components/pen";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events — Curious Engine",
  description: "In-person events for builders in Bangalore. Workshops, demo nights, and open hack sessions.",
};

const upcomingEvents = [
  {
    title: "Builder Meetup #01",
    type: "Meetup",
    date: "Coming soon",
    location: "Bangalore, India",
    description:
      "The first official curious engine meetup. Come meet other builders, show what you're working on, and find people thinking about the same problems. No agenda. No keynotes. Just builders in a room.",
  },
  {
    title: "Open Hack Session",
    type: "Hack Session",
    date: "Coming soon",
    location: "Bangalore, India",
    description:
      "Bring a problem you're stuck on or a project you want to push forward. Work alongside other builders for a few hours. Show up solo. Leave with collaborators.",
  },
  {
    title: "Demo Night",
    type: "Demo",
    date: "Coming soon",
    location: "Bangalore, India",
    description:
      "Five-minute demos of whatever you've been building. No investor pitches. No polished decks. Just show the thing and tell us what you learned. Feedback welcome, judgment-free.",
  },
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14">
        {/* Header */}
        <div className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl flex flex-col gap-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">events</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight max-w-2xl">
              meet people <Pen>building things.</Pen>
            </h1>
            <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
              in-person events in bangalore, run by the curious engine team. workshops, demo nights,
              and open hack sessions. the internet is good for a lot. it can&apos;t replace a room
              full of people who give a damn.
            </p>
          </div>
        </div>

        {/* Upcoming events */}
        <div className="px-6 py-20 border-b border-border">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">upcoming</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">what&apos;s coming up</h2>
            </div>

            <div className="flex flex-col gap-4">
              {upcomingEvents.map((e) => (
                <div
                  key={e.title}
                  className="flex flex-col md:flex-row md:items-start gap-6 rounded-xl border border-border bg-card p-8"
                >
                  <div className="shrink-0 flex flex-col gap-1 min-w-[140px]">
                    <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground bg-muted rounded-full px-2 py-0.5 w-fit">
                      {e.type}
                    </span>
                    <span className="text-xs text-muted-foreground mt-2">{e.date}</span>
                    <span className="text-xs text-muted-foreground">{e.location}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold leading-snug">{e.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="px-6 py-20 bg-muted/30">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">how it works</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">show up. that&apos;s it.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  step: "01",
                  title: "get notified",
                  body: "follow updates on our community page or drop us an email to get on the list. events are announced a couple of weeks out.",
                },
                {
                  step: "02",
                  title: "show up",
                  body: "no rsvp required for most events. just come. bring something you're building if you have it. if you don't, come anyway.",
                },
                {
                  step: "03",
                  title: "build connections",
                  body: "you'll leave with at least one person you want to talk to again. probably more. that's the whole point.",
                },
              ].map((v) => (
                <div key={v.step} className="flex flex-col gap-3">
                  <Separator />
                  <span className="text-xs font-mono text-muted-foreground pt-4">{v.step}</span>
                  <h3 className="text-base font-semibold">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
