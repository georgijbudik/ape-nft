"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Pagination from "../ui/pagination";
import { useMediaQuery } from "usehooks-ts";
import "swiper/css";
import "swiper/css/navigation";
import { COLLECTION_ITEMS } from "@/constants";

const CollectionSwiper = () => {
  const tabletQuery = useMediaQuery("(min-width: 768px)");
  const desktopQuery = useMediaQuery("(min-width: 1280px)");

  const slidesPerView = desktopQuery ? 4 : tabletQuery ? 2 : 1;
  return (
    <Swiper
      className="mySwiper w-[216px] md:w-full"
      spaceBetween={24}
      slidesPerView={slidesPerView}
    >
      {COLLECTION_ITEMS.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={item.src}
              alt="Ape"
              width={284}
              height={336}
              className="w-[216px] h-[256px] md:w-[284px] md:h-[336px] lg:w-[240px] lg:h-[280px] md:rounded-3xl"
            />
          </SwiperSlide>
        );
      })}
      <Pagination />
    </Swiper>
  );
};

export default CollectionSwiper;
