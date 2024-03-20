import Hero from "../components/hero";
import MindMap from "../components/mind-map";
import Story from "../components/about";
import Faq from "../components/faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Story />
      <MindMap />
      <Faq />
    </main>
  );
}
