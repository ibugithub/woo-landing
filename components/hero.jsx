import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <div className="flex mt-16">
        <div className="w-3/5  pl-32 flex flex-col gap-6">
          <h1 className="text-5xl font-medium text-[#272D4E] leading-tight">
            Building exactly the eCommerce website you want.
          </h1>
          <div className="w-4/5">
            <p className="text-[#94A2B3]">
              WooCommerce is a customizable, open-source eCommerce platform
              built on WordPress. Get started quickly and make your way.
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <button className="bg-[#7854F7] text-[white] px-7 py-3 rounded-3xl">
              Start a New Store
            </button>
            <div>or</div>
            <div className="text-[#299EF3] font-medium">Customize & Extend</div>
            <div className="text-[#299EF3]">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="w-2/5 relative">
          <Image
            src="/images/fimage.png"
            alt="this the featured image"
            width={500}
            height={400}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
