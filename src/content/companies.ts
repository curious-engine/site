export type CompanyIcon = "terminal" | "brain";
export type CompanyStatus = "beta" | "live" | "private";

export type Company = {
  name: string;
  tagline: string;
  category: string;
  description: string;
  href: string;
  status?: CompanyStatus;
  icon: CompanyIcon;
  featured?: boolean;
  navDescription?: string;
  highlights: string[];
};

export const companies: Company[] = [
  {
    name: "mimicode",
    tagline: "notebook-first AI coding tool",
    category: "Developer Tools",
    description:
      "Open code.mimi in your editor, write a question, save. The answer lands below a divider in the same file. No chat window. No tab switching. One binary, zero dependencies \u2014 and a rubber duck that can search your repo, run commands, and make mechanical edits when you ask.",
    href: "https://mimicode.xyz",
    status: "beta",
    icon: "terminal",
    featured: true,
    navDescription:
      "Notebook-first AI coding tool. Write a question in your editor, save, get the answer in-file.",
    highlights: [
      "Your editor is the UI \u2014 zero context switches",
      "Watch, REPL, TUI, and one-shot modes",
      "Shadow-git undo \u2014 your real .git is never touched",
      "Single binary, no Python, no Node, no runtime",
    ],
  },
  {
    name: "plotter",
    tagline: "a canvas for thinking with AI",
    category: "AI Workspace",
    description:
      "Your thinking gets scattered across ChatGPT tabs, Notion pages, Figma comments, and handwritten notes. Plotter brings it all to one infinite canvas. Dump your raw, messy thoughts and an AI agent turns them into a structured visual board \u2014 diagrams, groupings, and layout generated for you, so you go from a mess in your head to something you can actually reason about.",
    href: "https://plotter.so",
    status: "beta",
    icon: "brain",
    featured: true,
    navDescription:
      "An infinite canvas for thinking with AI. Brain dump your messy thoughts, get a structured visual board.",
    highlights: [
      "Brain dump \u2192 structured visual board in seconds",
      "AI works directly on the canvas, not in a sidebar",
      "Infinite canvas \u2014 notes, diagrams, and references in one space",
      "Replaces scattered tabs, AI chats, and sticky notes",
    ],
  },
];
