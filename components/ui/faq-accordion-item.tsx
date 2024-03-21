import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface IFaqAccordionItemProps {
  index: number;
  question: string;
  answer: string;
  value: string;
  path: string;
}

const FaqAccordionItem = ({
  index,
  question,
  answer,
  value,
  path,
}: IFaqAccordionItemProps) => {
  const indexToString = index.toString();
  const isSelected = value === indexToString;

  return (
    <AccordionItem
      value={indexToString}
      className={cn(
        "pt-2 md:pt-[18px] lg:pt-6 pl-2 md:pl-[183px] lg:pl-[297px]",
        isSelected && "bg-secondary rounded-xl md:relative"
      )}
    >
      <AccordionTrigger className="flex items-start">
        <span
          className={cn(
            "text-accent flex-shrink-0 text-xs md:text-base lg:text-2xl font-normal font-biroScriptUS leading-[24px] md:leading-[36px] lg:leading-[56px] mr-2 md:mr-[21px]",
            isSelected && "text-primary"
          )}
        >
          [ {index} ]
        </span>
        <h3
          className={cn(
            "w-[169px] md:w-[339px] lg:w-[635px] text-primary text-xl md:text-[32px] lg:text-[64px] text-left font-black leading-tight md:leading-[36px] lg:leading-[64px]",
            isSelected && "text-accent"
          )}
        >
          {question}
        </h3>
      </AccordionTrigger>
      <AccordionContent>
        <p className="w-[169px] md:w-[339px] lg:w-[635px] text-primary text-xs lg:text-base text-left font-normal font-messinaSans uppercase leading-[14px] lg:leading-[19px]">
          {answer}
        </p>
        <Image
          src={path}
          alt="Fancy ape"
          width={248}
          height={282}
          className={cn(
            "hidden",
            isSelected &&
              "md:absolute md:block origin-top-left rotate-[-16deg] md:w-[148px] md:h-[183px] lg:w-[248px] lg:h-[282px] md:left-0 md:top-3"
          )}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqAccordionItem;
