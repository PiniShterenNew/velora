import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DecisionBoard } from "@/components/DecisionBoard";
import { Services, StoryScrolling, Work, Testimonials, Process, About, FinalCTA } from "@/components/sections";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return <><Header />
    <main>
      <Analytics />
      <Hero />
      <DecisionBoard />
      <Services />
      <Work />
      <StoryScrolling />
      <Testimonials />
      <Process />
      <About />
      <FAQ />
      <FinalCTA />
    </main>
    <Footer />
  </>;
}
