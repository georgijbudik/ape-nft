import Hero from "./components/hero";
import MindMap from "./components/mind-map";
import Story from "./components/about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Story />
      <MindMap />
    </main>
  );
}
