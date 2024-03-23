import Title from "./ui/title";

import CollectionSwiper from "./collection/collection-swiper";

const Collection = () => {
  return (
    <section
      id="arts"
      className="container items-center pt-[60px] md:pt-20 lg:pt-[120px]"
    >
      <Title>Collection</Title>

      <CollectionSwiper />
    </section>
  );
};

export default Collection;
