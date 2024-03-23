import { cn } from "@/lib/utils";

interface IHeaderSocialItemProps {
  isModalOpen?: boolean;
  icon: string;
  link: string;
}

const HeaderSocialItem = ({
  isModalOpen,
  icon,
  link,
}: IHeaderSocialItemProps) => {
  return (
    <li
      className={cn(
        "w-12 h-12 lg:w-20 lg:h-20 bg-stone-900 bg-opacity-10 rounded-lg backdrop-blur-md justify-center items-center gap-2 inline-flex group hover:cursor-pointer",
        isModalOpen && "bg-white"
      )}
    >
      <a
        href={link}
        target="blank"
        referrerPolicy="no-referrer"
        className="w-full h-full flex items-center justify-center"
      >
        <svg
          className={cn(
            "w-4 h-4 md:w-6 md:h-6 group-hover:fill-primary transition-all duration-300",
            isModalOpen && "fill-primary group-hover:fill-accent"
          )}
        >
          <use xlinkHref={`/icons/sprite.svg#${icon}`}></use>
        </svg>
      </a>
    </li>
  );
};

export default HeaderSocialItem;
