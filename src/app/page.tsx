import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export const metadata: Metadata = {
  alternates: { canonical: "https://curiousengine.org" },
  openGraph: {
    url: "https://curiousengine.org",
    title: "Curious Engine — Build Without Asking Permission",
    description:
      "A non-profit for builders, engineers, and founders. Validation, short funding, and community — no gatekeepers, no equity taken. Based in Bangalore.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curious Engine — Build Without Asking Permission",
    description:
      "A non-profit for builders, engineers, and founders in Bangalore. No gatekeepers, no equity taken.",
  },
};
import { Philosophy } from "@/components/philosophy";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { AbstractLines } from "@/components/abstract-lines";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <FAQ />
        <CTA />
        <AbstractLines />
      </main>
      <Footer />
    </>
  );
}
