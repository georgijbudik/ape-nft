import BurgerMenu from "./ui/burger-menu";
import HeaderSocialItem from "./ui/header-social-item";
import Logo from "./ui/logo";

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

const Header = () => {
  return (
    <header>
      <div className="absolute left-2 top-4 md:top-5 md:left-3 lg:left-4 lg:top-[39px]">
        <Logo />
      </div>
      <div className="absolute right-2 top-2 md:top-3 md:right-3 lg:top-6 lg:right-4">
        <BurgerMenu />
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
