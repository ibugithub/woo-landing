import Image from "next/image";
import HeaderNav from "@/content/headerNabLink";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex  justify-between font-medium  p-6">
      <div className="flex ">
        <Image
          src="/images/logo.png"
          width={170}
          height={30}
          alt="this is a logo"
        />
        <ul className="flex items-center gap-4 pl-16">
          {HeaderNav.map(({href, title}) => (
            <Link key={title} href={href}>{title}</Link>
          ))}
        </ul>
      </div>

      <ul className="flex gap-4 items-center ">
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
