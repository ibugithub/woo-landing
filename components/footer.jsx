/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <div className="bg-[#7854F7]">
      <ul className="flex justify-center text-white gap-2">
        <li className="flex items-center gap-2">
          <img src='/images/tik.png' alt='' />
          <span>30 day money back guarantee</span>
        </li>

        <li className="flex items-center gap-2">
          <img src='/images/circle.png' alt='' />
          <span>Support teams across the world</span>
        </li> 

        <li className="flex items-center gap-2">
          <img src='/images/lock.png' alt='' />
          <span>Safe & Secure online payment</span>
        </li>
      </ul>
    </div>
  );
}

export default Footer;