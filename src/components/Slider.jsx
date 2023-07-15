import React from "react";
import SliderCard from "./SliderCard";

const Slider = () => {
  return (
    <div data-aos="fade-right" className="flex m-auto overflow-hidden w-auto">
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex space-x-10  p-6">
          <SliderCard
            bgColor="bg-indigo-100"
            title="You get a promotion at work"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="😃"
          />
          <SliderCard
            bgColor="bg-red-100"
            title="You argue with a friend"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="😠"
          />
          <SliderCard
            tilted
            bgColor="bg-purple-500"
            text="text-white"
            title="You get a promotion at work"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="😔"
          />
          <SliderCard
            bgColor="bg-orange-200"
            title="You get a promotion at work"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="😳"
          />
          <SliderCard
            bgColor="bg-green-100"
            title="You get a promotion at work"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="🙂"
          />
          <SliderCard
            tilted
            bgColor="bg-rose-400"
            text="text-white"
            title="You get a promotion at work"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="😟"
          />
          <SliderCard
            bgColor="bg-red-100"
            title="You get a promotion at work"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            emoji="😑"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
