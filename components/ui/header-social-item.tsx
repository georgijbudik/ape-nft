const HeaderSocialItem = ({ icon }: { icon: string }) => {
  return (
    <li className="w-12 h-12 lg:w-20 lg:h-20 bg-stone-900 bg-opacity-10 rounded-lg backdrop-blur-md justify-center items-center gap-2 inline-flex group hover:cursor-pointer">
      <button
        type="button"
        className="text-stone-900 text-xs lg:text-base font-semibold font-messinaSans leading-[14px]"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6 group-hover:fill-primary transition-all duration-300">
          <use xlinkHref={`/icons/sprite.svg#${icon}`}></use>
        </svg>
      </button>
    </li>
  );
};

export default HeaderSocialItem;
