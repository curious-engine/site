import { promises as fs } from "fs";
import path from "path";
import { type Event, events } from "@/content/events";

const eventsPath = path.join(process.cwd(), "src", "content", "events.ts");

function quote(value: string) {
  return JSON.stringify(value);
}

export function renderEventsModule(nextEvents: Event[]) {
  const entries = nextEvents
    .map((event) => {
      return `  {\n    title: ${quote(event.title)},\n    type: ${quote(event.type)},\n    date: ${quote(event.date)},\n    location: ${quote(event.location)},\n    description:\n      ${quote(event.description)},\n  }`;
    })
    .join(",\n");

  return `export type Event = {\n  title: string;\n  type: string;\n  date: string;\n  location: string;\n  description: string;\n};\n\nexport const events: Event[] = [\n${entries},\n];\n`;
}

export async function appendEvent(event: Event) {
  await fs.writeFile(eventsPath, renderEventsModule([...events, event]), "utf8");
}

export async function deleteEvent(title: string) {
  const normalizedTitle = title.trim().toLowerCase();
  const nextEvents = events.filter((event) => event.title.toLowerCase() !== normalizedTitle);

  if (nextEvents.length === events.length) {
    throw new Error("Event not found");
  }

  await fs.writeFile(eventsPath, renderEventsModule(nextEvents), "utf8");
}