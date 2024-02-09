import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
        We Provide You
          <span className='text-coral-red'> With </span>
          <span className='text-coral-red'>Super Quality </span> Bus
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Setting the Standard: Our Unwavering Dedication to Delivering Superlative Bus Quality and Service.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        With a relentless focus on quality assurance and customer satisfaction, we strive to raise the bar in the transportation sector, setting a new standard for excellence that our competitors aspire to emulate.
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
