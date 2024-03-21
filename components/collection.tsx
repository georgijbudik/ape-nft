"use client";
import Pagination from "./ui/pagination";
import Title from "./ui/title";
import Image from "next/image";

const Collection = () => {
  const prevImage = () => {};

  const nextImage = () => {};

  return (
    <section className="container pt-[60px] md:pt-20 lg:pt-[120px]">
      <Title>Collection</Title>
      <Image
        src="/images/collection-ape-1.png"
        alt="Ape"
        width={284}
        height={336}
        className="w-[216px] h-[256px]"
      />
      <Pagination prevImage={prevImage} nextImage={nextImage} />
    </section>
  );
};

export default Collection;
