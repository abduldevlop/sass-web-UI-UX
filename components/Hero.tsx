import React from "react";
import Image from "next/image";

import blueArrow from "../public/assets/blue-button.svg";
import bgGradiant from "../public/assets/Gradient.svg";
import heroImg from "../public/assets/Image.svg";

import google from "../public/assets/Google.svg";
import slack from "../public/assets/Slack.svg";
import trustpiolat from "../public/assets/Trustpilot.svg";
import cnn from "../public/assets/CNN.svg";
import clutch from "../public/assets/Clutch.svg";
const Hero = () => {
  return (
    <section className="pt-4 lg:pt-10  ">
      <div className="px-[20px] lg:px-[280px] ">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]  ">
          Start monitoring your website lika a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7 ">
          Get a bird's eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>

        <div className="flex w-full mt-5 justify-center gap-x-6 ">
          <button className="w-1/2  bg-[#4328EB] py-[16px] px-8 text-white lg:w-fit">
            Try for Free
          </button>
          <div className="flex items-center pl-2 w-1/2 lg:w-fit gap-x-2">
            <button className="   text-[#4328EB] ">View Pricing</button>
            <span>
              <Image src={blueArrow} alt="arrow" />
            </span>
          </div>
        </div>
      </div>

      <div className="relative fle h-full w-full justify-center">
        <Image
          src={bgGradiant}
          alt="bg"
          className="min-h-[500px] w-full object-cover lg:h-auto "
        />
        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={heroImg}
            alt="heroimg"
            className="-ml-10 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-[120px] lg:h-auto xl:w-[70%] "
          />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row  lg:justify-between lg:px-20 ">
            <p className="text-[#FFFFFF] font-medium text-center lg:text-[18px] ">
              Trusted by companies
            </p>
            <div
              className="grid grid-cols-3 justify-center items-center
             px-[20px] align-middle lg:grid-cols-5  "
            >
              <Image src={google} alt="google" />
              <Image src={slack} alt="slack" />
              <Image src={trustpiolat} alt="trustpiolat" />
              <Image src={cnn} alt="cnn" />
              <Image src={clutch} alt="clutch" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
