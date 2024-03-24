"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Pagination from "../ui/pagination";
import MindMapItem from "./mind-map-item";
import "swiper/css";
import "swiper/css/navigation";
import { MIND_MAP_ITEMS } from "@/constants";
import LearnMoreCard from "./learn-more-card";

const MindMapSwiper = () => {
  return (
    <Swiper
      className="mySwiper w-[216px] md:w-[284px] lg:w-[240px]"
      spaceBetween={24}
    >
      {MIND_MAP_ITEMS.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <MindMapItem text={item.text} title={item.title} />
          </SwiperSlide>
        );
      })}
      <SwiperSlide>
        <LearnMoreCard />
      </SwiperSlide>
      <Pagination />
    </Swiper>
  );
};

export default MindMapSwiper;
