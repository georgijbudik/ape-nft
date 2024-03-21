import Image from "next/image";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const titles = [
  {
    title: "Have no limits",
  },
  {
    title: "Destroy stereotypes",
  },
  {
    title: "Break rules",
  },
];

const About = () => {
  return (
    <>
      <section className="container pt-[60px] md:pt-20 md:relative lg:pt-[120px]">
        <div className="md:flex md:justify-between md:mb-[68px] lg:mb-14">
          <h2 className="w-[216px] md:w-[269px] lg:w-[538px] mb-[6px]">
            <span className="text-primary text-[40px] md:text-6xl lg:text-[120px] font-black uppercase leading-10 md:leading-[60px] lg:leading-[120px]">
              a Story that started with
            </span>
            <span className="text-accent text-[40px] md:text-6xl lg:text-[120px] font-black uppercase leading-10 md:leading-[60px] lg:leading-[120px]">
              {" "}
              one simple
              <br className="md:hidden" />
              ape
            </span>
          </h2>
          <p className="w-[216px] md:w-[275px] lg:w-[409px] mb-9 md:mb-0 text-right text-primary text-base lg:text-2xl font-normal font-messinaSans uppercase leading-[19px] lg:leading-[29px]">
            WHO GOT
            <br className="md:hidden" />
            FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW THE IDEA
            OF ESCAPING AND DYNAMIC JOURNEY ON THE YACHT
          </p>
        </div>
        <div className="w-[216px] md:w-[269px] lg:w-[417px] flex flex-col items-center mb-10 md:mb-0">
          <svg className="w-6 h-6 stroke-primary mb-4 md:mb-6 lg:mb-9">
            <use xlinkHref="/icons/sprite.svg#icon-cross"></use>
          </svg>
          <p className="text-center text-primary text-xs md:text-base lg:text-2xl font-normal font-messinaSans uppercase leading-[14px] md:leading-[19px] lg:leading-[29px]">
            EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS
            ARE RANDOMLY GENERATED BY USERS
          </p>
        </div>
        <Image
          src="/images/about.png"
          alt="Big ape"
          width={492}
          height={662}
          className="w-[216px] h-[292px] md:w-[313px] md:h-[422px] lg:w-[492px] lg:h-[662px] md:absolute md:bottom-[-36px] lg:bottom-[-40px] md:right-[88px]"
        />
      </section>
      <div className="h-[52px] lg:h-[86px] pt-1.5 pb-[9px] bg-accent md:mt-9 lg:mt-10">
        <InfiniteMovingCards items={titles} pauseOnHover={false} />
      </div>
    </>
  );
};

export default About;
