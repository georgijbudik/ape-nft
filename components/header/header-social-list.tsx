import React from "react";
import HeaderSocialItem from "./header-social-item";
import { cn } from "@/lib/utils";
import { SOCIAL_MEDIA_ITEMS } from "@/constants";

interface IHeaderSocialListProps {
  isModalOpen?: boolean;
  canChangeColor?: boolean;
}

const HeaderSocialList = ({
  isModalOpen,
  canChangeColor,
}: IHeaderSocialListProps) => {
  return (
    <ul
      className={cn(
        "fixed z-10 flex flex-col right-4 md:right-7 lg:right-8 top-[120px] lg:top-[136px] gap-2 lg:gap-4",
        isModalOpen &&
          "right-4 top-[118px] md:top-[122px] lg:top-[160px] md:right-4 lg:right-4"
      )}
    >
      {SOCIAL_MEDIA_ITEMS.map((item, index) => {
        return (
          <HeaderSocialItem
            link={item.link}
            isModalOpen={isModalOpen}
            key={index}
            icon={item.icon}
            canChangeColor={canChangeColor}
          />
        );
      })}
    </ul>
  );
};

export default HeaderSocialList;
