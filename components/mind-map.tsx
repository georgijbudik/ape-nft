import MindMapItem from "./ui/mind-map-item";
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
  return (
    <section className="container pt-[60px] md:pt-20 lg:pt-[120px]">
      <div className="flex flex-col items-center">
        <Title>Mind map</Title>
        <div className="mb-6 md:grid md:grid-cols-2 md:gap-6 md:justify-center">
          {mindMapItems.map((item, index) => {
            return (
              <MindMapItem key={index} text={item.text} title={item.title} />
            );
          })}
          <div className="w-[216px] h-[242px] md:w-[284px] lg:w-[504px] lg:h-[480px] px-3 py-6 md:p-6 bg-accent rounded-xl md:rounded-2xl lg:rounded-3xl flex-col justify-between inline-flex">
            <div className="p-3 origin-top-left rotate-180 justify-center items-center gap-2.5 inline-flex" />
            <div className="w-48 lg:w-[456px] text-primary text-[32px] lg:text-[64px] font-black uppercase leading-8 lg:leading-[64px]">
              Learn
              <br />
              more
              <br />
              in mind map
            </div>
          </div>
        </div>

        <div className="flex gap-12 md:hidden">
          <button
            type="button"
            className="text-primary text-2xl font-normal font-biroScript leading-normal"
          >
            Prev
          </button>
          <button className="text-primary text-2xl font-normal font-biroScript leading-normal">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default MindMap;
