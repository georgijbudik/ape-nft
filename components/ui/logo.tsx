import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className: string }) => {
  return (
    <Link href="/" className="group">
      <svg
        className={cn(
          "w-12 h-8 lg:w-[72px] lg:h-[50px] transition-all duration-300",
          className
        )}
      >
        <use xlinkHref="/icons/sprite.svg#icon-logo"></use>
      </svg>
    </Link>
  );
};

export default Logo;
