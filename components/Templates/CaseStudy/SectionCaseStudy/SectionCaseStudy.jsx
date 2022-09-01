import { useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { useIsomorphicLayoutEffect } from "utils/hooks";
import ReactVisibilitySensor from "react-visibility-sensor";
gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline();

const SectionCaseStudy = ({
  header,
  subHeader,
  index,
  description,
  image,
  blurImage,

  ...props
}) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [visible, setVisible] = useState(false);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const imgRef = useRef(null);
  const imgContainer = useRef(null);
  useIsomorphicLayoutEffect(() => {
    const el_Left = leftTextRef.current;
    const el_Right = rightTextRef.current;
    const el_img = imgRef.current;
    let rightVal = isBigScreen ? 130 : 20;
    let leftVal = isBigScreen ? -130 : -20;
    if (visible) {
      timeline.from(el_Left, { x: leftVal });
      timeline.to(el_Left, {
        // scrollTrigger: {
        //   trigger: el_Left,
        //   start: "left right",
        // },

        x: 0,
      });

      timeline.from(el_Right, { x: rightVal });
      timeline.to(el_Right, {
        x: 0,
      });

      timeline.from(el_img, { opacity: 0 });
      timeline.to(el_img, {
        opacity: 1,

        ease: "power4.easeInOut",
      });
    }
  }, [isBigScreen, visible]);
  return (
    <ReactVisibilitySensor
      partialVisibility
      offset={{ top: -100 }}
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
    >
      <div
        className={clsx(
          index % 2 === 0
            ? "bg-light-bgPrimary dark:bg-dark-bgPrimary"
            : "bg-light-bgSecondary dark:bg-dark-bgSecondary",
          "md:py-24 py-16 px-8 md:px-24 lg:px-44",
          "space-y-10 md:space-y-10"
        )}
      >
        {/* * Top content */}
        <div className={clsx("grid grid-cols-2 gap-2 md:gap-10")}>
          {/* * left content */}
          <motion.div
            className="flex flex-col justify-center space-y-2 md:col-span-1 col-span-full text-light-contentSecondary dark:text-dark-contentSecondary"
            ref={leftTextRef}
          >
            {/* * subheader */}
            <h4 className="project-info-heading ">{subHeader}</h4>
            {/* * header */}
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-light-primary dark:text-dark-primary">
              {header}
            </h1>
          </motion.div>
          {/* * right content */}
          <motion.div
            className=" text-md md:text-lg md:col-span-1 col-span-full"
            ref={rightTextRef}
          >
            {description}
          </motion.div>
        </div>
        {/* * bottom images div */}

        {!!image && (
          <div
            ref={imgContainer}
            className="flex items-center justify-center w-full h-[220px] md:h-[456px] m-auto"
          >
            <motion.div className="relative w-full h-full" ref={imgRef}>
              <Image
                src={image}
                alt={header}
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          </div>
        )}
      </div>
    </ReactVisibilitySensor>
  );
};

export default SectionCaseStudy;
