import Image from "next/image";
import React from "react";
import arrow from "../public/assets/arrow.png";
const Cta = () => {
  return (
    <div className="px-[20px]">
      <div className=" lg:container lg:mx-auto  w-full text-center rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] lg:my-[60px] lg:px-[324px] lg:py-[89px]  ">
        <h1 className=" text-white text-[32px] font-medium lg:text-[56px] lg:leading-[64px] ">
          Monitoring your website lika a pro
        </h1>
        <p className="pt-6 text-white lg:pt-[48px] text-[18px] ">
          Join over 800+ happy site owners boosting productivity and effency!
        </p>
        <div className="mt-5 flex flex-col w-full items-center lg;mt-[56px] lg:flex-row lg:justify-center gap-x-[40px] font-medium ">
          <button className="py-[16px] px-[32px] bg-white rounded-[6px] text-pink-500 w-fit ">
            Try for free
          </button>
          <button className="flex gap-x-2 w-full items-center justify-center mt-[32px] text-white font-medium lg:w-fit lg:mt-0">
            Contact Sales
            <span>
              <Image src={arrow} alt="arrow" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
