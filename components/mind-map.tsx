import MindMapItem from "./mind-map/mind-map-item";
import Title from "./ui/title";
import MindMapSwiper from "./mind-map/mind-map-swiper";
import { MIND_MAP_ITEMS } from "@/constants";
import MindMapList from "./mind-map/mind-map-list";

const MindMap = () => {
  return (
    <section
      id="mind-map"
      className="container pt-[60px] md:pt-20 lg:pt-[120px]"
    >
      <Title>Mind map</Title>
      <div className="hidden md:grid md:grid-cols-2 md:gap-6">
        <MindMapList />
      </div>
      <div className="md:hidden">
        <MindMapSwiper />
      </div>
    </section>
  );
};

export default MindMap;
