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
import BurgerMenuBtn from "./burger-menu-btn";

const MobileMenu = () => {
  return (
    <Sheet>
      <div className="absolute right-2 top-2 md:top-3 md:right-3 lg:top-6 lg:right-4 md:hidden">
        <SheetTrigger asChild>
          <BurgerMenuBtn label="MENU" />
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