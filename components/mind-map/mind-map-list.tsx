import { MIND_MAP_ITEMS } from "@/constants";
import MindMapItem from "./mind-map-item";
import LearnMoreCard from "./learn-more-card";

const MindMapList = () => {
  return (
    <>
      {MIND_MAP_ITEMS.map((item, index) => {
        return <MindMapItem key={index} text={item.text} title={item.title} />;
      })}
      <LearnMoreCard />
    </>
  );
};

export default MindMapList;
