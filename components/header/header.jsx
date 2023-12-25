import Image from "next/image";

const Header = () => {
  return (
    <div className="flex  justify-between font-medium  p-6">
      <div className="flex">
        <Image
          src="/images/logo.png"
          width={170}
          height={30}
          alt="this is a logo"
        />
        <ul className="flex gap-4 pl-20 items-center">
          <li>Sell</li>
          <li>MarketPlace</li>
          <li>Community</li>
          <li>Develop</li>
          <li>Resource</li>
        </ul>
      </div>

      <ul className="flex gap-4 items-center">
        <li>Log In</li>
        <li className="bg-[#7854F7] text-white px-3 py-2 rounded" >Get Started</li>
        <li>
          <Image
            src="/images/search-icon.png"
            width={16}
            height={16}
            alt="this is a search icon"
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;
