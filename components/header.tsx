"use client";
import Logo from "./ui/logo";
import HeaderSocialList from "./header/header-social-list";
import HeaderDropDown from "./header/header-dropdown";
import MobileMenu from "./header/mobile-menu";
import { useEffect, useState } from "react";

const Header = () => {
  const [canChangeColor, setCanChangeColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about");
      const rect = about!.getBoundingClientRect();
      if (rect.top <= 102) {
        setCanChangeColor(true);
      } else {
        setCanChangeColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <div className="absolute left-2 top-4 md:top-5 md:left-3 lg:left-4 lg:top-[39px]">
        <Logo className="fill-secondary group-hover:fill-primary group-focus:fill-primary" />
      </div>
      <div className="hidden z-10 md:block md:fixed right-2 top-2 md:top-16 md:right-7 lg:top-10 lg:right-8">
        <HeaderDropDown canChangeColor={canChangeColor} />
      </div>
      <MobileMenu canChangeColor={canChangeColor} />
      <HeaderSocialList canChangeColor={canChangeColor} />
    </header>
  );
};

export default Header;
