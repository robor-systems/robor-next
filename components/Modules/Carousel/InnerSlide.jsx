import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import clsx from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const InnerSlide = ({ slides, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? children.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === children.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
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
    <div key={children}>
      <Slider {...settings}>
        {children.map((item) => {
          return <div className="cursor:pointer">{item}</div>;
        })}
      </Slider>
    </div>
    // <div>

    //
    //   {/* pagination */}
    //   <div className="flex justify-center mt-5">
    //     {children.map((slide, slideIndex) => (
    //       <>
    //         <div
    //           key={slideIndex}
    //           onClick={() => goToSlide(slideIndex)}
    //           className="text-2xl cursor-pointer my-0 mx-1"
    //         >
    //           {currentIndex === slideIndex ? (
    //             <div className="w-6 h-2 rounded-3xl bg-light-primary"></div>
    //           ) : (
    //             <div className="w-2 h-2 bg-gray-400 rounded-full"> </div>
    //           )}
    //         </div>
    //       </>
    //     ))}
    //   </div>
    // </div>
  );
};

export default InnerSlide;
