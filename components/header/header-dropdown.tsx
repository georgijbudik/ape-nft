"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { BURGER_MENU_LINKS } from "@/constants";
import BurgerMenuLink from "./burger-menu-link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const HeaderDropDown = ({ canChangeColor }: { canChangeColor: boolean }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const onToggleOpen = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <DropdownMenu open={isModalOpen} onOpenChange={onToggleOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "h-12 w-12 lg:h-20 lg:w-20 bg-neutral-900 bg-opacity-10 rounded-tr-xl rounded-br-xl rounded-l-lg rounded-r-lg lg:rounded-r-[12px] lg:rounded-l-[12px] backdrop-blur-md flex justify-center items-center text-neutral-900 text-xs lg:text-base font-semibold font-messinaSans leading-[14px] lg:leading-[19px] uppercase hover:underline focus:underline hover:text-primary focus:text-primary transition-all duration-300",
            isModalOpen && "rounded-l-none lg:rounded-l-none",
            canChangeColor && "text-primary bg-white"
          )}
        >
          {isModalOpen ? "Close" : "Menu"}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="left"
        className={cn(
          "flex border-0 -mr-1 rounded-l-xl bg-stone-900 bg-opacity-10 backdrop-blur-md",
          canChangeColor && "bg-white"
        )}
      >
        {BURGER_MENU_LINKS.map((link, index) => {
          return (
            <DropdownMenuItem key={index} className="h-12 w-12 lg:h-20 lg:w-20">
              <BurgerMenuLink
                label={link.title}
                href={link.href}
                canChangeColor={canChangeColor}
              />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderDropDown;
