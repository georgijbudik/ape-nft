"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Pagination from "./ui/pagination";
import Title from "./ui/title";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import "swiper/css";
import "swiper/css/navigation";

const collectionItems = [
  {
    src: "/images/collection-ape-1.png",
  },
  {
    src: "/images/collection-ape-2.png",
  },
  {
    src: "/images/collection-ape-3.png",
  },
  {
    src: "/images/collection-ape-4.png",
  },
  {
    src: "/images/collection-ape-5.png",
  },
  {
    src: "/images/collection-ape-6.png",
  },
  {
    src: "/images/collection-ape-7.png",
  },
  {
    src: "/images/collection-ape-8.png",
  },
  {
    src: "/images/collection-ape-9.png",
  },
  {
    src: "/images/collection-ape-10.png",
  },
  {
    src: "/images/collection-ape-11.png",
  },
  {
    src: "/images/collection-ape-12.png",
  },
  {
    src: "/images/collection-ape-13.png",
  },
  {
    src: "/images/collection-ape-14.png",
  },
];

const Collection = () => {
  const tabletQuery = useMediaQuery("(min-width: 768px)");
  const desktopQuery = useMediaQuery("(min-width: 1280px)");

  const slidesPerView = desktopQuery ? 4 : tabletQuery ? 2 : 1;

  return (
    <section className="container items-center pt-[60px] md:pt-20 lg:pt-[120px]">
      <Title>Collection</Title>

      <Swiper
        className="mySwiper"
        spaceBetween={24}
        slidesPerView={slidesPerView}
      >
        {collectionItems.map((item, index) => {
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
    </section>
  );
};

export default Collection;
