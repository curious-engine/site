export type Event = {
  title: string;
  type: string;
  date: string;
  location: string;
  description: string;
};

export const events: Event[] = [
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