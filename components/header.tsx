import BurgerMenu from "./header/burger-menu";
import Logo from "./ui/logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import HeaderSocialList from "./header/header-social-list";
import { BURGER_MENU_LINKS } from "@/constants";

const Header = () => {
  return (
    <header>
      <div className="absolute left-2 top-4 md:top-5 md:left-3 lg:left-4 lg:top-[39px]">
        <Logo className="fill-secondary group-hover:fill-primary" />
      </div>
      <div className="absolute right-2 top-2 md:top-3 md:right-3 lg:top-6 lg:right-4">
        <BurgerMenu label="MENU" />
      </div>
      <Sheet>
        <div className="absolute right-2 top-2 md:top-3 md:right-3 lg:top-6 lg:right-4 md:hidden">
          <SheetTrigger asChild>
            <BurgerMenu label="MENU" />
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
            <ul className="flex flex-col items-center gap-4">
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

      <HeaderSocialList />
    </header>
  );
};

export default Header;
