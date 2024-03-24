import MintForm from "./contact/mint-form";
import Title from "./ui/title";

const ContactUs = () => {
  return (
    <section
      id="mint"
      className="container xs:max-w-[480px] md:max-w-[768px] lg:max-w-[1280px] flex flex-col items-center pt-[60px] md:pt-20 lg:pt-[120px]"
    >
      <Title>Are you in?</Title>
      <svg className="w-9 h-9 stroke-primary mb-4 md:mb-6 lg:mb-10">
        <use xlinkHref="/icons/sprite.svg#icon-cross"></use>
      </svg>
      <p className="xs:w-full w-[216px] md:w-[397px] lg:w-[581px] mb-4 md:mb-6 lg:mb-10 text-center text-primary text-base lg:text-2xl font-normal font-messinaSans uppercase leading-[19px] lg:leading-[29px]">
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>
      <MintForm />
    </section>
  );
};

export default ContactUs;
