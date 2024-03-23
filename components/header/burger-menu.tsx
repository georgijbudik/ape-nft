const BurgerMenu = ({ label }: { label: string }) => {
  return (
    <div className="w-12 h-12 lg:w-20 lg:h-20 bg-stone-900 bg-opacity-10 rounded-lg backdrop-blur-md justify-center items-center gap-2 inline-flex group hover:cursor-pointer">
      <button
        type="button"
        className="text-stone-900 text-xs lg:text-base font-semibold font-messinaSans leading-[14px] group-hover:underline group-hover:text-primary transition-all duration-300"
      >
        {label}
      </button>
    </div>
  );
};

export default BurgerMenu;
