"use client";
import { Accordion } from "@/components/ui/accordion";
import { useState } from "react";
import { FAQ_ITEMS } from "@/constants";
import FaqAccordionItem from "./faq-accordion-item";

const FaqAccordion = () => {
  const [value, setValue] = useState("1");

  return (
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
  );
};

export default FaqAccordion;
