import FeatureItems from "./content/feature-items";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const FeatureSection = () => {
  return (
    <div>
      <div className="flex justify-center text-4xl font-medium ">
        <h1 className="w-80 text-center text-[#343a5f]">
          Your eCommerce made simple
        </h1>
      </div>
      <div className="flex justify-between px-20 pt-14">
        {FeatureItems.map(({ img, title, description, linkTitle, link }, index) => (
          <div key={title} className={index === 2 ? 'mt-20' : index === 1 ? 'mt-6' : '' }>
            <Image
              src={img}
              alt="this is feature image"
              width={450}
              height={450}
            />
            <div className="px-10 flex flex-col gap-2">
              <h1 className="text-2xl text-[#72D4E] font-medium">{title}</h1>
              <p className="text-[#94A2B3]">{description}</p>
              <div className="text-[#299EF3] flex items-center gap-1">
                <Link className=" font-medium" href={link}>{linkTitle}</Link>
                <IoIosArrowForward />
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
