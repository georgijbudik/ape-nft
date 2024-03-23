import Logo from "./ui/logo";

import HeaderSocialList from "./header/header-social-list";

import HeaderDropDown from "./header/header-dropdown";
import MobileMenu from "./header/mobile-menu";

const Header = () => {
  return (
    <header>
      <div className="absolute left-2 top-4 md:top-5 md:left-3 lg:left-4 lg:top-[39px]">
        <Logo className="fill-secondary group-hover:fill-primary" />
      </div>
      <div className="absolute right-2 top-2 md:top-3 md:right-3 lg:top-6 lg:right-4">
        <HeaderDropDown />
      </div>
      <MobileMenu />
      <HeaderSocialList />
    </header>
  );
};

export default Header;
