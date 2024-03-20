import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-white text-[44px] md:text-[80px] lg:text-[160px] font-black font-rightGrotesk uppercase leading-10 md:leading-[80px] lg:leading-[160px]">
      {children}
    </h2>
  );
};

export default Title;
