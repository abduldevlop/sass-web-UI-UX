import React from "react";

import features1 from "../public/assets/feature-1.svg";
import features2 from "../public/assets/feature-2.svg";
import features3 from "../public/assets/feature-3.svg";

import check from "../public/assets/check.svg";
import blueBtn from "../public/assets/blue-button.svg";
import greenBtn from "../public/assets/green-button.svg";
import pinkBtn from "../public/assets/pink-button.svg";
import Image from "next/image";

const Features = () => {
  return (
    <section className="px-[20px] lg:container  lg:mx-auto ">
      <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px]  lg:gap-y-[80px] ">
        <div className="flex flex-col gap-x-6 sm:flex-row-reverse ">
          <Image
            src={features1}
            alt="featuser-1"
            className="hidden w-1/2 sm:block  "
          />
          <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px] ">
            <h3 className="font-medium text-[#0085FF] lg:text-[18px]  ">
              Sales Monitoring
            </h3>
            <h1 className=" pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]  ">
              Simplify your sales monitoring
            </h1>
            <Image
              src={features1}
              alt="features1"
              className="pt-[24px] sm:hidden "
            />
            <p className="py-[24px] text-[#36485C] font-medium lg:text-[18px]">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a bird's eye view with our customizable
              dashboard.
            </p>

            <ul className="flex flex-col gap-2 lg:text-[18px]">
              <li className="flex items-center gap-2 ">
                <span>
                  <Image src={check} alt="chelmark" />
                </span>
                Consectetur adipiscing elit
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Image src={check} alt="chelmark" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Image src={check} alt="chelmark" />
                </span>
                Sed do eiusmod tempor incididunt ut labore
              </li>
            </ul>
            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px] ">
              Learn more <Image src={blueBtn} alt="learn-more" />
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px]  lg:gap-y-[80px] ">
        <div className="flex flex-col gap-x-6 sm:flex-row ">
          <Image
            src={features2}
            alt="featuser-1"
            className="hidden w-1/2 sm:block  "
          />
          <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px] ">
            <h3 className="font-medium text-[#00A424] lg:text-[18px]  ">
              Customer Support
            </h3>
            <h1 className=" pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]  ">
              Get in touch with your customers
            </h1>
            <Image
              src={features2}
              alt="features1"
              className="pt-[24px] sm:hidden "
            />
            <p className="py-[24px] text-[#36485C] font-medium lg:text-[18px]">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a bird's eye view with our customizable
              dashboard.
            </p>

            <ul className="flex flex-col gap-2 lg:text-[18px]">
              <li className="flex items-center gap-2 ">
                <span>
                  <Image src={check} alt="chelmark" />
                </span>
                Consectetur adipiscing elit
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Image src={check} alt="chelmark" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Image src={check} alt="chelmark" />
                </span>
                Sed do eiusmod tempor incididunt ut labore
              </li>
            </ul>
            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px] ">
              Learn more <Image src={greenBtn} alt="learn-more" />
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg: lg:gap-y-[80px] ">
        <div className="flex flex-col gap-x-6 sm:flex-row-reverse ">
          <Image
            src={features3}
            alt="featuser-3"
            className="hidden w-1/2 sm:block  "
          />
          <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px] ">
            <h3 className="font-medium text-[#E82891] lg:text-[18px]  ">
              Growth Monitoring
            </h3>
            <h1 className=" pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]  ">
              Monitor your site’s new subscribers
            </h1>
            <Image
              src={features3}
              alt="features3"
              className="pt-[24px] sm:hidden "
            />
            <p className="py-[24px] text-[#36485C] font-medium lg:text-[18px]">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a bird's eye view with our customizable
              dashboard.
            </p>

            <div className="flex w-full gap-x-[24px]  ">
              <div className="w-1/2 flex flex-col gap-y-3">
                <h3 className=" text-[20px] font-medium text-[#172026] ">
                  100+
                </h3>
                <p className="text-[#36485C]  ">Lorem ipsum dolor sit</p>
              </div>
              <div className="w-1/2 flex flex-col gap-y-3">
                <h3 className=" text-[20px] font-medium text-[#172026] ">
                  800+
                </h3>
                <p className="text-[#36485C]  ">Conse adipiscing elit</p>
              </div>
            </div>

            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#E82891] lg:text-[18px] ">
              Learn more <Image src={pinkBtn} alt="learn-more" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
