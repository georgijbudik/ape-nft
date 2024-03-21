import Hero from "../components/hero";
import MindMap from "../components/mind-map";
import Story from "../components/about";
import Faq from "../components/faq";
import Collection from "@/components/collection";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-[54px] pb-6 md:pb-10 lg:pt-4">
      <Hero />
      <Story />
      <MindMap />
      <Faq />
      <Collection />
      <ContactUs />
      <Footer />
    </main>
  );
}
