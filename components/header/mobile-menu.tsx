import { BURGER_MENU_LINKS } from "@/constants";
import Logo from "../ui/logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import HeaderSocialList from "./header-social-list";
import { cn } from "@/lib/utils";

const MobileMenu = ({ canChangeColor }: { canChangeColor: boolean }) => {
  return (
    <Sheet>
      <div className="fixed right-4 top-16 md:top-3 md:right-3 lg:top-6 md:hidden">
        <SheetTrigger asChild>
          <div
            className={cn(
              "w-12 h-12 lg:w-20 lg:h-20 bg-stone-900 bg-opacity-10 rounded-lg backdrop-blur-md justify-center items-center inline-flex group hover:cursor-pointer",
              canChangeColor && "bg-white"
            )}
          >
            <button
              type="button"
              className={cn(
                "text-stone-900 text-xs lg:text-base uppercase font-semibold font-messinaSans leading-[14px] lg:leading-[19px] group-hover:underline group-hover:text-primary transition-all duration-300",
                canChangeColor && "text-white group-hover:text-accent"
              )}
            >
              MENU
            </button>
          </div>
        </SheetTrigger>
      </div>
      <SheetContent className="bg-[#181818]">
        <SheetHeader className="absolute top-[70px] left-4">
          <SheetClose asChild>
            <Logo className="fill-primary group-hover:fill-accent" />
          </SheetClose>
        </SheetHeader>
        <HeaderSocialList isModalOpen />
        <div className="flex flex-col h-full justify-between">
          <ul className="flex flex-col items-center gap-4 translate-y-[35%]">
            {BURGER_MENU_LINKS.map((link) => {
              return (
                <SheetClose asChild key={link.title}>
                  <a
                    href={link.href}
                    className="h-10 text-primary text-2xl font-semibold font-messinaSans leading-[29px] uppercase"
                  >
                    {link.title}
                  </a>
                </SheetClose>
              );
            })}
          </ul>
          <SheetFooter>
            <div className="w-[216px] text-center text-primary text-xs font-normal font-messinaSans uppercase leading-[14px]">
              © Yacht ape 2024 all rights reserved
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
