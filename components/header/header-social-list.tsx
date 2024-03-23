import React from "react";
import HeaderSocialItem from "./header-social-item";
import { cn } from "@/lib/utils";
import { SOCIAL_MEDIA_ITEMS } from "@/constants";

const HeaderSocialList = ({ isModalOpen }: { isModalOpen?: boolean }) => {
  return (
    <ul
      className={cn(
        "absolute flex flex-col right-2 md:right-3 lg:right-4 top-[64px] md:top-[68px] lg:top-[120px] gap-2 lg:gap-4",
        isModalOpen &&
          "right-4 top-[118px] md:top-[122px] lg:top-[160px] md:right-4"
      )}
    >
      {SOCIAL_MEDIA_ITEMS.map((item, index) => {
        return (
          <HeaderSocialItem
            isModalOpen={isModalOpen}
            key={index}
            icon={item.icon}
          />
        );
      })}
    </ul>
  );
};

export default HeaderSocialList;
