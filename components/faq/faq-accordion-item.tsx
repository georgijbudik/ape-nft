import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
      <AccordionTrigger className="flex items-start group">
        <span
          className={cn(
            "text-accent flex-shrink-0 text-xs md:text-base lg:text-2xl font-normal font-biroScriptUS leading-[24px] md:leading-[36px] lg:leading-[56px] mr-2 md:mr-[21px] group-hover:text-primary group-focus:text-primary transition-all duration-300",
            isSelected && "text-primary"
          )}
        >
          [ {index} ]
        </span>
        <h3
          className={cn(
            "xs:w-full w-[169px] md:w-[339px] lg:w-[635px] text-primary text-xl md:text-[32px] lg:text-[64px] text-left font-black leading-tight md:leading-[36px] lg:leading-[64px] group-hover:text-accent group-focus:text-accent transition-all duration-300",
            isSelected && "text-accent"
          )}
        >
          {question}
        </h3>
      </AccordionTrigger>
      <AccordionContent>
        <p className="xs:w-full w-[169px] md:w-[339px] lg:w-[635px] text-primary text-xs lg:text-base text-left font-normal font-messinaSans uppercase leading-[14px] lg:leading-[19px]">
          {answer}
        </p>
        <motion.div
          className="absolute md:left-0 md:top-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Image
            src={path}
            alt="Fancy ape"
            width={248}
            height={282}
            className={cn(
              "hidden",
              isSelected &&
                "md:block origin-top-left rotate-[-16deg] md:w-[148px] md:h-[183px] lg:w-[248px] lg:h-[282px]"
            )}
          />
        </motion.div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqAccordionItem;
