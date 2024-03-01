"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { accordians } from "@/constants";
import pluse from "../public/assets/Plus.svg";
import Image from "next/image";

const Faq = () => {
  return (
    <>
      <div className="px-[20px] lg:px-[40px]  flex flex-col  w-full py-[48px]  lg:py-[60px] lg:flex-row lg:gap-x-6  ">
        <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]  ">
          <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base ">
            Frequently Asked Questions
          </h3>
          <h1 className="text-2xl py-4 font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] ">
            Lets clarify some of your questions
          </h1>
          <p className="text-[#36485C]  pb-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="lg:w-2/3">
          <Accordion.Root
            type="single"
            defaultValue="item-1"
            collapsible
            className="flex flex-col gap-y-4"
          >
            {accordians.map((item, index) => (
              <div key={index}>
                <Accordion.Item
                  value={`item-${index + 1}`}
                  className="bg-[#E3F1FF] p-[16px] rounded-[8px]  "
                >
                  {
                    <Accordion.Header>
                      <Accordion.Trigger className="flex w-full items-center justify-between">
                        <p className="text-left font-medium">{item.question}</p>
                        <span>
                          <Image
                            src={pluse}
                            alt="see more"
                            height={20}
                            width={20}
                          />
                        </span>
                      </Accordion.Trigger>
                      <Accordion.Content>
                        <p className="text-left text-[#212527] pt-2 text-[14px] ">
                          {item.answer}
                        </p>
                      </Accordion.Content>
                    </Accordion.Header>
                  }
                </Accordion.Item>
              </div>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </>
  );
};

export default Faq;
