import { cn } from "@/lib/utils";
import Link from "next/link";

interface IBurgerMenuLinkProps {
  label: string;
  href: string;
  canChangeColor: boolean;
}

const BurgerMenuLink = ({
  label,
  href,
  canChangeColor,
}: IBurgerMenuLinkProps) => {
  return (
    <div className="h-full w-full justify-center items-center flex group hover:cursor-pointer">
      <Link
        href={href}
        className={cn(
          "w-full h-full text-stone-900 justify-center items-center flex text-xs lg:text-base uppercase font-semibold font-messinaSans leading-[14px] group-hover:underline group-focus:underline group-hover:text-primary group-focus:text-primary transition-all duration-300",
          canChangeColor && "text-primary"
        )}
      >
        {label}
      </Link>
    </div>
  );
};

export default BurgerMenuLink;
