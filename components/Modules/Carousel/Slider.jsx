import SlideItem from "./SlideItem";

import React from "react";
import InnerSlide from "./InnerSlide";
import workProjects from "constants/content/work.constant";
const Slider = () => {
  return (
    <div className="w-[70vw]  mx-auto my-0 bg-light-bgSecondary h-[85vh] rounded-2xl">
      <InnerSlide>
        {workProjects.map((content, index) => {
          return <SlideItem content={content} key={index} />;
        })}
      </InnerSlide>
    </div>
  );
};

export default Slider;
