import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="group">
      <svg className="w-12 h-8 lg:w-[72px] lg:h-[50px] fill-secondary group-hover:fill-primary transition-all duration-300">
        <use xlinkHref="/icons/sprite.svg#icon-logo"></use>
      </svg>
    </Link>
  );
};

export default Logo;
