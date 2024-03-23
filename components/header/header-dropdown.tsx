import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { BURGER_MENU_LINKS } from "@/constants";
import BurgerMenuBtn from "./burger-menu-btn";
import BurgerMenuLink from "./burger-menu-link";

const HeaderDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <BurgerMenuBtn label="MENU" />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left" className="flex">
        {BURGER_MENU_LINKS.map((link, index) => {
          return (
            <DropdownMenuItem
              className="first:rounded-l-xl last:rounded-r-xl"
              key={index}
            >
              <BurgerMenuLink label={link.title} href={link.href} />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderDropDown;
