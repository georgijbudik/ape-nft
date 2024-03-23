import { cn } from "@/lib/utils";

const BurgerMenuLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <div className="w-12 h-12 lg:w-20 lg:h-20 bg-stone-900 bg-opacity-10 backdrop-blur-md justify-center items-center inline-flex group hover:cursor-pointer">
      <a
        href={href}
        className={cn(
          "text-stone-900 text-xs lg:text-base uppercase font-semibold font-messinaSans leading-[14px] group-hover:underline group-hover:text-primary transition-all duration-300"
        )}
      >
        {label}
      </a>
    </div>
  );
};

export default BurgerMenuLink;
