/* eslint-disable @next/next/no-img-element */
import FooterContent from "./content";

const Footer = () => {
  return (
    <div className="bg-[#7854F7] pt-10">
      <ul className="flex justify-center text-white gap-16">
        <li className="flex items-center gap-2">
          <img className="h-[80%]" src="/images/tik.png" alt="" />
          <span>30 day money back guarantee</span>
        </li>

        <li className="flex items-center gap-2">
          <img className="h-[80%]" src="/images/circle.png" alt="" />
          <span>Support teams across the world</span>
        </li>

        <li className="flex items-center gap-2">
          <img className="h-[80%]" src="/images/lock.png" alt="" />
          <span>Safe & Secure online payment</span>
        </li>
      </ul>

      <div className="flex justify-center mt-36 mb-16">
        <img src="./images/fLOGO.png" alt="" />
      </div>

      <div className="mb-16">
        <hr />
      </div>

      <div className="flex justify-between text-white px-24 pb-16">
        {FooterContent.map(({ title, items }, index) => (
          <div key={index}>
            <h1 className="mb-5">{title}</h1>
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between px-10 bg-white py-6 items-center">
        <ul className="flex gap-6">
          <li ><img className="h-[80%]" src="/images/Twitter.png" alt="" /></li>
          <li> <img className="h-[80%]" src="/images/Facebook.png" alt="" /> </li>
          <li><img className="h-[80%]" src="/images/Wifi.png" alt="" /></li>
          <li><img className="h-[80%]" src="/images/Intragram.png" alt="" /></li>
        </ul>
        <div>COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS  PRIVACY POLICY</div>
        <img className="h-[40%]" src="/images/Automattic.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
