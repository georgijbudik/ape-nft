const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-primary text-[44px] md:text-[80px] lg:text-[160px] mb-6 md:mb-10 lg:mb-20 font-black font-rightGrotesk uppercase leading-10 md:leading-[80px] lg:leading-[160px]">
      {children}
    </h2>
  );
};

export default Title;
