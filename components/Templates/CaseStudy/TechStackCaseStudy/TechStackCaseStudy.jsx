import { useRef, useState } from "react";
import clsx from "clsx";
import SectionTechStack from "./SectionTechStack";
import ReactVisibilitySensor from "react-visibility-sensor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { useIsomorphicLayoutEffect } from "utils/hooks";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

const TechStackCaseStudy = ({ description, frontend, backend, other }) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [visible, setVisible] = useState(false);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const el_Left = leftTextRef.current;
    const el_Right = rightTextRef.current;
    let rightVal = isBigScreen ? 150 : 20;
    let leftVal = isBigScreen ? -150 : -20;
    if (visible) {
      tl.from(el_Left, { x: leftVal });
      tl.to(el_Left, {
        // scrollTrigger: {
        //   trigger: el_Left,
        //   start: "left right",
        //   end: "right left",
        // },

        x: 0,
      });

      tl.from(el_Right, { x: rightVal });
      tl.to(el_Right, {
        // scrollTrigger: {
        //   trigger: el_Right,
        // },

        x: 0,
      });
    }
    return () => {
      tl.kill();
    };
  }, [isBigScreen, visible]);
  return (
    <ReactVisibilitySensor
      partialVisibility
      offset={{ bottom: 100 }}
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
    >
      <div
        className={clsx(
          "md:py-24 py-16  md:px-44 px-8",
          "grid grid-cols-2 gap-10",
          "bg-light-bgPrimary dark:bg-dark-bgPrimary"
        )}
      >
        {/* * left content */}
        <div
          ref={leftTextRef}
          className="flex flex-col space-y-4 col-span-full md:col-span-1 text-light-contentSecondary dark:text-dark-contentSecondary"
        >
          {/* * explore more heading */}
          <h4 className="project-info-heading ">Technology Stack</h4>
          {/* * project title */}
          <h1 className="pr-10 text-2xl font-bold sm:text-3xl md:text-4xl text-light-primary dark:text-dark-primary">
            Technological expertise provided by Robor
          </h1>
        </div>
        {/* * right content */}

        <div
          ref={rightTextRef}
          className="flex flex-col space-y-6 md:justify-end md:col-span-1 col-span-full"
        >
          {/* * Description */}
          <p className=" text-md md:text-lg">{description}</p>
          {/* * Stack Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {/* * Frontend */}
            <SectionTechStack title="Frontend" stack={frontend} />
            {/* * Other */}
            <SectionTechStack title="Other" stack={other} />
            {/* * Backend */}
            <SectionTechStack title="Backend" stack={backend} />
          </div>
        </div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default TechStackCaseStudy;
