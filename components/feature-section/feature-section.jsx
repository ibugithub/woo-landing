import FeatureItems from "./content/feature-items";
import Image from "next/image";

const FeatureSection = () => {
  return (
    <div>
      <div className="flex justify-center text-4xl font-medium ">
        <h1 className="w-80 text-center text-[#343a5f]">Your eCommerce made simple</h1>
      </div>
      <div className="flex justify-between px-20 pt-14">
        {FeatureItems.map(({ img, title, description, linkTitle, link }) => (
          <div key={title}>
            <Image
              src={img}
              alt="this is feature image"
              width={450}
              height={450}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
