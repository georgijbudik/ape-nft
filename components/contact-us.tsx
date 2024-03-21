import MintForm from "./ui/mint-form";
import Title from "./ui/title";

const ContactUs = () => {
  return (
    <section className="container flex flex-col items-center pt-[60px] md:pt-20 lg:pt-[120px]">
      <Title>Are you in?</Title>
      <svg className="w-6 h-6 stroke-primary mb-4 md:mb-6 lg:mb-9">
        <use xlinkHref="/icons/sprite.svg#icon-cross"></use>
      </svg>
      <p className="w-[216px] md:w-[397px] lg:w-[581px] mb-4 md:mb-6 lg:mb-10 text-center text-primary text-base lg:text-2xl font-normal font-messinaSans uppercase leading-[19px] lg:leading-[29px]">
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>
      <MintForm />
    </section>
  );
};

export default ContactUs;