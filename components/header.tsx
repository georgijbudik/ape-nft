import BurgerMenu from "./ui/burger-menu";
import HeaderSocialItem from "./ui/header-social-item";
import Logo from "./ui/logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

const socialMediaItems = [
  {
    icon: "icon-discord",
  },
  {
    icon: "icon-ship",
  },
  {
    icon: "icon-twitter",
  },
];

const LINKS = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Mind-Map",
    href: "#mind-map",
  },
  {
    title: "Faq",
    href: "#faq",
  },
  {
    title: "Arts",
    href: "#arts",
  },
  {
    title: "Mint",
    href: "#contact-us",
  },
];

const Header = () => {
  return (
    <header>
      <div className="absolute left-2 top-4 md:top-5 md:left-3 lg:left-4 lg:top-[39px]">
        <Logo />
      </div>
      <div className="absolute right-2 top-2 md:top-3 md:right-3 lg:top-6 lg:right-4">
        <BurgerMenu label="MENU" />
      </div>
      <div className="absolute right-2 top-2 md:top-3 md:right-3 lg:top-6 lg:right-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <BurgerMenu label="MENU" />
          </SheetTrigger>
          <SheetContent className="w-full bg-[#181818]">
            <SheetHeader className="absolute top-[70px] left-4">
              <Logo />
            </SheetHeader>
            <div className="flex flex-col h-full justify-between">
              <ul className="flex flex-col items-center gap-4 pb-[77px]">
                {LINKS.map((link) => {
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
      </div>
      <ul className="absolute flex flex-col right-2 md:right-3 lg:right-4 top-[64px] md:top-[68px] lg:top-[120px] gap-2 lg:gap-4">
        {socialMediaItems.map((item, index) => {
          return <HeaderSocialItem key={index} icon={item.icon} />;
        })}
      </ul>
    </header>
  );
};

export default Header;
