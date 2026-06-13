import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
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
