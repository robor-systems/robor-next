import Image from "next/image";
import { motion } from "framer-motion";
import ReactVisibilitySensor from "react-visibility-sensor";
import {
  doubleImageVariant,
  singleImageVariant,
} from "constants/animations/variants.constant";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import clsx from "clsx";
import { useIsomorphicLayoutEffect } from "utils/hooks";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);

const ImagesProject = ({ images, imageCount, slug, slider }) => {
  let genesis = images[0].genesis;
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const [visible, setVisible] = useState(false);

  // * for double images
  useIsomorphicLayoutEffect(() => {
    if (!slug) return;

    // * animating the double-image-slug class with scrollTrigger
    const doubleImage = document.querySelectorAll(`.double-image-${slug}`);
    if (!doubleImage) return;

    const [front, back] = Array.from(doubleImage);
    if (!front || !back) return;

    const tl = gsap.timeline();

    if (visible && isBigScreen) {
      tl.from(front, {
        top: "140px",
      });
      tl.to(front, {
        scrollTrigger: {
          trigger: front,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
        duration: 10,
        y: "-500px",
      });

      tl.from(back, {
        top: "- 110px",
      });
      tl.to(back, {
        scrollTrigger: {
          trigger: front,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
        duration: 10,
        y: "120px",
      });
    }

    return () => {
      tl.kill();
    };
  }, [slug, visible]);

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 100 }}
    >
      {imageCount === 1 ? (
        <div className="relative h-full md:overflow-hidden  md:bottom-0">
          {/* * Image container */}
          <motion.div
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            variants={singleImageVariant}
            transition={{ duration: 1 }}
            className={clsx(
              images[0].premium ? "lg:mt-[40px]" : "",
              "absolute md:right-[-50px] h-full   sm:mt-[20px] md:mt-[0] md:top-[210px] lg:top-[120px] xl:top-[95px] ",
              !slider ? "mt-[-140px] 3xl:top-[450px]" : "mt-[-90px]"
            )}
          >
            <Image
              src={images[0].imageUrl}
              width={images[0].width}
              height={images[0].height}
              alt="image"
              className={clsx("rounded-lg shadow-lg", `single-image-${slug} `)}
              placeholder="blur"
              blurDataURL={images[0].blurImageUrl}
            />
          </motion.div>
        </div>
      ) : (
        <div className="relative h-full sm:overflow-hidden ">
          {/* * Image one on top*/}
          <motion.div
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            variants={doubleImageVariant.topImage}
            transition={{ duration: 1.5 }}
            className={clsx(
              "absolute md:left-0 right-[65px] z-10 overflow-hidden shadow-lg  lg:top-[400px]   top-[-20px]  ",
              `double-image-${slug}`,
              genesis ? "lg:right-[10px]" : "lg:right-[120px]",
              slider
                ? "xl:top-[160px] lg:top-[245px] md:top-[395px] sm:top-[130px]  md:right-[56px]  sm:right-[150px] "
                : "3xl:top-[540px] lg:top-[350px] md:top-[440px] xl:right-[94] "
            )}
          >
            <Image
              src={images[0].imageUrl}
              width={images[0].width}
              height={images[0].height}
              alt="image"
              className="rounded-lg"
              placeholder="blur"
              blurDataURL={images[0].blurImageUrl}
            />
          </motion.div>
          {/* * Image two on bottom */}
          <motion.div
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            variants={doubleImageVariant.bottomImage}
            transition={{ duration: 1.5 }}
            className={clsx(
              "absolute left-[80px] z-0 shadow-lg    mr-[10px] md:mr-8  ",
              `double-image-${slug}`,
              slider
                ? "xl:top-[-124px] lg:top-[-12px] md:top-[164px] sm:top-[10px] top-[-95px] xl:left-[121px] lg:left-[94px] lg:rounded-r-lg overflow-hidden"
                : " xl:top-[150px] lg:top-[90px]  sm:top-[100px] top-[-150px] xl:left-[310px] lg:left-[140px]  overflow-hidden "
            )}
          >
            <div
              className={
                !slider
                  ? " relative xl:top-[-170px] lg:top-[-90px] md:top-[-60px] top-[-160px]"
                  : " relative top-[-160px] lg:top-[-88px]"
              }
            >
              <Image
                src={images[1].imageUrl}
                width={images[1].width}
                height={images[1].height}
                // layout="fill"
                alt="image"
                className="rounded-lg "
                placeholder="blur"
                objectFit="cover"
                blurDataURL={images[1].blurImageUrl}
              />
            </div>
          </motion.div>
        </div>
      )}
    </ReactVisibilitySensor>
  );
};

export default ImagesProject;
