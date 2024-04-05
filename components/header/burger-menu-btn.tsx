import { cn } from "@/lib/utils";

const BurgerMenuBtn = ({
  label,
  isDropDownOpen,
}: {
  label: string;
  isDropDownOpen?: boolean;
}) => {
  return (
    <div
      className={cn(
        "w-12 h-12 lg:w-20 lg:h-20 bg-stone-900 bg-opacity-10 rounded-lg backdrop-blur-md justify-center items-center inline-flex group hover:cursor-pointer",
        isDropDownOpen && "rounded-none first:rounded-l-xl "
      )}
    >
      <button
        type="button"
        className="text-stone-900 text-xs lg:text-base uppercase font-semibold font-messinaSans leading-[14px] lg:leading-[19px] group-hover:underline group-focus:underline group-hover:text-primary group-focus:text-primary transition-all duration-300"
      >
        {label}
      </button>
    </div>
  );
};

export default BurgerMenuBtn;
