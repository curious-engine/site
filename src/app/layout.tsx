import type { Metadata } from "next";
import { ibmPlexSans, ibmPlexMono, libreCaslonDisplay } from "@/lib/fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
const BASE_URL = "https://curiousengine.org";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Curious Engine — Build Without Asking Permission",
    template: "%s — Curious Engine",
  },
  description:
    "Curious Engine is a non-profit for builders, engineers, and founders in Bangalore. Validation, short funding, and community — no gatekeepers, no equity taken.",
  keywords: [
    "curious engine",
    "non-profit builders",
    "bangalore startup community",
    "founder community india",
    "builder funding",
    "engineering community bangalore",
    "no-equity funding",
    "indie hackers india",
  ],
  authors: [{ name: "Paulyn", url: "https://paulyn.lol" }, { name: "Alvin Liju", url: "https://alvinliju.me" }],
  creator: "Curious Engine",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Curious Engine",
    title: "Curious Engine — Build Without Asking Permission",
    description:
      "A non-profit for builders, engineers, and founders. Validation, short funding, and community — no gatekeepers, no equity taken. Based in Bangalore.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Curious Engine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curious Engine — Build Without Asking Permission",
    description:
      "A non-profit for builders, engineers, and founders. No gatekeepers, no equity taken. Based in Bangalore.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("h-full antialiased", ibmPlexSans.variable, ibmPlexMono.variable, libreCaslonDisplay.variable)}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
