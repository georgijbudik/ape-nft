import Title from "./ui/title";
import FaqAccordion from "./faq/faq-accordion";

const Faq = () => {
  return (
    <section
      id="faq"
      className="container xs:max-w-[480px] md:max-w-[768px] lg:max-w-[1280px] pt-[60px] md:pt-20 lg:pt-[120px]"
    >
      <div className="flex justify-center">
        <Title>Faq</Title>
      </div>
      <FaqAccordion />
    </section>
  );
};

export default Faq;
