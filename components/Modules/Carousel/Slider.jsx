import SlideItem from "./SlideItem";

import React from "react";
import InnerSlide from "./InnerSlide";
import workProjects from "constants/content/work.constant";
const Slider = () => {
  return (
    <div className="w-[80vw]  mx-auto my-0 ">
      <InnerSlide>
        {workProjects.map((content, index) => {
          return <SlideItem content={content} key={index} />;
        })}
      </InnerSlide>
    </div>
  );
};

export default Slider;
