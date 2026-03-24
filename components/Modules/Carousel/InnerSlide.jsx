import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const InnerSlide = ({ children }) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    appendDots: (dots) => <div>{dots}</div>,
    className: "w-full h-full dark:bg-dark-bgPrimary",
  };
  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {children.map((item, index) => {
          return item;
        })}
      </Slider>
    </div>
  );
};

export default InnerSlide;
