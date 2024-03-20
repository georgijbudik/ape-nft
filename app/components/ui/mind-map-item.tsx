const MindMapItem = ({ text, title }: { text: string; title: string }) => {
  return (
    <div className="w-[216px] h-[242px] md:w-[284px] lg:w-[504px] lg:h-[480px] flex flex-col justify-between py-6 px-3 md:p-6 bg-[#1E1E1E] gap-6 rounded-xl md:rounded-2xl lg:rounded-3xl">
      <div className="flex md:justify-end">
        <p className="w-48 md:w-32 lg:w-[228px] text-white text-xs lg:text-2xl font-normal font-messinaSans uppercase leading-[14px] lg:leading-[29px]">
          {text}
        </p>
      </div>
      <h3 className="w-48 lg:w-[456px] text-white text-[32px] lg:text-[64px] font-black uppercase leading-8 lg:leading-[64px]">
        {title}
      </h3>
    </div>
  );
};

export default MindMapItem;
