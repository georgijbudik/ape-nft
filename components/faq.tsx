import Title from "./ui/title";
import FaqAccordion from "./faq/faq-accordion";

const Faq = () => {
  return (
    <section id="faq" className="container pt-[60px] md:pt-20 lg:pt-[120px]">
      <div className="flex justify-center">
        <Title>Faq</Title>
      </div>
      <FaqAccordion />
    </section>
  );
};

export default Faq;
