import { useSwiper } from "swiper/react";

const Pagination = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center justify-center gap-12 mt-6">
      <button
        type="button"
        className="text-primary text-2xl font-normal font-biroScript leading-normal hover:text-accent focus:text-accent  transition-all duration-300"
        onClick={() => swiper.slidePrev()}
      >
        Prev
      </button>
      <button
        type="button"
        className="text-primary text-2xl font-normal font-biroScript leading-normal hover:text-accent focus:text-accent  transition-all duration-300"
        onClick={() => swiper.slideNext()}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
