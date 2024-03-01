import React from "react";
import check from "../public/assets/check.svg";
import Image from "next/image";

const Pricing = () => {
  return (
    <section className="py-[48px] px-[20px] lg:py-[60px] ">
      <h1 className="text-[#172026] text-center text-[24px] font-medium lg:text-[42px] ">
        Flexible plans for you
      </h1>
      <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]  ">
        No hidden fees!
      </p>
      <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-[24px] ">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between ">
          <div>
            <h3 className="font-medium text-[#4328EB] text[18px] lg:text-xl ">
              Free Trial
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]  ">
              Perfect for testing the waters
            </p>
            <h2 className="pt-4 font-medium text-2xl lg:text-[32px] ">
              $0 <span className="text-[#5F7896]">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
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
                Sed do eiusmod tempor incididunt
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Image src={check} alt="chelmark" />
                </span>
                Consectetur adipiscing elit
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium ">
            Start Trial
          </button>
        </div>

        <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col ">
          <div>
            <h3 className="font-medium text-[#FFFFFF] text[18px] lg:text-xl ">
              Business
            </h3>
            <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]  ">
              Perfect for small businesses
            </p>
            <h2 className="pt-4 font-medium text-2xl lg:text-[32px] text-white ">
              $5 <span className="text-[#F5F4FF]">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#F5F4FF]">
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
                Sed do eiusmod tempor incididunt
              </li>
              <li className="flex items-center gap-2">
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
                Consectetur adipiscing elit
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium ">
            Get Started
          </button>
        </div>

        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between ">
          <div>
            <h3 className="font-medium text-[#4328EB] text[18px] lg:text-xl ">
              Enterprise
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]  ">
              Perfect for big companies
            </p>
            <h2 className="pt-4 font-medium text-2xl lg:text-[32px] ">
              Custom
            </h2>
            <p className="pt-4 text-[16px] text-[#36385C] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p className="pt-4 text-[16px] text-[#36385C] ">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium ">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
