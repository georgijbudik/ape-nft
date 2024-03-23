"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Pagination from "../ui/pagination";
import MindMapItem from "../ui/mind-map-item";
import "swiper/css";
import "swiper/css/navigation";
import { MIND_MAP_ITEMS } from "@/constants";

const MindMapSwiper = () => {
  return (
    <Swiper className="mySwiper" spaceBetween={24}>
      {MIND_MAP_ITEMS.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <MindMapItem text={item.text} title={item.title} />
          </SwiperSlide>
        );
      })}
      <SwiperSlide>
        <a
          href="https://boredapeyachtclub.com/"
          target="blank"
          referrerPolicy="no-referrer"
          className="group"
        >
          <div className="w-[216px] h-[242px] md:w-[284px] lg:w-[504px] lg:h-[480px] px-3 py-6 md:p-6 bg-accent rounded-xl md:rounded-2xl lg:rounded-3xl flex-col justify-between inline-flex">
            <div className="flex justify-end pr-3 lg:pr-0">
              <svg className="w-[36px] h-[36px] lg:w-12 lg:h-12 stroke-primary group-hover:translate-y-[-15px] transition-all duration-300">
                <use xlinkHref="/icons/sprite.svg#icon-arrow"></use>
              </svg>
            </div>
            <div className="w-48 lg:w-[456px] text-primary text-[32px] lg:text-[64px] font-black uppercase leading-8 lg:leading-[64px]">
              Learn
              <br />
              more
              <br />
              in mind map
            </div>
          </div>
        </a>
      </SwiperSlide>
      <Pagination />
    </Swiper>
  );
};

export default MindMapSwiper;
