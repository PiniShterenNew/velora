import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DecisionBoard } from "@/components/DecisionBoard";
import { Problem, Approach, Services, StoryScrolling, Process, Work, About, FinalCTA } from "@/components/Sections";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return <><Header /><main><Hero /><DecisionBoard /><Problem /><Approach /><Services /><StoryScrolling /><Process /><Work /><About /><FAQ /><FinalCTA /></main><Footer /></>;
}
