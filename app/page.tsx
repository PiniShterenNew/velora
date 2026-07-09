import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DecisionBoard } from "@/components/DecisionBoard";
import { Services, StoryScrolling, Work, Testimonials, Process, About, FinalCTA } from "@/components/sections";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return <><Header /><main><Hero /><DecisionBoard /><Services /><StoryScrolling /><Work /><Testimonials /><Process /><About /><FAQ /><FinalCTA /></main><Footer /></>;
}
