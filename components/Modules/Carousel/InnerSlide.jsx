import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const InnerSlide = ({ slides, children }) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
     autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: (dots) => <div>{dots}</div>,
  };
  return (
    <div key={children.key}>
      <Slider {...settings}>
        {children.map((item, index) => {
          return (
            <div className="cursor:pointer" key={index}>
              {item}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default InnerSlide;
