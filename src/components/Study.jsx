import Image from "next/image";
import React from "react";
import Slider from "./Slider";
import angryGhost from "../assets/ghost-cute.gif";

const Study = () => {
  return (
    <div>
      <div className="grid grid-cols-3 justify-between my-6">
        <div className=" p-6 font-bold text-4xl">
          EQ beats IQ
        </div>
        <div className=" p-6 text-gray-500 text-lg font-medium tracking-wide">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s{" "}
        </div>
        <div className=" p-6 text-gray-500 text-lg font-medium tracking-wide">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s,
        </div>
      </div>
      <div>
        <div className="flex">
          <h1 data-aos="zoom-in-right" data-aos-duration="1500" className="text-4xl font-bold p-6">
            Does this sound familiar...
          </h1>
          <Image
            data-aos="fade-left"
            data-aos-duration="1500"
            className="w-20"
            src={angryGhost}
            alt="angry-ghost"
          />
        </div>
        <div className="mb-20">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Study;
