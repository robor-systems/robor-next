import SlideItem from "./SlideItem";
import { v4 } from "uuid";
import React from "react";
import InnerSlide from "./InnerSlide";
import workProjects from "constants/content/work.constant";
const Slider = () => {
  return (
    <div className="w-full h-full bg-light-bgSecondary rounded-3xl">
      <InnerSlide>
        {workProjects.map((content, index) => {
          return <SlideItem content={content} key={v4()} />;
        })}
      </InnerSlide>
    </div>
  );
};

export default Slider;
