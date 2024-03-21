"use client";
import { Accordion } from "@/components/ui/accordion";
import Title from "./ui/title";
import FaqAccordionItem from "./ui/faq-accordion-item";
import { useState } from "react";

const faqItems = [
  {
    question: "WHAT IS AN NFT COLLECTION?",
    answer:
      "An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.",
    path: "/images/faq-ape-1.png",
  },
  {
    question: "HOW DO I PURCHASE NFTS FROM A COLLECTION?",
    answer:
      "To purchase NFTs from a collection, you typically need to use cryptocurrency on a blockchain-based marketplace.",
    path: "/images/faq-ape-2.png",
  },
  {
    question: "CAN I SELL OR TRADE NFTS FROM A COLLECTION?",
    answer:
      "Yes, you can sell or trade NFTs from a collection like you would other digital assets.",
    path: "/images/faq-ape-3.png",
  },
  {
    question: "WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?",
    answer:
      "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
    path: "/images/faq-ape-4.png",
  },
];

const Faq = () => {
  const [value, setValue] = useState("1");
  return (
    <section className="container pt-[60px] md:pt-20 lg:pt-[120px]">
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
        {faqItems.map((item, index) => {
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
