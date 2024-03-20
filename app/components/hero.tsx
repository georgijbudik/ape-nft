import Image from "next/image";
import Logo from "./ui/logo";

const Hero = () => {
  return (
    <div className="pt-14 md:px-4 lg:pt-4">
      <section className="bg-[#DC3B5A] w-full h-[542px] md:h-[421px] lg:h-[677px] rounded-xl pt-4 px-2 md:pb-[35px] pb-[19px] md:px-[72px] md:pt-[104px] lg:px-[96px] lg:pt-[197px] md:relative">
        {/* <Logo /> */}
        <div className="flex flex-col sm:items-center md:items-start">
          <p className="text-stone-900 text-center md:text-left w-full text-base md:text-xl lg:text-2xl lg:leading-10 font-biroScript leading-[27px] md:leading-[33px] mt-5">
            diD yOu seE iT ?
          </p>
          <h1 className="text-stone-900 text-[44px] md:w-full md:flex md:justify-between md:text-[92px] lg:text-[164px] mb-2 md:mb-4 font-black leading-[44px] md:leading-[92px] lg:leading-[164px] tracking-wide">
            <span>YACHT</span>
            <span>APES</span>
          </h1>
          <p className="text-right md:inline-flex text-stone-900 mb-[6px] text-base md:text-xl lg:text-2xl font-normal font-biroScript leading-[27px] md:leading-[33px] lg:leading-10 lg:pl-[120px]">
            Apes aRe eveRywhere
          </p>
          <Image
            src="/images/hero.png"
            alt="Big ape"
            width={463}
            height={612}
            className="w-[216px] h-[284px] md:w-[283px] md:h-[386px] lg:w-[463px] lg:h-[612px] md:absolute md:bottom-0 md:left-[206px] lg:left-[370px]"
          />
          <div className="flex flex-col-reverse items-center md:flex-col w-full md:items-end md:mt-[-24px]">
            <p className="w-[217px] md:w-[190px] lg:w-[337px] md:mb-4 lg:mb-7 text-center md:text-justify text-stone-900 text-xs font-messinaSans uppercase leading-[14px]">
              {"‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎"} Yacht Ape is a collection of unique digital
              apes that you can own in NFT format
            </p>
            <button
              type="button"
              className="w-[216px] h-[41px] md:w-[190px] md:h-[41px] md:px-[61px] px-[70px] pt-2.5 pb-3 mb-3 bg-stone-900 bg-opacity-10 rounded-lg backdrop-blur-md justify-center items-center relative top-[-4px] text-stone-900 text-base font-black leading-[19px] "
            >
              MEET APES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
