import Link from "next/link";

Link
const Cta = () => {
  return (

      <div className="flex gap-6 justify-center items-top bg-[#5F37EF] text-white p-10">
        <div className="max-w-[450px]">
          WooCommerce - the most customizable eCommerce platform for building
          your online business.
        </div>
        <button className="border-2 border-white rounded-3xl px-6"> <Link href='/'>Get Started</Link> </button>
      </div>

  );
};

export default Cta;