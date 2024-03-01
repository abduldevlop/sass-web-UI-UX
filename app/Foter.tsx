import Image from "next/image";
import React from "react";
import logo from "../public/assets/Logo.svg";

import Facebook from "../public/assets/Facebook.svg";
import x from "../public/assets/X.svg";
import Feed from "../public/assets/Feed.svg";
const Foter = () => {
  return (
    <footer className="pt-[80px] pb-[40px]  ">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-around ">
        <div className="flex gap-x-[12px] items-center ">
          <Image src={logo} alt={"logo"} />
          <p className="font-bold text-[#36485C] text-[17px]  ">
            Abdul Rahaman
          </p>
        </div>

        <div>
          <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5 ">
            <li>Features</li>
            <li>Pricing</li>
            <li>Enterprise</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:justify-around">
        <p className="pt-[56px]  text-center text-[14px] font-medium text-[#5F7896] sm:pt-[56px] ">
          © Copyright 2024. Your Site. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-x-[56px] pt-[40px] ">
          <Image src={Facebook} alt="facebook" />
          <Image src={x} alt="x" />
          <Image src={Feed} alt="feed" />
        </div>
      </div>
    </footer>
  );
};

export default Foter;
