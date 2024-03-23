import Image from "next/image";
import Link from "next/link";
import Header from "./header";

const Hero = () => {
  return (
    <section className="px-2 md:px-4">
      <div className="bg-accent w-full h-[542px] md:h-[421px] lg:h-[677px] rounded-xl pt-9 px-2 md:pb-[35px] pb-[19px] md:px-[72px] md:pt-[124px] lg:px-[96px] lg:pt-[197px] relative">
        <Header />
        <div className="mx-auto max-w-[217px] md:max-w-[592px] lg:max-w-[1021px] flex flex-col items-center md:items-start">
          <p className="text-secondary text-center md:text-left w-full text-base md:text-xl lg:text-2xl lg:leading-10 font-biroScript leading-[27px] md:leading-[33px]">
            diD yOu seE iT ?
          </p>
          <h1 className="text-secondary text-[44px] md:w-full md:tracking-normal md:flex md:justify-between md:text-[92px] lg:text-[164px] mb-2 md:mb-4 font-black leading-[44px] md:leading-[92px] lg:leading-[164px] tracking-wide">
            <span>YACHT</span>
            <span>APES</span>
          </h1>
          <p className="text-right md:inline-flex text-secondary mb-[6px] text-base md:text-xl lg:text-2xl font-normal font-biroScript leading-[27px] md:leading-[33px] lg:leading-10 lg:pl-[120px]">
            Apes aRe eveRywhere
          </p>
          <div className="md:absolute md:bottom-0 md:right-[50.5%] md:translate-x-[45%]">
            <Image
              src="/images/hero.png"
              alt="Big ape"
              width={463}
              height={612}
              className="w-[216px] h-[284px] md:w-[283px] md:h-[386px] lg:w-[463px] lg:h-[612px]"
              priority
            />
          </div>
          <div className="flex flex-col-reverse items-center md:flex-col w-full md:items-end md:mt-[-24px]">
            <p className="w-[217px] md:w-[190px] lg:w-[337px] md:mb-4 lg:mb-7 text-center md:text-justify md:first-letter:ml-20 text-secondary text-xs lg:text-base font-messinaSans uppercase leading-[14px]">
              Yacht Ape is a collection of unique digital apes that you can own
              in NFT format
            </p>
            <button
              type="button"
              className="w-[216px] h-[41px] md:w-[190px] md:h-[41px] md:px-[61px] px-[70px] lg:w-[337px] lg:h-[70px] pt-2.5 pb-3 lg:pt-4 lg:pb-5 mb-3 md:mb-0 bg-stone-900 bg-opacity-10 rounded-lg md:rounded-xl backdrop-blur-md justify-center items-center relative top-[-4px] text-secondary text-base lg:text-[28px] font-black leading-[19px] lg:leading-[34px] hover:text-primary transition-all duration-300 "
            >
              <Link href="#mint">MEET APES</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
