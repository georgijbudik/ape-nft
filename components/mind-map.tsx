"use client";
import MindMapItem from "./ui/mind-map-item";
import Pagination from "./ui/pagination";
import Title from "./ui/title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const mindMapItems = [
  {
    text: "All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own",
    title: "YAPE DROP",
  },
  {
    text: "Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game",
    title: "NEW COLLECTION",
  },
  {
    text: "Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it",
    title: "TOKEN",
  },
];

const MindMap = () => {
  return (
    <section className="container pt-[60px] md:pt-20 lg:pt-[120px]">
      <Title>Mind map</Title>
      <div className="hidden md:grid md:grid-cols-2 md:gap-6">
        {mindMapItems.map((item, index) => {
          return (
            <MindMapItem key={index} text={item.text} title={item.title} />
          );
        })}
        <a
          href="https://boredapeyachtclub.com/"
          target="blank"
          referrerPolicy="no-referrer"
        >
          <div className="w-[216px] h-[242px] md:w-[284px] lg:w-[504px] lg:h-[480px] px-3 py-6 md:p-6 bg-accent rounded-xl md:rounded-2xl lg:rounded-3xl flex-col justify-between inline-flex">
            <div className="flex justify-end pr-3 lg:pr-0">
              <svg className="w-[36px] h-[36px] lg:w-12 lg:h-12 stroke-primary">
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
      </div>
      <div className="md:hidden">
        <Swiper className="mySwiper" spaceBetween={24}>
          {mindMapItems.map((item, index) => {
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
            >
              <div className="w-[216px] h-[242px] md:w-[284px] lg:w-[504px] lg:h-[480px] px-3 py-6 md:p-6 bg-accent rounded-xl md:rounded-2xl lg:rounded-3xl flex-col justify-between inline-flex">
                <div className="flex justify-end pr-3 lg:pr-0">
                  <svg className="w-[36px] h-[36px] lg:w-12 lg:h-12 stroke-primary">
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
      </div>
    </section>
  );
};

export default MindMap;
