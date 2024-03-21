"use client";
import MindMapItem from "./ui/mind-map-item";
import Pagination from "./ui/pagination";
import Title from "./ui/title";

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
  const prevImage = () => {};

  const nextImage = () => {};
  return (
    <section className="container pt-[60px] md:pt-20 lg:pt-[120px]">
      <div className="flex flex-col items-center">
        <Title>Mind map</Title>
        <div className="md:grid md:grid-cols-2 md:gap-6 md:justify-center">
          {mindMapItems.map((item, index) => {
            return (
              <MindMapItem key={index} text={item.text} title={item.title} />
            );
          })}
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
        </div>
        <div className="md:hidden">
          <Pagination prevImage={prevImage} nextImage={nextImage} />
        </div>
      </div>
    </section>
  );
};

export default MindMap;
