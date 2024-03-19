import Hero from "./components/hero";
import Story from "./components/story";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-14">
      <Hero />
      <Story />
    </main>
  );
}
