"use client";

interface IPaginationProps {
  prevImage: () => void;
  nextImage: () => void;
}

const Pagination = ({ prevImage, nextImage }: IPaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-12 mt-6">
      <button
        onClick={prevImage}
        className="text-primary text-2xl font-normal font-biroScript leading-normal hover:accent transition-all duration-300"
      >
        Prev
      </button>
      <button
        onClick={nextImage}
        className="text-primary text-2xl font-normal font-biroScript leading-normal hover:accent transition-all duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
