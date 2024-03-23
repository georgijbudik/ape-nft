"use client";
import { Accordion } from "@/components/ui/accordion";
import Title from "./ui/title";
import FaqAccordionItem from "./ui/faq-accordion-item";
import { useState } from "react";
import { FAQ_ITEMS } from "@/constants";

const Faq = () => {
  const [value, setValue] = useState("1");
  return (
    <section id="faq" className="container pt-[60px] md:pt-20 lg:pt-[120px]">
      <div className="flex justify-center">
        <Title>Faq</Title>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-2 md:gap-[18px]"
        onValueChange={(value) => setValue(value)}
        defaultValue="1"
      >
        {FAQ_ITEMS.map((item, index) => {
          return (
            <FaqAccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index + 1}
              value={value}
              path={item.path}
            />
          );
        })}
      </Accordion>
    </section>
  );
};

export default Faq;
