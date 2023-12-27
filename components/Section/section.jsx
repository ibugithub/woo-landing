/* eslint-disable @next/next/no-img-element */
import "./section.css";
import Image from "next/image";

const Section = () => {
  return (
    <div id="" className="mt-32 relative section">
      {/* <Image
        className="absolute"
        src="/images/sectionBg.png"
        alt="This is a section background image"
        width={1920}
        height={1110}
      /> */}

      <div className="flex flex-col section-container">
        <div className="flex">
          <div className="flex  items-center w-2/3 relative">
            <img
              className="w-1/2"
              src="/images/card1.png"
              alt="This is a card iamge"

            />

            <div className="mt-14 w-1/2 text-white">
              <h1 className="text-2xl  font-medium">Develop Without Limits</h1>
              <p>
                WooCommerce is developer friendly, too. Built with a REST API,
                WooCommerce is scalable and can integrate with virtually any
                service. Design a complex store from scratch, extend a store for
                a client, or simply add a single product to a WordPress
                site—your store, your way.
              </p>
              <button className="bg-[#70C217] text-white rounded-3xl py-3 px-5">
                {" "}
                Read the Documentation{" "}
              </button>
            </div>
          </div>
          <div className="w-1/3"></div>
        </div>

        <div className="flex">
          <div className="w-1/3"></div>
          <div className="flex  w-2/3">
            <div className="mt-14 w-1/2 text-white text-end">
              <h1 className="text-2xl  font-medium">
                Know our Global Community
              </h1>
              <p>
                WooCommerce is one of the fastest-growing eCommerce communities.
                We’re proud that the helpfulness of the community and a wealth
                of online resources are frequently cited as reasons our users
                love it. There are 80+ meetups worldwide!
              </p>
              <button className="bg-[#70C217] text-white rounded-3xl py-3 px-5">
                {" "}
                Read the Documentation{" "}
              </button>
            </div>

            <img
              className="w-1/2"
              src="/images/card2.png"
              alt="This is a card iamge"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
